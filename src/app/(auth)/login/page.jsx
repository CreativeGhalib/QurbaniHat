"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setIsSubmitting(true);
    const { error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: redirectPath,
    });
    setIsSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login successful");
    router.push(redirectPath);
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    try {
      const callbackURL = `${window.location.origin}${redirectPath.startsWith("/") ? redirectPath : "/"}`;
      const errorCallbackURL = `${window.location.origin}/login`;

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
        toast.error(result?.message || socialResult?.error?.message || "Google login could not start");
        return;
      }

      window.location.href = result.url;
    } catch (error) {
      toast.error(error?.message || "Google login failed to initialize");
      console.log(error, "googleLoginError");
    }
  };

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-center font-bold text-3xl text-slate-900">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
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

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                className="input w-full pr-11"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password field is required",
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
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <button type="button" className="btn mt-3 w-full border border-emerald-600 bg-transparent text-emerald-700" onClick={handleGoogleLogin}>
          <FaGoogle />
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-emerald-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
