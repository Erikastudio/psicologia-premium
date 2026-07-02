export default function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold text-gray-800">
          Dra. Ana Pérez
        </h3>

        <p className="text-gray-600 mt-2">
          Psicóloga Clínica
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>

        <p className="text-gray-400 text-xs mt-2">
          Atención psicológica profesional con enfoque humano y ético.
        </p>

      </div>
    </footer>
  );
}