import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="mb-3 font-bold text-xl text-white">QurbaniHat</h2>
          <p className="text-sm leading-6 text-slate-300">
            Trusted platform to explore and book healthy Qurbani animals from verified sellers.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-semibold text-white">Contact Info</h2>
          <p className="text-sm">Support: +880 1700-000000</p>
          <p className="text-sm">Email: support@qurbanihat.com</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h2 className="mb-3 font-semibold text-white">About & Social</h2>
          <p className="mb-3 text-sm text-slate-300">
            We simplify Qurbani preparation with transparent animal information and easy booking.
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="#" className="rounded-md border border-slate-500 bg-white/10 p-2.5 text-white transition hover:bg-white/20">
              <FaFacebookF />
            </Link>
            <Link href="#" className="rounded-md border border-slate-500 bg-white/10 p-2.5 text-white transition hover:bg-white/20">
              <FaInstagram />
            </Link>
            <Link href="#" className="rounded-md border border-slate-500 bg-white/10 p-2.5 text-white transition hover:bg-white/20">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/70">
        <p className="px-4 py-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          All rights reserved by MesbahGhalib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
