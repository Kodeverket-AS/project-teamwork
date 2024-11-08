"use client";

import Link from "next/link";
import Image from "next/image";
import { DownloadButton } from "./Buttons";
import HeroImage from "../public/HeroImage.jpg";

export default function Hero() {
  return (
    <div className="bg-kv-white w-full flex flex-col px-5 pb-14 gap-3 md:flex-row md:px-10">
      <div className="w-full md:w-1/2">
        <div className="w-full h-full md:w-5/6 md:h-[27rem]">
          <Image
            src={HeroImage}
            width={1500}
            height={1000}
            className="w-full h-full object-cover"
            alt="People in suits discussing something on a tablet"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 pl-0 md:pl-6 w-full md:w-1/2">
        <h1>
          Frigjør kraften i medarbeiderskapet: Den skandinaviske
          ledelsesmodellen.
        </h1>
        <p>
          Employeeship - modellen vår, som er utviklet gjennom mer enn 30 års
          forskning, redefinerer lederskap ved å styrke engasjement,
          produktivitet og bærekraftig suksess.
        </p>
        <DownloadButton />
      </div>
    </div>
  );
}