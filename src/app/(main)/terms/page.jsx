import React from "react";

const TermsPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h1 className="mb-4 font-bold text-3xl text-slate-900">Terms of Service</h1>
        <p className="mb-4 text-slate-700">
          By using QurbaniHat, you agree to provide accurate information and use the platform only for lawful Qurbani
          booking purposes.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Users are responsible for verifying livestock details before final booking.</li>
          <li>QurbaniHat shows seller-provided information and does not guarantee market price changes.</li>
          <li>Misuse, fraud, or abusive behavior can lead to account restriction.</li>
          <li>Policy and terms may be updated to maintain service quality and compliance.</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsPage;
