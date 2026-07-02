import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-emerald-700">
          Dra. Ana Pérez
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-emerald-700">Inicio</a>
          <a href="#nosotros" className="hover:text-emerald-700">Sobre mí</a>
          <a href="#servicios" className="hover:text-emerald-700">Servicios</a>
          <a href="#testimonios" className="hover:text-emerald-700">Testimonios</a>
          <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
        </nav>

        <a
          href="#contacto"
          className="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition"
        >
          Agendar cita
        </a>

      </div>
    </header>
  );
}