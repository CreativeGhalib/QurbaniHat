import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="font-bold text-4xl text-slate-900 md:text-5xl">404 - Page Not Found</h2>
      <p className="max-w-md text-slate-600">The page you are looking for does not exist or has been moved.</p>
      <Link href="/">
        <button className="btn bg-emerald-600 text-white hover:bg-emerald-700">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
