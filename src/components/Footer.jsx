import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer className="py-16 px-4 max-w-6xl mx-auto">
        {/* Grid de secciones */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Propiedades</h3>
            <p className="text-gray-600 mb-4">
              Explora nuestra selección de propiedades exclusivas.
            </p>
            <Link to="/property" className="text-blue-700 hover:underline">
              Ver más →
            </Link>
          </div>

          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Proyectos</h3>
            <p className="text-gray-600 mb-4">
              Descubre nuestros proyectos en desarrollo.
            </p>
            <Link to="/project" className="text-blue-700 hover:underline">
              Ver más →
            </Link>
          </div>

          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Contacto</h3>
            <p className="text-gray-600 mb-4">
              Hablemos sobre tu próximo proyecto.
            </p>
            <Link to="/contact" className="text-blue-700 hover:underline">
              Ir a contacto →
            </Link>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Info de contacto */}
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} PropyDis Studio</p>
              <p>Email: infopropydis@gmail.com</p>
            </div>

            {/* Redes sociales y desarrollador */}
            <div className="flex items-center space-x-6">
              {/* Iconos de redes sociales (opcional) */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <span className="sr-only">Facebook</span>
                  {/* Icono de Facebook */}
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  {/* Icono de Twitter */}
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-600">
                  <span className="sr-only">Instagram</span>
                  {/* Icono de Instagram */}
                </a>
              </div>
              
              {/* Créditos del desarrollador */}
              <div className="text-xs text-gray-500">
                Desarrollado por <a href="https://github.com/FlavioKde" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FlavioKde</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}