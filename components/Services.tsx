"use client";

import Image from "next/image";
import { useSanityContext } from "@/context/sanity";

export default function Services() {
  const { services } = useSanityContext()

  return (
    <div className="bg-kv-white w-full flex flex-col px-5 md:px-10 py-14 gap-10">
      <h2>Tjenester</h2>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        {
          services && services.map((item) => (
            <div key={item._id} className="w-full h-60 shadow md:w-1/3 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border group">
              <Image
                src={item.image?.url ? item.image.url : ""}
                width={400}
                height={400}
                alt={item.image?.alt ? item.image.alt : "Something went wrong loading the images"}
                className="block group-hover:hidden"
              />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
