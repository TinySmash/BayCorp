import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { Providers } from "@/redux/Providers";
import Footer from "@/components/nav/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`bg-white overflow-x-hidden scrollbar-hidden ${montserrat.className}`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
