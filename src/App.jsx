import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";


import Footer from "./components/Footer";

import Home from "./pages/Home";
import Property from "./pages/Property";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import AdminProperty from "./pages/AdminProperty";
import AdminProject from "./pages/AdminProject";
import AdminContact from "./pages/AdminContact";

import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";



function App() {
  return (
    <AuthProvider>
      <Router>
        

        <Routes>
          {/* Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/property"
            element={
              <AdminRoute>
                <AdminProperty />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/project"
            element={
              <AdminRoute>
                <AdminProject />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <AdminRoute>
                <AdminContact />
              </AdminRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;