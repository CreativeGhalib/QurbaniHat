import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const QurbaniTips = () => {
  return (
    <section className="mt-14 grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
      <div>
        <h2 className="mb-3 font-bold text-2xl text-slate-900">Qurbani Tips & Rules</h2>
        <p className="text-slate-600">
          Follow these practical Islamic and quality checks before booking to ensure valid Qurbani and fair buying.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src="/assets/qurbani-rules.jpg"
            alt="Qurbani rules visual"
            width={1448}
            height={1086}
            className="h-[230px] w-full object-contain object-center"
          />
          <p className="px-3 py-2 text-xs text-slate-600">
            Check age, health condition, and proper sacrifice timing before final booking.
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-3 md:mt-[54px]">
        <li className="flex gap-2 pt-2 first:pt-0 text-slate-700">
          <FaRegCircleCheck className="mt-1 text-emerald-600" />
          Make intention (niyyah) sincerely for Allah and perform Qurbani in the proper Eid-ul-Adha time window.
        </li>
        <li className="flex gap-2 pt-2 first:pt-0 text-slate-700">
          <FaRegCircleCheck className="mt-1 text-emerald-600" />
          Confirm Shari'ah-eligible age: goat/sheep at least 1 year, cow/buffalo at least 2 years.
        </li>
        <li className="flex gap-2 pt-2 first:pt-0 text-slate-700">
          <FaRegCircleCheck className="mt-1 text-emerald-600" />
          Avoid animals with clear defects: blindness, severe lameness, extreme weakness, or missing major teeth/horns.
        </li>
        <li className="flex gap-2 pt-2 first:pt-0 text-slate-700">
          <FaRegCircleCheck className="mt-1 text-emerald-600" />
          Verify teeth, movement, feeding, and vaccination history to ensure healthy livestock.
        </li>
        <li className="flex gap-2 pt-2 first:pt-0 text-slate-700">
          <FaRegCircleCheck className="mt-1 text-emerald-600" />
          Keep hygiene and humane handling, then distribute meat responsibly among family, relatives, and needy people.
        </li>
      </ul>
    </section>
  );
};

export default QurbaniTips;
