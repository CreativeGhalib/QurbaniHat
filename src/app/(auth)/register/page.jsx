"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setIsSubmitting(true);
    const { error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photo,
    });
    setIsSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registration successful");
    router.push("/login");
  };

  const handleGoogleRegister = async () => {
    try {
      const callbackURL = `${window.location.origin}/`;
      const errorCallbackURL = `${window.location.origin}/register`;

      const response = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: "google",
          callbackURL,
          errorCallbackURL,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.url) {
        const socialResult = await authClient.signIn.social({
          provider: "google",
          callbackURL,
          errorCallbackURL,
          disableRedirect: true,
        });
        if (socialResult?.data?.url) {
          window.location.href = socialResult.data.url;
          return;
        }
        toast.error(result?.message || socialResult?.error?.message || "Google sign up could not start");
        return;
      }

      window.location.href = result.url;
    } catch (error) {
      toast.error(error?.message || "Google sign up failed to initialize");
      console.log(error, "googleSignupError");
    }
  };

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-center font-bold text-3xl text-slate-900">Register</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && <p className="text-sm text-red-500">{errors.photo.message}</p>}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                className="input w-full pr-11"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password field is required",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-600"
                onClick={() => setIsShowPassword(!isShowPassword)}
                aria-label={isShowPassword ? "Hide password" : "Show password"}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </fieldset>

          <button type="submit" className="btn w-full bg-slate-900 text-white hover:bg-slate-800" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>

        <button type="button" className="btn mt-3 w-full border border-emerald-600 bg-transparent text-emerald-700" onClick={handleGoogleRegister}>
          <FaGoogle />
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-emerald-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
