import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProperties, deleteProperty } from "../../services/adminService";


export default function AdminPropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (err) {
        console.error("Error al cargar propiedades:", err);
      }finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Estás seguro de que querés eliminar esta propiedad?"); 
    if (confirm) {
      try {
        await deleteProperty(id); 
        setProperties(properties.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error al eliminar propiedad:", err);
      }
    }
  };


  return (

    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Listado de Propiedades</h2>
        <button
          onClick={() => navigate("/admin/property/create")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Crear nueva propiedad
        </button>
      </div>

      {loading ? (
        <p>Cargando propiedades...</p>
      ) : properties.length === 0 ? (
        <p>No hay propiedades disponibles.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Descripción</th>
              <th className="px-4 py-2 text-left">Fotos</th>
              <th className="px-4 py-2 text-left">Precio</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
  {properties.map((property) => (
    <tr key={property.id} className="border-t">
      <td className="px-4 py-2">{property.name}</td>
      <td className="px-4 py-2">{property.description.slice(0, 50)}...</td>
      <td className="px-4 py-2">{property.photos?.length || 0}</td>
      <td className="px-4 py-2 text-green-700 font-semibold">
        {property.priceText || property.priceValue?.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
        })}
      </td>
      <td className="px-4 py-2 space-x-2">
        <button
          onClick={() => navigate(`/admin/property/edit/${property.id}`)}
          className="text-blue-600 hover:underline"
        >
          ✏️ Editar
        </button>
        <button
          onClick={() => handleDelete(property.id)}
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