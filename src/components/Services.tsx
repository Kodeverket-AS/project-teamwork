"use client";

import { Services as tServices } from "@/types/sanity.types";
import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";

export default function Services({ content }: { content: tServices[]}) {
  return (
    <SectionComponent orange={false} fade>
      <div id="services" className="w-full flex flex-col py-14 gap-10">
        <h2>Tjenester</h2>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 w-full gap-10">
          {content.map((item) => (
            <div
              key={item._id}
              className="relative h-60 shadow md:h-80 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border group transition-all duration-500 ease-in-out 2xs:h-72 xs:h-80 focus:border-teamwork-primary-orange focus:border"
            >
              <Image
                src={item.image?.url ?? "HeroImage.jpg"}
                width={400}
                height={400}
                alt={item.image?.alt ?? "Beskrivelse av bilde mangler"}
                className="group-hover:opacity-0 transition duration-500 ease-in-out group-focus:opacity-0"
              />
              <div className="absolute pr-3 top-auto mt-3 transition-all duration-500 ease-in-out group-hover:top-0 group-focus:top-0">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionComponent>
  );
}
