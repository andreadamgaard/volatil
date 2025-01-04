"use client";
import { VolatilLogo } from "@/content/logo/VolatilLogo";
import { Link } from "../Link/Link";
import { YT, Mail, IG, FB, Maestro, AmericanExpress, Mastercard, UnionPay, Visa } from "./svger/IconFooter";
import { LineOne } from "@/content/svgs/line1";

export const Footer = () => {
  return (
    <footer className="bg-secondary grid justify-center px-6 pt-8 pb-10 text-sm gap-y-5 md:px-16 md:grid-cols-2 md:gap-x-0 md:gap-y-0 lg:grid-cols-3">
      <div className="flex flex-col items-center md:items-start md:col-start-1 md:col-span-2 md:row-start-1 md:pb-4">
        <VolatilLogo className="w-52 h-auto stroke-[4px] md:w-[17rem]" />
        <LineOne className="w-52 h-auto stroke-2 md:w-[17rem]" />
      </div>

      <div className="grid gap-6 md:gap-4 md:col-start-2 md:row-start-1 md:max-w-[450px] lg:min-w-96 lg:col-start-3 grid-cols-2 md:grid-cols-1 md:place-items-end">
        <div className="flex flex-col gap-1 md:gap-2 w-40 md:w-80">
          <div className="flex flex-col">
            <div className="flex gap-16 justify-between items-center">
              <h1 className="font-hackney text-xl md:text-2xl">Volatil</h1>
              <div className="flex gap-0.5 md:gap-3">
                <Link intent="icon" href="https://www.instagram.com/volatilbar" aria-label="Volatil Instagram">
                  <IG className="size-4 md:size-5" />
                </Link>
                <Link intent="icon" href="https://www.facebook.com/volatilnaturvin" aria-label="Volatil Facebook">
                  <FB className="size-4 md:size-5" />
                </Link>
              </div>
            </div>
            <LineOne className="-mt-1 w-full md:-mt-2" />
          </div>
          <div className="flex flex-col gap-2 justify-between md:flex-row md:gap-3">
            <span>
              <p>
                <strong>Adresse:</strong>
              </p>
              <address className="not-italic">
                Sønder Blvd. 52,
                <br />
                1720 København V
              </address>
            </span>
            <span>
              <p>
                <strong>Åbningstider</strong>
                <br />
                Man-fre: 13-20
                <br />
                Lørdag: 12-20
                <br />
                Søndag: 13-18
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:gap-2 w-40 md:w-80">
          <div className="flex flex-col">
            <div className="flex gap-16 justify-between items-center">
              <h1 className="font-hackney text-xl md:text-2xl">Steffi</h1>
              <div className="flex gap-0.5 md:gap-3">
                <Link intent="icon" href="https://www.instagram.com/steffigrafcph" aria-label="Steffi Instagram">
                  <IG className="size-4 md:size-5" />
                </Link>
                <Link intent="icon" href="https://www.facebook.com/steffigrafcph" aria-label="Steffi Facebook">
                  <FB className="size-4 md:size-5" />
                </Link>
              </div>
            </div>
            <LineOne className="-mt-1 w-full md:-mt-2" />
          </div>
          <div className="flex flex-col gap-2 justify-between md:flex-row md:gap-3">
            <span>
              <p>
                <strong>Adresse:</strong>
              </p>
              <address className="not-italic">
                Søllerødgade 49,
                <br />
                2200 København N
              </address>
            </span>
            <span>
              <p>
                <strong>Åbningstider</strong>
                <br />
                Torsdag 12-19
                <br />
                Torsdag 12-19
                <br />
                Torsdag 12-19
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 md:col-start-1 md:col-span-2 md:row-start-2 xl:col-start-2 xl:row-start-1 xl:col-span-1">
        <div className="flex flex-col">
          <label htmlFor="nyhedsbrev">
            <p className="font-hackney text-xl md:text-2xl">GIF-NYHEDSBREVET:</p>
          </label>
          <input id="nyhedsbrev" type="email" placeholder="Kom med den mail!" className="w-56 h-8 px-2 tabular-nums rounded " />
        </div>
        <div className="flex gap-3 px-0.5">
          <Link intent="icon" href="mailto:info@volatil.dk" aria-label="mail">
            <Mail className="size-6 md:size-8" />
          </Link>
          <Link intent="icon" href="https://www.youtube.com/watch?v=QsW824j3-B0" aria-label="Youtube">
            <YT className="size-6 md:size-8" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 lg:pt-0 md:col-start-1 md:col-span-3 ">
        <div className="flex gap-2 text-primary flex-wrap text-[0.65rem] md:col-start-1 md:col-span-3 md:text-xs items-center">
          <p>© 2024 Volatil Vin</p>|<p>CVR: 38654233</p>|<p>+45 55 20 22 39</p>|
          <Link intent="text" href="mailto:info@volatil.dk" aria-label="mail">
            info@volatil.dk
          </Link>
        </div>

        <div className="flex gap-1 md:col-start-1 md:col-span-3">
          <AmericanExpress className="w-10 h-6" />
          <Maestro className="w-10 h-6" />
          <Mastercard className="w-10 h-6" />
          <UnionPay className="w-10 h-6" />
          <Visa className="w-10 h-6" />
        </div>
      </div>
    </footer>
  );
};
