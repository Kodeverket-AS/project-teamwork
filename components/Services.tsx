"use client";

import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-kv-white w-full flex flex-col">
      <h2>Tjenester</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-28 h-36 shadow">
          <h3>Medarbeiderutvikling</h3>
        </div>
        <div className="w-28 h-36 shadow">
          <h3>Teamutvikling</h3>
        </div>
        <div className="w-28 h-36 shadow">
          <h3>Lederutvikling</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-28 h-36 shadow">
          <h3>Omstilling og nedbemanning</h3>
        </div>
        <div className="w-28 h-36 shadow">
          <h3>Konfliktløsing</h3>
        </div>
        <div className="w-28 h-36 shadow">
          <h3>Coaching</h3>
        </div>
      </div>
    </div>
  );
}
