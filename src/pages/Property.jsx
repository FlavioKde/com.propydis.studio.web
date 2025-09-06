import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../api/property";
import PageWithHero from "../components/PageWithHero";
import Card from "../components/Card";
import { safeApiCall } from "../utils/safeApiCall";

export default function Property() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    safeApiCall(() => getProperties(), navigate)
      .then(setProperties)
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;

  return (
    <PageWithHero
      title="Listado de Propiedades"
      subtitle="Nuestras propiedades más destacadas."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((p) => (
          <Card
            key={p.id}
            image={p.images?.[0] || "/default.jpg"}
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
        ))}
      </div>
    </PageWithHero>
  );
}