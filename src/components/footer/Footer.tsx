"use client";
import { VolatilLogo } from "@/content/logo/VolatilLogo";
import { Link } from "../Link/Link";
import { YT, Mail, IG, FB, Maestro, AmericanExpress, Mastercard, UnionPay, Visa } from "./svger/IconFooter";
import { LineOne } from "@/content/svgs/line1";

export const Footer = () => {
  return (
    <footer className="bg-secondary grid justify-center px-6 pt-8 pb-10 text-sm gap-y-5 md:px-16 md:grid-cols-3 md:gap-x-0 md:gap-y-0 sm w-screen">
      <span className="flex flex-col items-center md:items-start md:col-start-1 md:col-span-2 md:row-start-1 md:max-w-[450px] md:pb-4">
        <VolatilLogo className="w-2/4 stroke-[4px] md:w-4/5 lg:w-3/4" />
        <LineOne className="w-2/4 stroke-2 md:w-4/5 lg:w-3/4" />
      </span>

      <div className="flex gap-2 justify-between md:flex-col md:grid-cols-1  md:col-start-3 md:row-span-3 md:min-w-60 md:max-w-[450px] lg:min-w-96 md:justify-self-end">
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex flex-col">
            <span className="flex gap-16 justify-between items-center">
              <h1 className="font-hackney text-xl md:text-2xl">Volatil</h1>
              <span className="flex gap-0.5 md:gap-3">
                <Link intent="icon" href="https://www.instagram.com/volatilbar">
                  <IG className="size-4 md:size-5" />
                </Link>
                <Link intent="icon" href="https://www.facebook.com/volatilnaturvin">
                  <FB className="size-4 md:size-5" />
                </Link>
              </span>
            </span>
            <LineOne className="-mt-1 md:-mt-2" />
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

        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex flex-col">
            <span className="flex gap-16 justify-between items-center">
              <h1 className="font-hackney text-xl md:text-2xl">Steffi</h1>
              <span className="flex gap-0.5 md:gap-3">
                <Link intent="icon" href="https://www.instagram.com/steffigrafcph">
                  <IG className="size-4 md:size-5" />
                </Link>
                <Link intent="icon" href="https://www.facebook.com/steffigrafcph">
                  <FB className="size-4 md:size-5" />
                </Link>
              </span>
            </span>
            <LineOne className="-mt-1 md:-mt-2" />
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
        <span className="flex flex-col">
          <label htmlFor="nyhedsbrev">
            <span className="font-hackney text-xl md:text-2xl">GIF-NYHEDSBREVET:</span>
          </label>
          <input id="nyhedsbrev" type="email" placeholder="Kom med den mail!" className="max-w-56 h-8 px-2 tabular-nums rounded " />
        </span>
        <span className="flex gap-3 px-0.5">
          <Link intent="icon" href="mailto:info@volatil.dk">
            <Mail className="size-6 md:size-8" />
          </Link>
          <Link intent="icon" href="https://www.youtube.com/watch?v=QsW824j3-B0">
            <YT className="size-6 md:size-8" />
          </Link>
        </span>
      </div>

      <div className="flex flex-col gap-3 pt-6 lg:pt-0 md:col-start-1 md:col-span-3 ">
        <div className="flex gap-2 text-textSale flex-wrap text-[0.65rem] md:col-start-1 md:col-span-3 md:text-xs items-center">
          <p>© 2024 Volatil Vin</p>|<p>CVR: 38654233</p>|<p>+45 55 20 22 39</p>|
          <Link intent="text" href="mailto:info@volatil.dk">
            info@volatil.dk
          </Link>
        </div>

        <div className="flex gap-1 md:col-start-1 md:col-span-3">
          <AmericanExpress />
          <Maestro />
          <Mastercard />
          <UnionPay />
          <Visa />
        </div>
      </div>
    </footer>
  );
};
