import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";

function Dashboard() {
  return <h1 className="text-3xl p-4">Bienvenido al Dashboard 🚀</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
        ) : (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
