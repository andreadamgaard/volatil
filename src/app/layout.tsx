import type { Metadata } from "next";
import "../styles/globals.css";
import { Abel } from "next/font/google";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "@/components/footer/Footer";
import clsx from "clsx";
import Head from "next/head";
import { BurgerMenu } from "@/components/burger/BurgerMenu";

export const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
});

export const metadata: Metadata = {
  title: "Volatil redesign",
  description: "Volatil redesign - Andrea Damgaard Hegner, KEA Multimediedesign eksamen 4. semester 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abel.variable}`}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className={clsx(abel.className, "antialiased")}>
        <span className=" md:hidden">
          <BurgerMenu />
        </span>
        <span className="hidden md:block">
          <Menu />
        </span>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
