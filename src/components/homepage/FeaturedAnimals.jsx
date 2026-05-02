import AnimalCard from "@/components/animals/AnimalCard";
import React from "react";

const FeaturedAnimals = ({ animals }) => {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="font-bold text-2xl text-slate-900 md:text-3xl">Featured Animals</h2>
        <p className="text-sm text-slate-500">Top picks for this season</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAnimals;
