import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaWeightScale } from "react-icons/fa6";
import { GiCow, GiGoat } from "react-icons/gi";

const AnimalCard = ({ animal }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <figure className="m-0 h-[240px] w-full overflow-hidden bg-slate-50 pt-[5px]">
        <Image
          src={animal.image}
          alt={animal.name}
          width={1536}
          height={1024}
          className="mx-auto block h-[235px] w-full object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </figure>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold leading-tight text-slate-900">{animal.name}</h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{animal.type}</span>
        </div>

        <div className="mt-3 space-y-1.5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            {animal.type === "Cow" ? <GiCow /> : <GiGoat />} Breed: {animal.breed}
          </p>
          <p className="flex items-center gap-2">
            <FaWeightScale /> Weight: {animal.weight} kg
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot /> Location: {animal.location}
          </p>
        </div>

        <p className="mt-3 font-semibold text-emerald-700">BDT {animal.price.toLocaleString()}</p>

        <Link
          href={`/details-page/${animal.id}`}
          className="btn mt-2 h-11 min-h-0 w-full border-none bg-emerald-600 text-white hover:bg-emerald-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
