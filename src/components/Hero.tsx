import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=75"
        alt="Interior de la barbería Barber & Co."
        className="absolute inset-0 h-full w-full object-cover" fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-serif text-2xl tracking-wide text-gold sm:text-3xl">
          Barber <span className="italic">&amp;</span> Co.
        </p>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          El corte que estabas buscando
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg">
          Barbería de autor en el corazón de Palermo. Tradición, precisión y buena onda en cada visita.
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-ink shadow-lg transition hover:scale-105 hover:bg-white"
        >
          Reservar turno
        </a>
      </motion.div>
    </section>
  );
}
