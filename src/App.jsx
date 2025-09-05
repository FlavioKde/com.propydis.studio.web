import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import PropertyDetail from "./pages/PropertyDetail";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from  "./pages/admin/Dashboard";
import AdminProperty from "./pages/admin/AdminProperty";
import AdminPropertyCreate from "./pages/admin/AdminPropertyCreate";
import AdminPropertyEdit from "./pages/admin/AdminPropertyEdit";
import AdminPropertyDelete from "./pages/admin/AdminPropertyDelete";
import AdminProject from "./pages/admin/AdminProject";  
import AdminProjectCreate from "./pages/admin/AdminProjectCreate";
import AdminProjectEdit from "./pages/admin/AdminProjectEdit";
import AdminProjectDelete from "./pages/admin/AdminProjectDelete.jsx";  
import AdminContact from "./pages/admin/AdminContact";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Públicas */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/property" element={<Layout><Property /></Layout>} />
          <Route path="/property/:id" element={<Layout><PropertyDetail /></Layout>} />
          <Route path="/project" element={<Layout><Project /></Layout>} />
          <Route path="/project/:id" element={<Layout><ProjectDetail /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Layout><Dashboard /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/property"
            element={
              <AdminRoute>
                <Layout><AdminProperty /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/property/create"
            element={
              <AdminRoute>
                <Layout><AdminPropertyCreate /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/property/edit/:id"
            element={
              <AdminRoute>
                <Layout><AdminPropertyEdit /></Layout>
              </AdminRoute>
            } 
          />
          <Route
            path="/admin/property/delete/:id"
            element={
              <AdminRoute>
                <Layout><AdminPropertyDelete /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/project"
            element={
              <AdminRoute>
                <Layout><AdminProject /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/project/create"
            element={
              <AdminRoute>
                <Layout><AdminProjectCreate /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/project/edit/:id"
            element={
              <AdminRoute>
                <Layout><AdminProjectEdit /></Layout>
              </AdminRoute>
            }
          />    
          <Route
            path="/admin/project/delete/:id"
            element={
              <AdminRoute>
                <Layout><AdminProjectDelete /></Layout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <AdminRoute>
                <Layout><AdminContact /></Layout>
              </AdminRoute>
            }
           /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}