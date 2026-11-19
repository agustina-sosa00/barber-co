import { Scissors, Sparkles, Layers, Crown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const services = [
  { icon: Scissors, name: "Corte clásico", desc: "Tijera y máquina, terminado con navaja y toalla caliente.", price: "$12.000" },
  { icon: Sparkles, name: "Barba", desc: "Perfilado, recorte y tratamiento con aceites esenciales.", price: "$8.000" },
  { icon: Layers, name: "Degradé", desc: "Fade a medida: bajo, medio o alto, con acabado impecable.", price: "$14.000" },
  { icon: Crown, name: "Combo completo", desc: "Corte + barba + lavado y peinado. La experiencia total.", price: "$19.000" },
];

export default function Services() {
  return (
    <section id="servicios" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Lo que hacemos" title="Nuestros servicios" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{s.desc}</p>
                <p className="mt-5 text-2xl font-semibold text-gold">{s.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
