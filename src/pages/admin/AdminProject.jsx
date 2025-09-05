import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjects, deleteProject } from "../../services/adminService";
import { updateProjectForm } from "../../services/adminService";

export default function AdminProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de que querés eliminar este proyecto?");
    if (confirm) {
      try {
        await deleteProject(id);
        setProjects(projects.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error al eliminar proyecto:", err);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Listado de Proyectos</h2>
        <button
          onClick={() => navigate("/admin/project/create")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Crear nuevo proyecto
        </button>
      </div>

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : projects.length === 0 ? (
        <p>No hay proyectos disponibles.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Descripción</th>
              <th className="px-4 py-2 text-left">Fotos</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t">
                <td className="px-4 py-2">{project.name}</td>
                <td className="px-4 py-2">{project.description.slice(0, 50)}...</td>
                <td className="px-4 py-2">{project.photosDTO?.length || 0}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => navigate(`/admin/project/edit/${project.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:underline"
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}