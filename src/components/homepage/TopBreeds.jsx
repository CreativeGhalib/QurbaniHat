import React from "react";

const TopBreeds = () => {
  const breeds = [
    { name: "Local Deshi", useFor: "Budget-friendly choice with familiar local adaptation." },
    { name: "Shahiwal Cross", useFor: "Strong frame and balanced meat yield for medium/large families." },
    { name: "Black Bengal", useFor: "Popular goat breed for quality meat and manageable size." },
    { name: "Jamunapari", useFor: "Tall, healthy goat option for buyers wanting heavier weight." },
  ];

  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2 className="font-bold text-2xl text-slate-900 md:text-3xl">Top Breeds</h2>
        <p className="mt-1 text-sm text-slate-600">
          Pick breed by age, health, and suitability for your family size instead of only price.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {breeds.map((breed) => (
          <div key={breed.name} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-lg text-slate-900">{breed.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{breed.useFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBreeds;
