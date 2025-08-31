import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminProperty() {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    api.get("/admin/property")
      .then(res => setProperty(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gestión de Propiedades</h1>
      <ul>
        {properties.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}