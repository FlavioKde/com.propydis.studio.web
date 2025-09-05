import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../api/property";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPropertyById(id)
      .then((data) => setProperty(data)) // ahora data ya viene mapeada
      .catch(() => setError("No se pudo cargar la propiedad"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
  if (error) return <div className="container mx-auto py-12">{error}</div>;
  if (!property) return <div className="container mx-auto py-12">Propiedad no encontrada</div>;

  const { title, description, images, priceText, priceValue } = property;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="mb-6">{property.description}</p>
      <p className="text-green-700 text-lg font-semibold mb-4">
      {priceText
      ? priceText
      : priceValue?.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      })}
        </p>
        {!priceText && !priceValue && (
          <p className="text-gray-500 italic">Precio no disponible</p>
        )}

      {property.images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4">
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${property.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}