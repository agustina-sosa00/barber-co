import { useState } from "react";
import { MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const input =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Contacto" title="Contactanos" />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm">
                <CheckCircle2 size={56} className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl font-bold">¡Gracias por tu mensaje!</h3>
                <p className="mt-2 text-black/60">Te vamos a responder a la brevedad.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-gold underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4 rounded-2xl bg-white p-7 shadow-sm"
              >
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                  <input id="email" type="email" required className={input} placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">Mensaje</label>
                  <textarea id="mensaje" rows={5} required className={input} placeholder="Escribinos tu consulta..." />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink py-4 font-semibold text-white transition hover:bg-gold hover:text-ink"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            <a
              href="https://wa.me/5491112345678?text=Hola!%20Quiero%20reservar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle className="shrink-0" /> WhatsApp · +54 9 11 1234-5678
            </a>
            <div className="rounded-2xl bg-ink p-7 text-white">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" />
                <div>
                  <h3 className="font-serif text-lg font-bold">Dónde estamos</h3>
                  <p className="text-white/70">Thames 1850, Palermo<br />Ciudad Autónoma de Buenos Aires</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <Clock className="mt-1 shrink-0 text-gold" />
                <div>
                  <h3 className="font-serif text-lg font-bold">Horarios</h3>
                  <ul className="text-white/70">
                    <li>Lunes a viernes: 10:00 – 20:30</li>
                    <li>Sábados: 10:00 – 19:00</li>
                    <li>Domingos: cerrado</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
