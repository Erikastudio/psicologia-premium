export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>

          <h2 className="text-4xl font-bold text-gray-800">
            Sobre la Dra. Ana Pérez
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            La Dra. Ana Pérez es psicóloga clínica con más de 10 años de experiencia
            acompañando a personas en procesos de ansiedad, depresión, estrés y
            crecimiento personal.
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            Su enfoque se basa en la escucha activa, el respeto y la creación de un
            espacio seguro donde cada paciente pueda expresarse sin juicio.
          </p>

          <div className="mt-8 space-y-2 text-gray-700">

            <p>✔ Terapia individual</p>
            <p>✔ Terapia de pareja</p>
            <p>✔ Manejo de ansiedad y estrés</p>
            <p>✔ Autoestima y crecimiento personal</p>

          </div>

        </div>

        {/* Imagen */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>

            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Dra Ana Pérez"
              className="w-[420px] h-[520px] object-cover rounded-[40px] shadow-2xl relative"
            />

          </div>

        </div>

      </div>
    </section>
  );
}