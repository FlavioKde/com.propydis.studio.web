import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeaderHome from "./HeaderHome";
import HeaderWeb from "./HeaderWeb";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  // 🔹 Scroll al inicio en cada cambio de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 🔹 Mostrar HeaderHome solo en la Home
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <HeaderHome /> : <HeaderWeb />}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}