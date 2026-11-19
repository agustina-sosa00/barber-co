import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-gold" />
    </Reveal>
  );
}
