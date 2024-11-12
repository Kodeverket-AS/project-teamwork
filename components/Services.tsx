"use client";

import { Services as tServices } from "@/types/sanity.types";
import Image from "next/image";

export default function Services({ content }: { content: tServices[]}) {
  return (
    <div className="bg-kv-white w-full flex flex-col px-5 md:px-10 py-14 gap-10">
      <h2>Tjenester</h2>
      <div className="grid grid-cols-3 w-full gap-10">
        {content.map(item => (
          <div className="w-full h-60 shadow md:w-1/3 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border group">
            <Image
              src={item.image?.url ?? 'HeroImage.jpg'}
              width={400}
              height={400}
              alt={item.image?.alt ?? 'Beskrivelse av bilde mangler'}
              className="block group-hover:hidden"
            />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div> 
    </div>
  );
}
