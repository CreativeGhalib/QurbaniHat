import BookingForm from "@/components/animals/BookingForm";
import { getAnimalById } from "@/lib/data";
import { getServerSession } from "@/lib/session";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";
import { FaLocationDot, FaWeightScale } from "react-icons/fa6";
import { GiCow, GiGoat } from "react-icons/gi";

const AnimalDetailsPage = async ({ params }) => {
  const session = await getServerSession();
  const { id } = await params;

  if (!session?.user) {
    redirect(`/login?redirect=/details-page/${id}`);
  }

  const animal = await getAnimalById(id);

  if (!animal) {
    notFound();
  }

  return (
    <div className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Image
            src={animal.image}
            alt={animal.name}
            width={900}
            height={500}
            className="h-80 w-full rounded-2xl bg-slate-50 object-contain object-center p-2"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />

          <div className="mt-5">
            <h1 className="font-bold text-3xl text-slate-900">{animal.name}</h1>
            <p className="mt-2 text-slate-600">{animal.description}</p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <p className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-700">
                {animal.type === "Cow" ? <GiCow /> : <GiGoat />} Type: {animal.type}
              </p>
              <p className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700">Breed: {animal.breed}</p>
              <p className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-700">
                <FaWeightScale /> Weight: {animal.weight} kg
              </p>
              <p className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700">Age: {animal.age} years</p>
              <p className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-700">
                <FaLocationDot /> {animal.location}
              </p>
              <p className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700">Category: {animal.category}</p>
            </div>

            <h2 className="mt-5 font-semibold text-2xl text-emerald-700">BDT {animal.price.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      <div>
        <BookingForm
          defaultName={session?.user?.name}
          defaultEmail={session?.user?.email}
          animalName={animal.name}
        />
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
