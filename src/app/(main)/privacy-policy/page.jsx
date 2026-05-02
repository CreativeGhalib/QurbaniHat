import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h1 className="mb-4 font-bold text-3xl text-slate-900">Privacy Policy</h1>
        <p className="mb-4 text-slate-700">
          QurbaniHat collects only the account and booking form information needed to operate the platform. We do not
          sell personal data to third parties.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Account data: name, email, and profile image from login/registration.</li>
          <li>Booking form data is used only to process booking requests in the app flow.</li>
          <li>Google sign-in is used only for authentication and basic profile access.</li>
          <li>You can request profile updates from the My Profile section.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
