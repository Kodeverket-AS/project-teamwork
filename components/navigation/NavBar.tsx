"use client"

import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";

export function NavbarAlt() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between 3xl:justify-around">
        <div className="flex flex-row items-end p-4">
          <Link href="/" aria-label="Gå til landingssiden">
            <Image
              className="w-28 lg:w-36"
              src={""}
              width={350}
              height={220}
              alt="Jobloop Logo"
            />
          </Link>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/om-oss"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-jobloop-secondary-green md:hover:underline"
            >
              Om Oss
            </Link>
            <Link
              href="/kontakt"
              aria-label="gå til denne undersiden for å ta kontakt med en av oss"
              className="px-4 font-bold md:portrait:px-2 lg:px-4 text-jobloop-secondary-green md:hover:underline"
            >
              Kontakt
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