"use client";

import Image from "next/image";
import { FaUserAltSlash } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import SectionComponent from "./sections/SectionComponent";
import { useHorizontalScroll } from "../src/hooks/scrolls";
import { useSanityContext } from "../src/context/sanity";
import { Team } from "../src/types/sanity.types";
// import placeholderImage from "@/assets/placeholder.jpg";

const Member = ({ name, title, tlf, email, image }: Team) => {
  return (
    <div className="bg-white text-kv-black overflow-hidden rounded-md min-w-72 sm:min-w-80 sm:w-80 flex flex-col items-left justify-center transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="h-80 w-full">
        {image ? (
          <Image
            src={image.url ?? ""}
            alt={name ?? "placeholder image"}
            width={100}
            height={100}
            className="object-cover w-full h-full bg-slate-300"
          />
        ) : (
          <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
            <FaUserAltSlash className="text-3xl" />
            <p className="text-xs transition-all group-hover:text-sm">
              Image not available
            </p>
          </div>
        )}
      </div>
      <div className="w-full h-full p-4 pb-6">
        <div className="pb-4">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-sm">{title}</p>
        </div>
        <div className="text-xs text-kv-black/70 leading-relaxed">
          <div className="flex gap-1">
            <b>Mobil:</b>
            <p>{tlf}</p>
          </div>
          <div className="flex gap-1">
            <b>Epost:</b>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TeamMembers() {
  const { scrollContainerRef, handleScrollHorizontal } =
    useHorizontalScroll({ scrollLength: 1 });
  const [locations, setLocations] = useState<string[]>([]);
  const [location, setLocation] = useState<string>("alle");
  const { team } = useSanityContext();

  const filteredContent =
    location === "alle"
      ? team
      : team &&
        team.filter((item) => item.department?.includes(location));

  useEffect(() => {
    if (!team) return;
    // Generate list of selectable work locations
    const flatten = team
      .map((member) => member.department)
      .flat()
      .filter((item) => item !== undefined);
    setLocations(["alle", ...new Set(flatten)]);
  }, [team]);

  return (
    <SectionComponent orange={true}>
      <div className="relative">
        <div className="text-kv-black">
          <h1 className="pb-10">Vårt team</h1>
          <ul className="appearance-none flex gap-4">
            {locations.map((loc) => (
              <li
                key={loc}
                className={`appearance-none py-3 pr-1 underline-offset-4 capitalize ${
                  location === loc
                    ? "underline font-semibold"
                    : "underline-none font-normal text-kv-black/70 hover:text-kv-black"
                } cursor-pointer`}
                onClick={() => setLocation(loc)}>
                {loc}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full sm:w-full h-fit">
          <div className="hidden sm:block absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-teamwork-secondary-orange to-teamwork-secondary-orange/0"></div>
          <div className="hidden sm:block absolute right-0 top-0 h-full w-6 bg-gradient-to-r from-teamwork-secondary-orange/0 to-teamwork-secondary-orange"></div>
          <div
            ref={scrollContainerRef}
            style={{ scrollbarWidth: "none" }}
            className="w-full overflow-x-auto py-5 pl-2 sm:pl-6 flex flex-row gap-8 items-center">
            {filteredContent &&
              filteredContent.map((item) => (
                <Member
                  key={item._id}
                  {...item}
                />
              ))}
          </div>
        </div>
        <div className="flex w-full justify-end pt-4">
          <div className="flex gap-2 px-5 text-base">
            <button onClick={() => handleScrollHorizontal("left")}>
              <FaChevronLeft />
            </button>
            <button onClick={() => handleScrollHorizontal("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
