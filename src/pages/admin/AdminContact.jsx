import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllContacts,
  markContactAsRead,
  deleteContact,
} from "../../services/adminService";
import { markContactAsViewed } from "../../services/adminService";


export default function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchContacts() {
      try {
        const data = await getAllContacts();
        setContacts(data);
      } catch (err) {
        console.error("Error al cargar contactos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  async function handleMarkAsRead(id) {
    try {
      await markContactAsRead(id);
      const updated = contacts.map((c) =>
        c.id === id ? { ...c, contactStatus: "VIEWED" } : c
      );
      setContacts(updated);
    } catch (err) {
      console.error("Error al marcar como leído:", err);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteContact(id);
      const updated = contacts.filter((c) => c.id !== id);
      setContacts(updated);
    } catch (err) {
      console.error("Error al eliminar contacto:", err);
    }
  }



  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📨 Mensajes de Contacto</h2>
      </div>

      {loading ? (
        <p>Cargando contactos...</p>
      ) : contacts.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Apellido</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Teléfono</th>
              <th className="px-4 py-2 text-left">Mensaje</th>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2">{c.firstName}</td>
                <td className="px-4 py-2">{c.lastName}</td>
                <td className="px-4 py-2">{c.email}</td>
                <td className="px-4 py-2">{c.phone}</td>
                <td className="px-4 py-2">
                  {c.mensaje?.length > 50
                    ? c.message.slice(0, 50) + "..."
                    : c.message || "Sin mensaje"}
                </td>
                <td className="px-4 py-2">
                    {c.createdAt
                ? new Date(c.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
              })
                    : "Sin fecha"}
                </td>
                <td className="px-4 py-2">
                  {c.contactstatus === "NEW" && "🟡 Nuevo"}
                  {c.contactStatus === "VIEWED" && "🔵 Visto"}
                  {c.contactStatus === "REPLIED" && "🟢 Respondido"}
                </td>
                <td className="px-4 py-2 space-x-2">
                  {c.contactStatus !== "REPLIED" && (
                    <button
                      onClick={() => handleMarkAsRead(c.id)}
                      className="text-blue-600 hover:underline"
                    >
                      📬 Marcar como leído
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(c.id)}
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