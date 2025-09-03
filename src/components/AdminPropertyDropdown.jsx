import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminPropertyDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Admin Propiedad
      </button>

      {open && (
        <div className="absolute bg-white shadow rounded mt-2 z-50">
          <NavLink to="/admin/property" className="block px-4 py-2 hover:bg-gray-100">Listado</NavLink>
          <NavLink to="/admin/property/create" className="block px-4 py-2 hover:bg-gray-100">Crear</NavLink>
          <NavLink to="/admin/property/edit" className="block px-4 py-2 hover:bg-gray-100">Editar</NavLink>
          <NavLink to="/admin/property/delete" className="block px-4 py-2 hover:bg-gray-100">Eliminar</NavLink>
        </div>
      )}
    </div>
  );
}