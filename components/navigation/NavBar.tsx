"use client"

import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";
import LogoDark from "../../public/LogoDark.svg";

export function NavbarAlt() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between 3xl:justify-around">
        <div className="flex flex-row items-end p-4">
          <Link href="/" aria-label="Gå til landingssiden">
            <Image
              className="w-28 lg:w-36"
              src={LogoDark}
              width={350}
              height={220}
              alt="Teamwork Logo"
            />
          </Link>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/"
              aria-label="gå til denne seksjonen og les om modellen vår"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-kv-black md:hover:underline"
            >
              Modell
            </Link>
            <Link
              href="/"
              aria-label="gå til denne seksjonen for å lese om tjenestene våre"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-kv-black md:hover:underline"
            >
              Tjenester
            </Link>
            <Link
              href="/"
              aria-label="gå til denne seksjonen for å lese om noen av historiene om oss"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-kv-black md:hover:underline"
            >
              Historier
            </Link>
            <Link
              href="/"
              aria-label="gå til denne seksjonen for å lese om suksessen våre kunder har hatt"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-kv-black md:hover:underline"
            >
              Suksess
            </Link>
          </div>
          <div className="px-4 md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
}