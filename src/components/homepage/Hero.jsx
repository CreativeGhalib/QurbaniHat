import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="animate__animated animate__fadeIn rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 px-6 py-10 text-white md:px-10 md:py-14">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-100">
        Eid-ul-Adha 2026 Collection
      </p>
      <h1 className="max-w-4xl font-bold text-3xl leading-tight md:text-6xl">
        Trusted Qurbani Animals, Booked Easily From Your Home
      </h1>
      <p className="mt-4 max-w-2xl text-emerald-50">
        Explore healthy cows and goats with full details, compare price, and place your booking in minutes.
      </p>
      <Link href="/animals" className="btn mt-6 border-none bg-white text-emerald-700 hover:bg-emerald-100">
        Browse Animals <FaArrowRightLong />
      </Link>
    </section>
  );
};

export default Hero;
