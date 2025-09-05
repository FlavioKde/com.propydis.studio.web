import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveProject } from "../../services/adminService";


export default function AdminProjectCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
  const validFiles = [...e.target.files].filter(file =>
    file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
  );
  setImages(validFiles);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    images.forEach((img) => {
      formData.append("photos", img); // el backend debe mapear esto a PhotoDTO
    });

    try {
      await saveProject(formData);
      navigate("/admin/project");
    } catch (err) {
      console.error("Error al crear proyecto:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Crear Proyecto</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
        {images.map((img, index) => (
        <img
          key={index}
          src={URL.createObjectURL(img)}
          alt={`preview-${index}`}
          className="w-full h-auto rounded"
        />
        ))}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  );
}