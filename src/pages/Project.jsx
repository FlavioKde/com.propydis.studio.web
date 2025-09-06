import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { getProjects } from "../api/project";
import PageWithHero from "../components/PageWithHero";
import Card from "../components/Card";
import { safeApiCall } from "../utils/safeApiCall";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
  safeApiCall(() => getProjects(), navigate)
    .then(setProjects)
    .finally(() => setLoading(false));

}, [navigate]);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
 
  return (
    <PageWithHero
      title="Nuestros Proyectos"
      subtitle="Descubre en qué estamos trabajando actualmente."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Card
            key={p.id}
            image={p.images?.[0] || "/default.jpg"}
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