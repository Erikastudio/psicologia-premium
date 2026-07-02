export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            ¿Por qué elegir a la Dra. Ana Pérez?
          </h2>

          <p className="text-gray-600 mt-4">
            Un acompañamiento psicológico humano, ético y profesional
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Beneficio 1 */}
          <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Atención personalizada
            </h3>
            <p className="text-gray-600">
              Cada proceso terapéutico es único y adaptado a tus necesidades emocionales.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Confidencialidad total
            </h3>
            <p className="text-gray-600">
              Un espacio seguro donde todo lo que compartes se mantiene privado.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Experiencia profesional
            </h3>
            <p className="text-gray-600">
              Más de 10 años acompañando procesos de ansiedad, depresión y crecimiento personal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}