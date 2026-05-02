import React from "react";

const DetailsLoading = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      <p className="text-sm text-slate-600">Loading animal details...</p>
    </div>
  );
};

export default DetailsLoading;
