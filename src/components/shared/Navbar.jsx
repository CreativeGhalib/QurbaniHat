"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { FaBars, FaXmark } from "react-icons/fa6";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    setIsMobileMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="QurbaniHat logo"
            width={260}
            height={70}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-4 md:flex md:gap-6">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/animals">All Animals</NavLink>
          </li>
          {user && (
            <li>
              <NavLink href="/my-profile">My Profile</NavLink>
            </li>
          )}
        </ul>

        <div className="hidden md:block">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : user ? (
            <div className="flex items-center gap-2">
              <Image
                src={user.image || "https://i.ibb.co/6WFd5jL/default-avatar.png"}
                alt={user.name || "User"}
                width={42}
                height={42}
                className="h-10 w-10 rounded-full border border-slate-200 object-cover"
              />
              <button className="btn btn-sm bg-slate-900 text-white" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-sm bg-slate-900 text-white">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm btn-outline border-emerald-500 text-emerald-600">
                Register
              </Link>
            </div>
          )}
        </div>

        <button
          type="button"
          className="btn btn-ghost btn-sm border border-slate-200 px-3 text-slate-700 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/animals" className="font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>
                All Animals
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/my-profile" className="font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>
                  My Profile
                </Link>
              </li>
            )}
          </ul>

          <div className="mt-4 border-t border-slate-200 pt-4">
            {isPending ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : user ? (
              <div className="flex items-center gap-3">
                <Image
                  src={user.image || "https://i.ibb.co/6WFd5jL/default-avatar.png"}
                  alt={user.name || "User"}
                  width={38}
                  height={38}
                  className="h-9 w-9 rounded-full border border-slate-200 object-cover"
                />
                <button className="btn btn-sm bg-slate-900 text-white" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login" className="btn btn-sm bg-slate-900 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-sm btn-outline border-emerald-500 text-emerald-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
