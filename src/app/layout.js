import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import AppToaster from "@/components/shared/AppToaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "QurbaniHat",
  description: "Modern livestock booking platform for Qurbani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`h-full antialiased`} suppressHydrationWarning>
      <body className={`${poppins.className} min-h-full flex flex-col`} suppressHydrationWarning>
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
