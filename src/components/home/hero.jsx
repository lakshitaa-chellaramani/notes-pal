"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-between w-full h-screen min-h-[80vh] px-8 md:px-16 lg:px-24 bg-gradient-to-t from-primary/60 to-bg-light/30 mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
" >
      {/* Left Text Section */}
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-foreground leading-tight">
          Share & Discover Notes <br />
          <span className="text-secondary">The Smart Way!</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A seamless way to share, discover, and collaborate on notes.
        </p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-primary transition-all">
          Get Started
        </button>
      </div>

      {/* Right SVG Illustration */}
      <div className="hidden md:block w-1/2 relative animate-float">
        <Image
          src="/Taking notes-amico.svg"
          alt="Illustration of a boy taking notes"
          width={500}
          height={500}
        />
      </div>

      {/* Floating Animation */}
      {/* <style jsx>{`
  .tilt-animation {
    animation: tilt 5s ease-in-out infinite;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`}</style> */}

    </section>
  );
}
