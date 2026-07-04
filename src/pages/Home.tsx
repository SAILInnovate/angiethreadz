import { Link } from 'react-router-dom';
import { Reveal, useParallax } from '../components/Motion';

export default function Home() {
  const parallaxBg = useParallax(0.15);

  return (
    <div className="w-full pb-16 md:pb-0">

      {/* ───────── HERO: Full-bleed bag on black ───────── */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-ink">
        <img
          src="/sellingbag.png"
          alt="Handmade denim crochet bag"
          className="absolute inset-0 w-full h-full object-contain object-center p-8 md:p-24 animate-[breathe_8s_ease-in-out_infinite]"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-ink to-transparent" />

        {/* Content Container (prevents overlap) */}
        <div className="absolute bottom-8 left-5 right-5 md:left-10 md:right-10 z-10 flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end gap-6 md:gap-10 pointer-events-none">
          
          {/* Minimal text — bottom left */}
          <div className="max-w-lg pointer-events-auto">
            <p
              className="font-hand text-worn-gold text-2xl md:text-3xl mb-2 rotate-[-2deg] animate-[fadeSlideUp_1s_0.3s_both]"
            >
              handmade in manchester
            </p>
            <h1
              className="font-heading text-ecru text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight animate-[fadeSlideUp_0.8s_0.1s_both]"
            >
              DENIM<br />CROCHET<br />BAG
            </h1>
            <p className="text-ecru/50 text-sm tracking-widest uppercase mt-4 animate-[fadeSlideUp_1s_0.6s_both]">
              Reclaimed denim · 14 hrs per piece · 1 of 1
            </p>
          </div>

          {/* Price — bottom right */}
          <div className="text-left md:text-right pointer-events-auto animate-[fadeSlideUp_1s_0.5s_both]">
            <p className="font-heading text-worn-gold text-5xl md:text-6xl">£200</p>
            <Link
              to="/product/1"
              className="inline-block mt-1 md:mt-3 text-ecru/60 text-xs tracking-[0.2em] uppercase border-b border-ecru/20 pb-1 hover:text-ecru hover:border-ecru/60 transition-all duration-300"
            >
              View piece →
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── THE PROCESS ───────── */}
      <section className="relative grain py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">

          {/* Left: Image with stitch border */}
          <Reveal direction="left">
            <div className="relative">
              <div className="stitch-border p-3 rotate-[-1deg] overflow-hidden group">
                <img
                  src="/_MG_4308_Original.jpeg"
                  alt="Bag texture detail"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="font-hand text-chalk/60 text-xl mt-4 ml-2 rotate-[-3deg]">
                ↑ every shade is different because every pair of jeans was different
              </p>
            </div>
          </Reveal>

          {/* Right: Story */}
          <div className="md:pt-16">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-ecru text-5xl md:text-6xl tracking-tight mb-8 leading-[0.95]">
                HOW IT'S MADE
              </h2>
            </Reveal>
            <div className="space-y-5 text-ecru/70 text-base md:text-lg leading-relaxed font-body">
              <Reveal delay={0.15}>
                <p>
                  I buy old jeans from charity shops around Manchester. Levis, Wranglers, whatever has the best wear on it. Then I cut them into strips and pull them apart until I have yarn.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  It takes me about <span className="text-worn-gold font-bold">14 hours</span> to crochet one bag. The colour changes happen naturally — darker strips from the waistband, lighter ones from the thigh. I don't plan it. The denim decides.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-ecru/40 text-sm tracking-wider uppercase border-t border-ecru/10 pt-5 mt-8">
                  Every bag uses approximately 3–4 pairs of jeans. When one sells, that specific combination of fabric is gone forever.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>



      {/* ───────── LOOKBOOK CTA ───────── */}
      <section className="relative h-[50vh] overflow-hidden">
        <div ref={parallaxBg} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <img
            src="/IMG_3638_Original.jpeg"
            alt="Manchester street"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-10 max-w-xl">
          <Reveal>
            <h2 className="font-heading text-ecru text-5xl md:text-7xl leading-[0.9] mb-4">
              LOOKBOOK
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ecru/50 text-sm mb-6">The visual diary. Street style, texture studies, and the city that made this brand.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/lookbook"
              className="inline-block w-fit text-xs tracking-[0.2em] uppercase text-ecru border border-ecru/30 px-6 py-3 hover:bg-ecru hover:text-ink transition-all duration-300"
            >
              Open →
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
