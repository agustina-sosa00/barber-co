import { Instagram, Facebook, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-center text-white">
      <p className="font-serif text-2xl font-bold">
        Barber <span className="text-gold">&amp;</span> Co.
      </p>
      <div className="mt-5 flex justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href="#"
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/50">© {new Date().getFullYear()} Barber &amp; Co. Todos los derechos reservados.</p>
      <p className="mt-2 text-xs text-white/35">Sitio desarrollado por Marea Digital</p>
    </footer>
  );
}
