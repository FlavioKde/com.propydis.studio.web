import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProjectById } from "../api/project"
import { safeApiCall } from "../utils/safeApiCall"

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    safeApiCall(() => getProjectById(id), navigate)
      .then((data) => {
        console.clear()
        console.log("[ProjectDetail] ✅ Proyecto recibido:", data)
        console.log("[ProjectDetail] 📸 Images array:", data.images)
        console.log("[ProjectDetail] 📊 Images count:", data.images?.length || 0)
        setProject(data)
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>
  if (!project) return <div className="container mx-auto py-12">Proyecto no encontrado</div>

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>

      {project.images?.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4">
          {project.images.map((imageUrl, idx) => (
            <img
              key={idx}
              src={imageUrl || "/placeholder.svg"}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
              onLoad={() => console.log(`[ProjectDetail] ✅ Image ${idx + 1} loaded:`, imageUrl)}
              onError={() => console.log(`[ProjectDetail] ❌ Image ${idx + 1} failed:`, imageUrl)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
