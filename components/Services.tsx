"use client";

import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-kv-white w-full flex flex-col px-5 md:px-10 py-14 gap-10">
      <h2>Tjenester</h2>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Medarbeiderutvikling</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Teamutvikling</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Lederutvikling</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between gap-10">
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Omstilling og nedbemanning</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Konfliktløsing</h3>
        </div>
        <div className="w-full h-60 shadow md:w-56 md:h-64">
          <h3>Coaching</h3>
        </div>
      </div>
    </div>
  );
}
