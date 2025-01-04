import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/swiper.css";
import { Abel } from "next/font/google";
import Head from "next/head";
import Loading from "./loading";
import clsx from "clsx";
import { BurgerMenu } from "@/components/burger/BurgerMenu";
import { Suspense } from "react";
import { Footer } from "@/components/footer/Footer";
import { Menu } from "@/components/Menu/Menu";

export const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abel",
});

export const metadata: Metadata = {
  title: "Volatil redesign",
  description: "Volatil redesign - Andrea Damgaard Hegner, KEA Multimediedesign eksamen 4. semester 2024",
  robots: "noindex, nofollow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abel.variable}`}>
      <Head>
        <link rel="preload" href="/fonts/hackney-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <link rel="stylesheet" href="/styles/swiper.css" />
        <link rel="preload" href="/images/branches.webp" as="image" type="image/webp" />
      </Head>
      <body className={clsx(abel.className, "antialiased")}>
        <BurgerMenu />
        <Menu />
        <main className="rotated-bg ">
          <img
            src="/images/branches.webp"
            alt="Preloaded background img"
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              opacity: 0,
              pointerEvents: "none",
            }}
          />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
