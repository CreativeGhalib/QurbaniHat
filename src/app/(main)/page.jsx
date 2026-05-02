import ExtraSection from "@/components/homepage/ExtraSection";
import FeaturedAnimals from "@/components/homepage/FeaturedAnimals";
import Hero from "@/components/homepage/Hero";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import TopBreeds from "@/components/homepage/TopBreeds";
import { getFeaturedAnimals } from "@/lib/data";
import React from "react";

const HomePage = async () => {
  const featuredAnimals = await getFeaturedAnimals();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
      <Hero />
      <FeaturedAnimals animals={featuredAnimals} />
      <QurbaniTips />
      <TopBreeds />
      <ExtraSection />
    </div>
  );
};

export default HomePage;
