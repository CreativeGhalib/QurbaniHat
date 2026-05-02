import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <Image
          src={user?.image || "https://i.ibb.co/6WFd5jL/default-avatar.png"}
          alt={user?.name || "Profile"}
          width={120}
          height={120}
          className="h-28 w-28 rounded-full border border-slate-200 object-cover"
        />
      </div>

      <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Name</p>
          <p className="font-medium text-slate-900">{user?.name || "Not provided"}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
          <p className="font-medium text-slate-900">{user?.email || "Not provided"}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Photo URL</p>
          <p className="break-all text-sm text-slate-700">{user?.image || "Not provided"}</p>
        </div>
      </div>

      <div className="mt-5">
        <Link href="/my-profile/update" className="btn w-full bg-slate-900 text-white hover:bg-slate-800">
          Update Information
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
