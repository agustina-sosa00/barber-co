import Reveal from "./Reveal";

const stats = [
  { value: "12+", label: "Años de experiencia" },
  { value: "8.500+", label: "Clientes atendidos" },
  { value: "4.9", label: "Valoración promedio" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-ink px-5 py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Sobre nosotros</p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Una barbería con historia de barrio
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mt-8 text-lg leading-relaxed text-white/75">
            Barber &amp; Co. nació en 2012 en Palermo con una idea simple: que cada cliente se vaya
            sintiéndose mejor de lo que llegó. Combinamos las técnicas tradicionales de la barbería
            clásica con las tendencias actuales, en un espacio donde se toma un buen café, se charla
            de fútbol y nadie tiene apuro.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <p className="font-serif text-5xl font-bold text-gold">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
