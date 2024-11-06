"use client";

import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";
import { BuyButton } from "./Buttons";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserAltSlash,
} from "react-icons/fa";

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

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
    <p className="text-xs transition-all group-hover:text-sm">
      Image not available
    </p>
  </div>
);

const Book = ({ title, description, image, url }: TBook) => (
  <div className="bg-white p-4 text-kv-black overflow-hidden rounded-xl min-w-72 sm:min-w-96 sm:w-96 flex flex-col items-left justify-center transition-all duration-200 shadow-md hover:shadow-lg">
    <div className="h-64 w-full rounded-md overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt={title}
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
      <p>{description}</p>
    </div>
    <BuyButton href={url} />
  </div>
);

export default function Books({ content }: { content: TBooks }) {
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
            style={{ scrollbarWidth: "none" }}
            className="w-full overflow-x-auto pl-2 py-4 sm:pl-6 flex flex-row gap-8 items-center">
            {content.map((book) => (
              <Book
                id={book.id}
                key={book.id}
                title={book.title}
                description={book.description}
                image={book.image}
                url={book.url}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end pt-4">
          <div className="flex gap-2 px-5 text-base">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
