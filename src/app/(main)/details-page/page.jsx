import Link from "next/link";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const DetailsLandingPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?redirect=/details-page");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
        <h1 className="font-bold text-3xl text-slate-900">Animal Details Page</h1>
        <p className="mt-3 text-slate-600">
          Select an animal from the listing page to view full details and place your booking request.
        </p>
        <Link href="/animals" className="btn mt-6 bg-emerald-600 text-white hover:bg-emerald-700">
          Browse Animals
        </Link>
      </div>
    </div>
  );
};

export default DetailsLandingPage;
