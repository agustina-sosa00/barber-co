import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const items = [
  { name: "Matías Fernández", initials: "MF", text: "El mejor degradé que me hicieron en años. Puntuales, prolijos y el ambiente es una masa." },
  { name: "Lucas Ortega", initials: "LO", text: "Voy hace tres años y nunca me fallaron. La toalla caliente con el arreglo de barba es otro nivel." },
  { name: "Santiago Romero", initials: "SR", text: "Reservé por WhatsApp en un minuto y me atendieron a horario. Recomendadísimo para ir con amigos." },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Opiniones" title="Lo que dicen nuestros clientes" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="h-full rounded-2xl bg-cream p-7">
                <div className="flex gap-1 text-gold" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-black/70">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-gold">
                    {t.initials}
                  </span>
                  <span className="font-semibold">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
