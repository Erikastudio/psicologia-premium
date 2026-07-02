export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Testimonios
          </h2>

          <p className="text-gray-600 mt-4">
            Experiencias de pacientes que han transformado su bienestar emocional
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Testimonio 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-gray-600 italic">
              "La terapia con la Dra. Ana me ayudó a manejar mi ansiedad y recuperar la calma en mi vida diaria."
            </p>

            <h4 className="mt-6 font-bold text-emerald-700">
              Laura M.
            </h4>

            <p className="text-gray-400 text-sm">
              Paciente
            </p>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-gray-600 italic">
              "Me sentí escuchado desde la primera sesión. Es una profesional muy humana y empática."
            </p>

            <h4 className="mt-6 font-bold text-emerald-700">
              Carlos R.
            </h4>

            <p className="text-gray-400 text-sm">
              Paciente
            </p>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-gray-600 italic">
              "Gracias a su acompañamiento pude mejorar mi autoestima y mi relación conmigo misma."
            </p>

            <h4 className="mt-6 font-bold text-emerald-700">
              Andrea P.
            </h4>

            <p className="text-gray-400 text-sm">
              Paciente
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}