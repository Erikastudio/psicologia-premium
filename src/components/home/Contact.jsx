export default function Contact() {
  const phone = "3134623765";

  const whatsappMessage =
    "Hola Dra. Ana Pérez, quiero agendar una cita psicológica.";

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-800">
          Agenda tu cita
        </h2>

        <p className="text-gray-600 mt-4">
          Contáctanos directamente por WhatsApp para recibir atención personalizada
        </p>

        {/* Botón WhatsApp */}
        <div className="mt-10">
          <a
            href={`https://wa.me/57${phone}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg shadow-md transition"
          >
            Escribir por WhatsApp
          </a>
        </div>

        {/* Info extra */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Atención personalizada</p>
          <p>Respuesta rápida</p>
          <p>Consulta confidencial</p>
        </div>

      </div>
    </section>
  );
}