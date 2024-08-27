import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { Providers } from "@/redux/Providers";
import Footer from "@/components/nav/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPTVBay: Abonnement IPTV premium",
  description: "Get your IPTV subscription now",
  // icons: {
  //   icon: "@/app/favicon.ico",
  // },
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
