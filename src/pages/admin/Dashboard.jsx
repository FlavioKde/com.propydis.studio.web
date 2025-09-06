import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProperties, getAllProjects, getAllContacts } from "../../services/adminService";
import { safeApiCall } from "../../utils/safeApiCall";




export default function Dashboard() {
  const [propertyCount, setPropertyCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [recentContacts, setRecentContacts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
  async function fetchData() {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const [properties, projects, contacts] = await Promise.all([
        safeApiCall(() => getAllProperties(), navigate),
        safeApiCall(() => getAllProjects(), navigate),
        safeApiCall(() => getAllContacts(), navigate),
      ]);

      setPropertyCount(properties.length);
      setProjectCount(projects.length);

      const sortedContacts = contacts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

      setRecentContacts(sortedContacts);
    } catch (err) {
      console.error("Error en el dashboard:", err);
    }
  }

  fetchData();
}, [navigate]);




  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <MetricCard title="Propiedades" value={propertyCount} />
        <MetricCard title="Proyectos" value={projectCount} />
        <MetricCard title="Mensajes" value={recentContacts.length} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Últimos mensajes recibidos</h2>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Mensaje</th>
              <th className="p-2 text-left">Fecha</th>
              <th className="p-2 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((contact) => (
              <tr key={contact.id} className="border-t">
                <td className="p-2">{contact.firstName} {contact.lastName}</td>
                <td className="p-2">{contact.email}</td>
                <td className="p-2">{contact.message.slice(0, 50)}...</td>
                <td className="p-2">{new Date(contact.createdAt).toLocaleDateString()}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-white text-xs ${
                    contact.status === "RESPONDED" ? "bg-green-500" : "bg-yellow-500"
                  }`}>
                    {contact.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-accent1-blue">{value}</p>
    </div>
  );
}