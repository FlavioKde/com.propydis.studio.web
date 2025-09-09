import { Link } from "react-router-dom"
import { useState } from "react"

export default function Card({ photo, title, description, link, buttonLabel = "Ver más", extra = null }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  console.log("🔄 [CARD DEBUG]", {
    title,
    photo: photo || "NO PHOTO",
    photoType: typeof photo,
    photoLength: photo?.length || 0,
    imageError,
    imageLoaded,
  })

  const handleImageError = (e) => {
    console.error("❌ [IMAGE ERROR]", {
      src: e.target.src,
      title,
      error: e.type,
    })
    setImageError(true)
  }

  const handleImageLoad = () => {
    console.log("✅ [IMAGE SUCCESS]", { title, src: photo })
    setImageLoaded(true)
  }

  const showPlaceholder = !photo || imageError

  return (
    <div className="bg-white shadow rounded overflow-hidden flex flex-col">
      <div className="relative w-full h-[200px] bg-gray-200">
        {showPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🖼️</div>
              <div className="text-sm font-medium">Sin Imagen</div>
              {photo && imageError && (
                <div className="text-xs mt-2 px-2 break-all max-w-[200px]">Error: {photo.substring(0, 50)}...</div>
              )}
            </div>
          </div>
        ) : (
          <>
            <img
              src={photo || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
              onError={handleImageError}
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-gray-500">Cargando imagen...</div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        {extra && <div className="mt-2">{extra}</div>}
        <Link
          to={link}
          className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  )
}
