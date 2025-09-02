import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminContact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    api.get("/admin/contact")
      .then(res => setContact(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gestión de Contactos</h1>
      <ul>
        {contact.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}