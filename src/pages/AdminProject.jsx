import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/admin/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gestión de Projectos</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}