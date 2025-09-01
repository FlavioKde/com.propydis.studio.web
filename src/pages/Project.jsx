import { useEffect, useState } from "react";
import { getProjects } from "../api/project";
import PageWithHero from "../components/PageWithHero";
import Card from "../components/Card";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch(() => setError("No se pudieron cargar los proyectos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
  if (error) return <div className="container mx-auto py-12">{error}</div>;

  return (
    <PageWithHero
      title="Nuestros Proyectos"
      subtitle="Descubre en qué estamos trabajando actualmente."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Card
            key={p.id}
            image={p.images[0]}
            title={p.title}
            description={p.description}
            link={`/project/${p.id}`}
            buttonLabel="Ver proyecto completo"
          />
        ))}
      </div>
    </PageWithHero>
  );
}