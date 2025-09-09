import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveProperty } from "../../services/adminService";
import { safeApiCall } from "../../utils/safeApiCall";

export default function AdminPropertyCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [priceValue, setPriceValue] = useState("");
  const [priceText, setPriceText] = useState("");
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
  setLoading(true);

  if (!priceText && !priceValue) {
    alert("Debes ingresar al menos un tipo de precio.");
    setLoading(false);
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  if (priceValue) {
  formData.append("priceValue", Number(priceValue));
}

if (priceText.trim()) {
  formData.append("priceText", priceText.trim());
}

  /*
  formData.append("priceValue", priceValue);
  formData.append("priceText", priceText);
  */
  images.forEach((img) => formData.append("photos", img));

  safeApiCall(() => saveProperty(formData), navigate)
    .then(() => navigate("/admin/property"))
    .finally(() => setLoading(false));
};

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Crear Propiedad</h2>
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
          name="priceValue"
          type="number"
          placeholder="Precio numérico (opcional)"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="priceText"
          type="text"
          placeholder="Texto de precio (ej. CONSULTAR)"
          value={priceText}
          onChange={(e) => setPriceText(e.target.value)}
          maxLength={100}
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