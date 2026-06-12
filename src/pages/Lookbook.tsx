

export default function Lookbook() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">

      {/* Cover */}
      <section className="h-[100dvh] relative overflow-hidden flex items-end">
        <img
          src="/_MG_4569_Original.jpeg"
          alt="Manchester Northern Quarter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative z-10 p-5 md:p-10 pb-12 md:pb-16 max-w-2xl">
          <p className="font-hand text-worn-gold text-2xl md:text-3xl rotate-[-2deg] mb-2">
            visual diary — vol. 01
          </p>
          <h1 className="font-heading text-ecru text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight">
            TRACING<br />THE CITY
          </h1>
          <p className="text-ecru/40 text-sm tracking-widest uppercase mt-4 max-w-sm">
            Fashion as a result of spatial behaviour. Manchester's Northern Quarter, documented.
          </p>
        </div>
      </section>

      {/* Image grid — raw, uneven, editorial */}
      <section className="relative grain px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1 mb-1">
            <div className="aspect-[16/10] bg-ink overflow-hidden relative">
              <img
                src="/_MG_4575_Original.jpeg"
                alt="Street scene"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="absolute bottom-4 left-4 font-hand text-ecru/60 text-xl rotate-[-3deg]">
                stevenson square, 2pm
              </p>
            </div>
            <div className="aspect-[16/10] md:aspect-auto bg-ink overflow-hidden relative">
              <img
                src="/_MG_4645_Original.jpeg"
                alt="Bag in context"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text break */}
          <div className="py-12 md:py-20 max-w-xl">
            <p className="font-editorial text-ecru/70 text-2xl md:text-3xl leading-relaxed italic">
              "The Northern Quarter is not a fixed object to be viewed, but rather a space created through movement."
            </p>
            <p className="font-hand text-worn-gold text-xl mt-4 rotate-[-1deg]">— from my research journal</p>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mb-1">
            <div className="aspect-square bg-ink overflow-hidden">
              <img
                src="/_MG_4308_Original.jpeg"
                alt="Product detail"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="aspect-square bg-ink overflow-hidden col-span-1 md:col-span-2">
              <img
                src="/IMG_3638_Original.jpeg"
                alt="Urban texture"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-1">
            <div className="bg-denim p-8 md:p-12 flex flex-col justify-center stitch-border">
              <h2 className="font-heading text-ecru text-4xl md:text-5xl leading-[0.9] mb-4">
                PEOPLE +<br/>STREET STYLE
              </h2>
              <p className="text-ecru/50 text-sm leading-relaxed">
                Fashion is visible through patterns of movement, pause and social occupation within public spaces. This mapping views fashion as the result of spatial behaviour and infrastructure.
              </p>
            </div>
            <div className="aspect-[16/10] bg-ink overflow-hidden relative">
              <img
                src="/IMG_3601_Original.jpeg"
                alt="Urban texture"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute bottom-4 right-4 font-hand text-worn-gold text-2xl rotate-[2deg]">
                street style observation
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
