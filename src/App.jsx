import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      {/* Header */}
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl font-bold">Mi Proyecto</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/properties">Propiedades</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 text-center">
        © 2025 Mi Proyecto
      </footer>
    </Router>
  );
}

export default App;
