import { Link } from "react-router-dom";


export default function Contact() {
  return ( 
    <>
     

      {/* Hero Section */}
    <main className="min-h-screen">

  <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Contacto
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Contacto
          </p>
          <Link
            to="/properties"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Contacto
          </Link>
        </div>
      </section>
  </main>
      
    </>
  );
}