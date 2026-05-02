import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-3">
      <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      <p className="text-sm text-slate-600">Loading livestock data...</p>
    </div>
  );
};

export default LoadingPage;
