import React from "react";

const AnimalsLoading = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <span className="loading loading-dots loading-lg text-emerald-600"></span>
      <p className="text-sm text-slate-600">Loading animals...</p>
    </div>
  );
};

export default AnimalsLoading;
