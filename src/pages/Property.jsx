import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProperties } from "../api/property"
import PageWithHero from "../components/PageWithHero"
import Card from "../components/Card"
import { safeApiCall } from "../utils/safeApiCall"

export default function Property() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    safeApiCall(() => getProperties(), navigate)
      .then((data) => {
        console.log("🏠 [PROPERTIES DATA]", data)

        data.forEach((property, index) => {
          console.log(`🔍 [PROPERTY ${index + 1}]`, {
            id: property.id,
            title: property.title,
            hasImages: property.images?.length > 0,
            imagesCount: property.images?.length || 0,
            firstImageUrl: property.images?.[0] || "NO IMAGE",
            allImages: property.images,
            priceText: property.priceText,
            priceValue: property.priceValue,
          })
        })

        setProperties(data)
      })
      .catch((error) => {
        console.error("[v0] Error fetching properties:", error)
      })
      .finally(() => setLoading(false))
  }, [navigate])

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>

  return (
    <PageWithHero title="Propiedades" subtitle="Nuestras propiedades más destacadas.">
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((p) => {
          const photoUrl = p.images?.[0]

          return (
            <Card
              key={p.id}
              photo={photoUrl}
              title={p.title}
              description={p.description}
              link={`/property/${p.id}`}
              extra={
                <p className="text-green-700 font-semibold">
                  {p.priceText
                    ? p.priceText
                    : p.priceValue?.toLocaleString("es-ES", {
                        style: "currency",
                        currency: "EUR",
                      })}
                </p>
              }
              buttonLabel="Ver propiedad"
            />
          )
        })}
      </div>
    </PageWithHero>
  )
}
