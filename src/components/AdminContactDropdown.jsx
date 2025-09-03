import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminContactDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Admin Contacto
      </button>

      {open && (
        <div className="absolute bg-white shadow rounded mt-2 z-50">
        <NavLink to="/admin/contact" className="block px-4 py-2 hover:bg-gray-100">Mensajes</NavLink>
        <NavLink to="/admin/contact/reply/´{id}" className="block px-4 py-2 hover:bg-gray-100">Responder</NavLink>
        </div>
      )}
    </div>
  );
}