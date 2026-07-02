import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium mb-6">
            Atención psicológica profesional
          </span>

          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
            Tu bienestar emocional merece ser una prioridad.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Acompañamiento psicológico personalizado para ayudarte a superar
            la ansiedad, fortalecer tu autoestima y construir una vida con
            mayor tranquilidad y equilibrio.
          </p>

          <div className="flex gap-4 mt-10">
            <a
  href="#contacto"
  className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition shadow-md"
>
  Agenda tu cita
</a>

            <a
  href="#nosotros"
  className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-3 md:px-8 md:py-4 rounded-full transition"
>
  Conoce más
</a>
          </div>

          <div className="flex flex-wrap gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-emerald-700">+10</h3>
              <p className="text-gray-500">Años de experiencia</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-700">+500</h3>
              <p className="text-gray-500">Pacientes atendidos</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-700">100%</h3>
              <p className="text-gray-500">Atención personalizada</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* fondos suaves */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>

            {/* imagen */}
            <div className="relative w-[300px] md:w-[420px] h-[380px] md:h-[520px] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                alt="Psicóloga"
                className="w-full h-full object-cover"
              />
            </div>

            {/* tarjeta flotante */}
            <div className="absolute bottom-8 -left-10 bg-white rounded-2xl shadow-xl p-5 w-64 border border-gray-100">

              <div className="flex items-center gap-2 mb-2 text-emerald-600 font-semibold">
                ⭐ Alta satisfacción
              </div>

              <h3 className="font-bold text-gray-800 text-lg">
                4.9 / 5
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Más de 500 personas han recibido acompañamiento emocional profesional.
              </p>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}