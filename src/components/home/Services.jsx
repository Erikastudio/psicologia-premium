export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Servicios terapéuticos
          </h2>

          <p className="text-gray-600 mt-4">
            Atención profesional adaptada a tus necesidades emocionales
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Servicio 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Terapia individual
            </h3>
            <p className="text-gray-600">
              Espacio seguro para trabajar ansiedad, depresión, estrés y crecimiento personal.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Terapia de pareja
            </h3>
            <p className="text-gray-600">
              Mejora la comunicación, confianza y resolución de conflictos en la relación.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Manejo emocional
            </h3>
            <p className="text-gray-600">
              Aprende herramientas para gestionar emociones y mejorar tu bienestar diario.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}