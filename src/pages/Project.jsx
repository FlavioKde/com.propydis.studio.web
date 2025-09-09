import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProjects } from "../api/project"
import PageWithHero from "../components/PageWithHero"
import Card from "../components/Card"
import { safeApiCall } from "../utils/safeApiCall"

export default function Project() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    safeApiCall(() => getProjects(), navigate)
      .then((data) => {
        console.log("📊 [PROJECTS DATA]", data)

        data.forEach((project, index) => {
          console.log(`🔍 [PROJECT ${index + 1}]`, {
            id: project.id,
            title: project.title,
            hasImages: project.images?.length > 0,
            imagesCount: project.images?.length || 0,
            firstImageUrl: project.images?.[0] || "NO IMAGE",
            allImages: project.images,
          })
        })

        setProjects(data)
      })
      .catch((error) => {
        console.error("[v0] Error fetching projects:", error)
      })
      .finally(() => setLoading(false))
  }, [navigate])

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>

  return (
    <PageWithHero title="Proyectos" subtitle="Nuestros proyectos más destacados.">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => {
          const photoUrl = p.images?.[0]

          return (
            <Card
              key={p.id}
              photo={photoUrl}
              title={p.title}
              description={p.description}
              link={`/project/${p.id}`}
              buttonLabel="Ver proyecto completo"
            />
          )
        })}
      </div>
    </PageWithHero>
  )
}
