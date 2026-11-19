import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=800&q=75`;

const images = [
  { id: "1599351431202-1e0f0137899a", alt: "Detalle de un perfilado con navaja" },
  { id: "1622286342621-4bd786c2447c", alt: "Corte con textura en la parte superior" },
  { id: "1605497788044-5a32c7078486", alt: "Secado y peinado final" },
  { id: "1517832606299-7ae9b720a186", alt: "Arreglo de barba con tijera" },
  { id: "1493256338651-d82f7acb2b38", alt: "Máquina de corte en acción" },
  { id: "1532710093739-9470acff878f", alt: "Afeitado de barba con espuma" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Nuestro trabajo" title="Galería" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {images.map((img, i) => (
            <Reveal key={img.id} delay={(i % 3) * 0.1}>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={photo(img.id)}
                  alt={img.alt}
                  loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
