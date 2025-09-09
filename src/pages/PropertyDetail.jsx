import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPropertyById } from "../api/property"
import { safeApiCall } from "../utils/safeApiCall"

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("[v0] PropertyDetail - Loading property with ID:", id)

    safeApiCall(() => getPropertyById(id), navigate)
      .then((data) => {
        console.log("[v0] PropertyDetail - Received property data:", data)
        console.log("[v0] PropertyDetail - Images array:", data?.images)
        console.log("[v0] PropertyDetail - Images count:", data?.images?.length || 0)
        setProperty(data)
      })
      .catch((error) => {
        console.error("[v0] PropertyDetail - Error loading property:", error)
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>
  if (!property) return <div className="container mx-auto py-12">Propiedad no encontrada</div>

  const { name, description, images, priceText, priceValue } = property

  console.log("[v0] PropertyDetail - Rendering property:", {
    name,
    description,
    imagesCount: images?.length,
    priceText,
    priceValue,
  })

  

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="mb-6">{description}</p>
         
      
      <p className="text-green-700 text-lg font-semibold mb-4">
      {priceText
        ? priceText
        : priceValue?.toLocaleString("es-ES", {
            style: "currency",
            currency: "USD",
          })}
    </p>
    {!priceText && !priceValue && (
      <p className="text-gray-500 italic">Precio no disponible</p>
    )}

      {images && images.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, idx) => {
            console.log("[v0] PropertyDetail - Rendering image:", img)
            return (
              <img
                key={idx}
                src={img || "/placeholder.svg"}
                alt={`${name} ${idx + 1}`}
                className="w-full h-48 object-cover rounded"
                onLoad={() => console.log("[v0] PropertyDetail - Image loaded successfully:", img)}
                onError={(e) => {
                  console.error("[v0] PropertyDetail - Image failed to load:", img)
                  console.error("[v0] PropertyDetail - Error details:", e)
                }}
              />
            )
          })}
        </div>
      ) : (
        <div className="text-gray-500 italic">
          {console.log("[v0] PropertyDetail - No images available")}
          No hay imágenes disponibles
        </div>
      )}
    </div>
  )
}
