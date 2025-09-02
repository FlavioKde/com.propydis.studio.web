import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminProject() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    api.get("/admin/project")
      .then(res => setProject(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gestión de Projectos</h1>
      <ul>
        {project.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}