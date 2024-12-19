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
  const handleStylesheetLoad = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    const link = event.currentTarget as HTMLLinkElement;
    link.media = "all";
  };
  return (
    <html lang="en" className={`${abel.variable}`}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preload" href="/fonts/hackney-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/branches.svg" as="image" />
        <link rel="preload" href="/styles/globals.css" as="style" />
        <link rel="stylesheet" href="/styles/globals.css" media="print" onLoad={handleStylesheetLoad} />
        <link rel="preload" href="/styles/swiper.css" as="style" />
        <link rel="stylesheet" href="/styles/swiper.css" media="print" onLoad={handleStylesheetLoad} />
      </Head>
      <body className={clsx(abel.className, "antialiased")}>
        <span className=" md:hidden">
          <BurgerMenu />
        </span>
        <span className="hidden md:block">
          <Menu />
        </span>
        <main className="">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
