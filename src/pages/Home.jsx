import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Bienvenido a PropyDis Studio
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tu socio en proyectos inmobiliarios, desde la idea hasta la entrega.
          </p>
          <Link
            to="/properties"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Ver Propiedades
          </Link>
        </div>
      </section>

      {/* Sección de destacados */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Propiedades</h3>
          <p className="text-gray-600 mb-4">
            Explora nuestra selección de propiedades exclusivas.
          </p>
          <Link to="/properties" className="text-blue-700 hover:underline">
            Ver más →
          </Link>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Proyectos</h3>
          <p className="text-gray-600 mb-4">
            Descubre nuestros proyectos en desarrollo.
          </p>
          <Link to="/projects" className="text-blue-700 hover:underline">
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
      </section>
    </>
  );
}