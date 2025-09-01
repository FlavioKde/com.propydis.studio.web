// src/pages/Project.jsx
import { useEffect, useState } from "react";
import { getProjects } from "../api/project";
import PageWithHero from "../components/PageWithHero";
import Card from "../components/Card";

export default function Project() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((res) => setProject(res.data))
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
        {project.map((p) => (
          <Card
            key={p.id}
            image={p.image || p.cover || p.images?.[0]}
            title={p.title}
            description={p.shortDescription || p.description}
            link={`/project/${p.id}`}
            buttonLabel="Ver proyecto completo"
          />
        ))}
      </div>
    </PageWithHero>
  );
}