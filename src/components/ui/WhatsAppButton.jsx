export default function WhatsAppButton() {
  const phone = "3134623765";

  const message =
    "Hola Dra. Ana Pérez, quiero más información para agendar una cita.";

  return (
    <a
      href={`https://wa.me/57${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition flex items-center gap-2"
    >
      💬
      <span className="hidden md:block font-medium">
        WhatsApp
      </span>
    </a>
  );
}