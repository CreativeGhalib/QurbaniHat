"use client";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookingForm = ({ defaultName, defaultEmail, animalName }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: defaultName || "",
      email: defaultEmail || "",
      phone: "",
      address: "",
    },
  });

  const handleBooking = (data) => {
    console.log(data, "bookingData");
    toast.success(`Booking request placed for ${animalName}`);
    reset({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 font-bold text-xl text-slate-900">Book This Animal</h2>

      <form className="space-y-3" onSubmit={handleSubmit(handleBooking)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="email"
            className="input w-full"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Address</legend>
          <textarea
            className="textarea w-full"
            placeholder="Enter full address"
            rows={3}
            {...register("address", { required: "Address is required" })}
          ></textarea>
          {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
        </fieldset>

        <button className="btn w-full bg-emerald-600 text-white hover:bg-emerald-700">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
