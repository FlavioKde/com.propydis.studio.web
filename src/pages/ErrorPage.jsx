// src/pages/ErrorPage.jsx
import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const { state } = useLocation();

  const status = state?.status || "Error";
  const error = state?.error || "Algo salió mal";
  const message = state?.message || "No se pudo completar la operación.";
  const path = state?.path || "Ruta desconocida";
  const timestamp = state?.timestamp || "Sin fecha";

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-red-700 mb-4">{status}</h1>
      <h2 className="text-xl font-semibold mb-2">{error}</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      <p className="text-sm text-gray-400">Ruta: {path}</p>
      <p className="text-sm text-gray-400">Hora: {timestamp}</p>

      <div className="mt-6 space-x-4">
        <button onClick={() => window.location.reload()} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          🔄 Recargar
        </button>
        <a href="/" className="text-blue-600 hover:underline">🏠 Volver al inicio</a>
      </div>
    </div>
  );
}