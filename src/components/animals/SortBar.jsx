import Link from "next/link";
import React from "react";

const SortBar = ({ sort }) => {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mr-1 font-semibold text-slate-800">Sort by Price:</h2>
      <Link
        href="/animals?sort=low-to-high"
        className={`btn btn-sm ${
          sort === "low-to-high"
            ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
            : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
        }`}
      >
        Low to High
      </Link>
      <Link
        href="/animals?sort=high-to-low"
        className={`btn btn-sm ${
          sort === "high-to-low"
            ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
            : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
        }`}
      >
        High to Low
      </Link>
      <Link href="/animals" className="btn btn-sm border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50">
        Clear
      </Link>
    </div>
  );
};

export default SortBar;
