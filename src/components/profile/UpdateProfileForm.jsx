"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfileForm = ({ user }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const handleUpdate = async (data) => {
    setIsUpdating(true);
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });
    setIsUpdating(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated successfully");
  };

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 font-bold text-2xl text-slate-900">Update Profile</h2>

      <form className="space-y-4" onSubmit={handleSubmit(handleUpdate)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your full name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Image URL</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter profile image URL"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}
        </fieldset>

        <button className="btn w-full bg-emerald-600 text-white hover:bg-emerald-700" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Information"}
        </button>
      </form>

      <Link href="/my-profile" className="btn btn-ghost mt-3 w-full">
        Back to profile
      </Link>
    </div>
  );
};

export default UpdateProfileForm;
