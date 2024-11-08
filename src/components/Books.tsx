"use client";

import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";
import { BuyButton } from "./Buttons";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserAltSlash,
} from "react-icons/fa";
import { useHorizontalScroll } from "@/hooks/scrolls";
import { Books as tBooks } from "@/types/sanity.types";
import placeholderImage from '@/assets/placeholder.jpg'

/**
 * ====================================================
 * TYPES DECLARATIONS
 * ====================================================
 */

// TYPE : BOOK
type TBook = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

// TYPE : BOOKS (EXPORT DEFAULT)
type TBooks = TBook[];

/**
 * ====================================================
 * COMPONENTS DECLARATIONS
 * ====================================================
 */

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
    <p className="text-xs transition-all group-hover:text-sm">
      Image not available
    </p>
  </div>
);

// BOOK
const Book = ({ title, desc, image, url }: tBooks) => (
  <div className="bg-white p-4 text-kv-black overflow-hidden rounded-xl min-w-72 sm:min-w-96 sm:w-96 flex flex-col items-left justify-center transition-all duration-300 shadow-md border border-teamwork-primary-orange/0 hover:border-teamwork-primary-orange hover:shadow-lg">
    <div className="h-64 w-full rounded-md overflow-hidden">
      {image ? (
        <Image
          src={image.url ?? placeholderImage}
          alt={image.alt ?? title}
          width={100}
          height={100}
          className="w-full h-full bg-slate-300"
        />
      ) : (
        <ImageMissing />
      )}
    </div>

    <div className="pt-2 pb-12 leading-relaxed">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <BuyButton href={url ?? ""} />
  </div>
);

/**
 * ====================================================
 * MAIN COMPONENT (BOOKS) EXPORT DEFAULT
 * ====================================================
 */

export default function Books({ content }: { content: tBooks[] }) {
  const { scrollContainerRef, handleScrollHorizontal } =
    useHorizontalScroll({ scrollLength: 1 });

  return (
    <SectionComponent orange={false}>
      <div>
        <div className="text-kv-black">
          <h1 className="pb-10">Våre bøker</h1>
        </div>
        <div className="relative w-screen sm:w-full h-fit py-4 ">
          <div className="hidden sm:block absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-kv-white to-kv-white/0"></div>
          <div className="hidden sm:block absolute right-0 top-0 h-full w-6 bg-gradient-to-r from-kv-white/0 to-kv-white"></div>
          <div
            ref={scrollContainerRef}
            style={{ scrollbarWidth: "none" }}
            className="w-full overflow-x-auto pl-2 py-4 sm:pl-6 flex flex-row gap-8 items-center">
            {content.map((book) => (
              <Book key={book._id} {...book} />
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
