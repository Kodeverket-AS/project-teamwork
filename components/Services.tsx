"use client";

import Link from "next/link";
import Image from "next/image";

interface Contents {
  title: string;
  content: string;
  image: string;
}

export default function Services({ content: Contents[] }) {
  return (
    <div className="bg-kv-white w-full flex flex-col px-5 md:px-10 py-14 gap-10">
      <h2>Tjenester</h2>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[0].title}</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[1].title}</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[2].title}</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[3].title}</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[4].title}</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>{content[5].title}</h3>
        </div>
      </div>
    </div>
  );
}
