import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <img
  src="/logo_sin_fondo.png"
  alt="Logo de la empresa"
  className="fixed top-6 right-6 w-24 h-auto z-50 animate-[fadeScale_0.8s_ease-out]"
/>

      <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/boceto_portada.jpg')" }}
    >
      <nav className="fixed left-0 top-0 h-full flex flex-col justify-center px-8 space-y-6 text-black text-lg font-medium z-50">
        <a
          href="/property"
          className="hover:underline hover:tracking-wide hover:scale-105 transition duration-300 text-black"
    >
      Propiedades
      </a>
      <a
          href="/project"
          className="hover:underline hover:tracking-wide hover:scale-105 transition duration-300 text-black"
    >
      Proyectos
      </a>
      <a
          href="/service"
          className="hover:underline hover:tracking-wide hover:scale-105 transition duration-300 text-black"
    >
      Servicios
      </a>
    <a
          href="/contact"
          className="hover:underline hover:tracking-wide hover:scale-105 transition duration-300 text-black"
    >
      Contacto
      </a>
  
     </nav>
      </div>  
      
    </>
  );
}