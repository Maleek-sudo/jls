import logo from "../logo.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[480px] overflow-hidden bg-[#111111]">



      {/* Placeholder background */}
      <div className="absolute inset-0">
        {/* Dark layer */}
        <div className="absolute inset-0 bg-[#0d1b2a]" />

        {/* Stripes */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #c9a84c 0px,
              #c9a84c 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />

        {/* Glowing */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Dark 0verlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Logo */}
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="w-14 h-14 object-contain mb-5 opacity-90"
        />

        {/* Headline */}
        <h1
          className="text-white font-black uppercase tracking-[0.15em] leading-none"
          style={{
            fontSize: "clamp(40px, 10vw, 96px)",
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
          }}
        >
          JUST A LIFESTYLE
        </h1>

        {/* Gold */}
        <div className="w-16 h-[2px] bg-[#c9a84c] my-4 rounded-full" />

        {/* Tagline */}
        <p className="text-white/70 text-sm md:text-base tracking-[0.25em] uppercase">
          Est. 2024 &nbsp;·&nbsp; Lagos, Nigeria
        </p>

        <a
          href="#products"
          className="mt-7 inline-block bg-[#c9a84c] hover:bg-[#b8963e] text-[#0d1b2a] text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-colors duration-200"
        >
          Shop Now
        </a>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #f5f5f3)",
        }}
      />
    </section>
  );
}