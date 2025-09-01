// src/pages/ProjectDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/project";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjectById(id)
      .then((res) => setProject(res.data))
      .catch(() => setError("No se pudo cargar el proyecto"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container mx-auto py-12">Cargando...</div>;
  if (error) return <div className="container mx-auto py-12">{error}</div>;
  if (!project) return <div className="container mx-auto py-12">Proyecto no encontrado</div>;

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image || project.cover].filter(Boolean);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>

      {images?.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}
