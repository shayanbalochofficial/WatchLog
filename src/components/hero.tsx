import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/bg-hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#aa9681] leading-snug">
          Timeless
          <br className="hidden lg:inline-block" />
          <span className="text-white">Elegance Redefined</span>
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-xl">
          Experience the pinnacle of craftsmanship and luxury. Discover the
          artistry behind the world&apos;s finest timepieces, crafted to
          perfection.
        </p>
        <Link
          href="/blogs"
          className="mt-6 px-6 py-3 bg-transparent border border-[#8a7968] text-[#8a7968] rounded-full hover:bg-[#8a7968] hover:text-black transition-all duration-200"
        >
          Read Now!
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
