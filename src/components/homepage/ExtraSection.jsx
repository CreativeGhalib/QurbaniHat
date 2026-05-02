import React from "react";
import { FaShieldHeart } from "react-icons/fa6";

const ExtraSection = () => {
  return (
    <section className="mt-14 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 md:p-8">
      <div className="mb-3 flex items-center gap-2 text-emerald-700">
        <FaShieldHeart />
        <h2 className="font-semibold text-lg">Buyer Safety Checklist</h2>
      </div>
      <p className="text-slate-700">
        Always verify identity of the seller, cross-check contact details, and review animal images before booking.
        QurbaniHat encourages in-person final inspection before delivery confirmation.
      </p>
    </section>
  );
};

export default ExtraSection;
