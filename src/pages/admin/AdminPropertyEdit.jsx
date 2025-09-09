import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { getPropertyById, updatePropertyForm } from "../../services/adminService";
import { safeApiCall } from "../../utils/safeApiCall";
import { toast } from "react-toastify";


export default function AdminPropertyEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [priceText, setPriceText] = useState("");
  const [existingPhotos, setExistingPhotos] = useState([]);
  const [photosToDelete, setPhotosToDelete] = useState([]);
  const [newPhotos, setNewPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
  safeApiCall(() => getPropertyById(id), navigate)
    .then((property) => {
      setName(property.name);
      setDescription(property.description);
      setPriceValue(property.priceValue || "");
      setPriceText(property.priceText || "");
      setExistingPhotos(property.photos || []);
    })
    .finally(() => setLoading(false)); 
}, [id, navigate]);




  const handleDeleteToggle = (photoId) => {
    setPhotosToDelete((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]
    );
  };

  const handleNewPhotosChange = (e) => {
    setNewPhotos([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (!priceText && !priceValue) {
    alert("Debes ingresar al menos un tipo de precio.");
    return;
  }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("priceValue", priceValue);
    formData.append("priceText", priceText);
    photosToDelete.forEach((id) => formData.append("deletePhotoIds", id));
    newPhotos.forEach((file) => formData.append("photos", file));



  safeApiCall(() => updatePropertyForm(id, formData), navigate)
    .then(() => {
      toast.success("Propiedad actualizada correctamente");
      setTimeout(() => navigate("/admin/property"), 100);
    })
    .finally(() => setLoading(false));
  

  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Editar Propiedad</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
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

        <div>
          <label className="block font-medium mb-2">Fotos actuales</label>
          <div className="grid grid-cols-2 gap-4">
            {existingPhotos.map((photo) => (
              <div key={photo.id} className="relative">
                <img src={photo.url} alt={photo.altText} className="w-full h-auto rounded" />
                <label className="absolute top-2 right-2 bg-white p-1 rounded shadow">
                  <input
                    type="checkbox"
                    checked={photosToDelete.includes(photo.id)}
                    onChange={() => handleDeleteToggle(photo.id)}
                  />
                  Eliminar
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Agregar nuevas fotos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleNewPhotosChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Guardar cambios
        </button>
      </form>
    </div>
  );

}