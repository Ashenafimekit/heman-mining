import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/hero.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-4">
          Unearthing Resources, Delivering Value – Responsibly & Efficiently
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-6">
          Providing high-quality minerals for industries worldwide using
          cutting-edge technology.
        </p>

        <button className="bg-black hover:bg-[#1a1a1a] text-white font-medium py-2.5 px-6 rounded transition duration-300">
          Contact
        </button>

        <p className="mt-6 text-sm sm:text-base bg-white/10 px-4 py-2 rounded backdrop-blur-sm">
          <strong className="text-yellow-300">Now Available:</strong> 30% equity
          for sale.
        </p>
      </div>
    </div>
  );
};

export default Hero;
