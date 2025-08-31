import { useLocation } from "react-router-dom";
import HeaderHome from "./HeaderHome";
import HeaderWeb from "./HeaderWeb";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  // Rutas donde quieres usar el HeaderHome
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <HeaderHome /> : <HeaderWeb />}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}