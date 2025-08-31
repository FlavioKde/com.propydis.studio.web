import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/admin/contacts")
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gestión de Contactos</h1>
      <ul>
        {contacts.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}