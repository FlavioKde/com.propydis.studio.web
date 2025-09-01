import { useEffect, useState } from "react";
import { getProperties } from "../api/property";
import PageWithHero from "../components/PageWithHero";
import Card from "../components/Card";

export default function Property() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProperties()
      .then((data) => setProperties(data)) // ahora data ya viene mapeada
      .catch(() => setError("No se pudieron cargar las propiedades"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
  if (error) return <div className="container mx-auto py-12">{error}</div>;

  return (
    <PageWithHero
      title="Listado de Propiedades"
      subtitle="Nuestras propiedades más destacadas."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((p) => (
          <Card
            key={p.id}
            image={p.images[0]} // ya viene del mapProperty
            title={p.title}
            description={p.description}
            link={`/property/${p.id}`}
            buttonLabel="Ver propiedad"
          />
        ))}
      </div>
    </PageWithHero>
  );
}