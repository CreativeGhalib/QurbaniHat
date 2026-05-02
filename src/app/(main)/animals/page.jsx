import AnimalCard from "@/components/animals/AnimalCard";
import SortBar from "@/components/animals/SortBar";
import { getAllAnimals } from "@/lib/data";
import React from "react";

const AnimalsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const sort = query?.sort;
  const animals = await getAllAnimals();

  if (sort === "low-to-high") {
    animals.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-to-low") {
    animals.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <h1 className="mb-2 font-bold text-3xl text-slate-900 md:text-4xl">All Animals</h1>
      <p className="mb-5 text-slate-600 md:text-lg">Find your preferred Qurbani animal and compare prices quickly.</p>

      <SortBar sort={sort} />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
