import { Link } from "react-router-dom";
import HeaderWeb from "../components/HeaderWeb";


export default function Project() {
  return( 
  <>
  <HeaderWeb/>
    {/* Hero Section */}
    <main className="min-h-screen">

  <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Listado de proyectos
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Nuestras proyectos más destacadas.
          </p>
          <Link
            to="/properties"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Ver Proyectos
          </Link>
        </div>
      </section>
  </main>
  </>
  );
}
