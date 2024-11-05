"use client";

import Link from "next/link";
import Image from "next/image";

interface Contents {
  title: string;
  content: string;
  image: string;
  alt: string;
}

interface ServicesProps {
  content: Contents[];
}

export default function Services({ content }:ServicesProps) {
  return (
    <div className="bg-kv-white w-full flex flex-col px-5 md:px-10 py-14 gap-10">
      <h2>Tjenester</h2>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[0].image}
            width={400}
            height={400}
            alt={content[0].alt}
            className="block hover:hidden"
          />
          <h3>{content[0].title}</h3>
          <p>{content[0].content}</p>
        </div>
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[1].image}
            width={400}
            height={400}
            alt={content[1].alt}
            className="block hover:hidden"
          />
          <h3>{content[1].title}</h3>
          <p>{content[1].content}</p>
        </div>
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[2].image}
            width={400}
            height={400}
            alt={content[2].alt}
            className="block hover:hidden"
          />
          <h3>{content[2].title}</h3>
          <p>{content[2].content}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[3].image}
            width={400}
            height={400}
            alt={content[3].alt}
            className="block hover:hidden"
          />
          <h3>{content[3].title}</h3>
          <p>{content[3].content}</p>
        </div>
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[4].image}
            width={400}
            height={400}
            alt={content[4].alt}
            className="block hover:hidden"
          />
          <h3>{content[4].title}</h3>
          <p>{content[4].content}</p>
        </div>
        <div className="w-full h-60 shadow md:w-1/4 md:h-72 overflow-hidden p-3 hover:border-teamwork-primary-orange hover:border">
          <Image
            src={content[5].image}
            width={400}
            height={400}
            alt={content[5].alt}
            className="block hover:hidden"
          />
          <h3>{content[5].title}</h3>
          <p>{content[0].content}</p>
        </div>
      </div>
    </div>
  );
}
