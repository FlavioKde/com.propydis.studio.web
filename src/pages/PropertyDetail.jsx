import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyById } from "../api/property";
import { safeApiCall } from "../utils/safeApiCall";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    safeApiCall(() => getPropertyById(id), navigate)
      .then(setProperty)
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
  if (!property) return <div className="container mx-auto py-12">Propiedad no encontrada</div>;

  const { title, description, images, priceText, priceValue } = property;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
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

      {images.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}