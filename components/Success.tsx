"use client";

import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";
import {
  FaStar,
  FaRegStar,
  FaStarHalfStroke,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useHorizontalScroll } from "../customHooks/scrolls";
import { FaUserAltSlash } from "react-icons/fa";

// DUMMY DATA
const dummyData = [
  {
    id: 0,
    name: "John Doe",
    role: "CEO",
    rating: 4,
    title: "Revitaliserte arbeidsmetoden min",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 1,
    name: "Jane Doe",
    role: "CTO",
    rating: 5,
    title: "Revitaliserte arbeidsmetoden min",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 2,
    name: "Joan Qwerty",
    role: "CFO",
    rating: 4.5,
    title: "Revitaliserte arbeidsmetoden min",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 3,
    name: "Joan Qwerty",
    role: "CFO",
    rating: 4.5,
    title: "Revitaliserte arbeidsmetoden min",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 4,
    name: "Joan Qwerty",
    role: "CFO",
    rating: 4.5,
    title: "Revitaliserte arbeidsmetoden min",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
];

type TRatingProps = {
  rating: number;
};

const Rating = ({ rating }: TRatingProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfStroke key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

type TReviewCardProps = {
  name: string;
  role: string;
  rating: number;
  title: string;
  review: string;
  image: string;
};

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
  </div>
);

const ReviewCard = ({
  name,
  role,
  rating,
  title,
  review,
  image,
}: TReviewCardProps) => {
  return (
    <div className="w-full sm:w-2/3 p-6 rounded-lg leading-relaxed flex flex-col sm:flex-row flex-shrink-0 justify-between gap-4 sm:gap-8 items-start transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="w-full">
        <div className="pb-4 text-2xl text-teamwork-primary-orange">
          <Rating rating={rating} />
        </div>
        <div>
          <h2 className="font-semibold ">{title}</h2>
          <p>{review}</p>
        </div>
        <div className="text-xs flex items-center gap-2 py-4">
          <p className="font-semibold">{name}</p>
          <p>|</p>
          <p>{role}</p>
        </div>
      </div>
      <div className="hidden sm:block h-full w-48 rounded-md overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt="Success"
            width={200}
            height={200}
            className="w-full h-full bg-slate-300"
          />
        ) : (
          <ImageMissing />
        )}
      </div>
    </div>
  );
};

const ReviewCardV2 = ({
  name,
  role,
  rating,
  title,
  review,
  image,
}: TReviewCardProps) => {
  return (
    <div className="w-full sm:w-3/5 p-6 rounded-lg leading-relaxed flex flex-col sm:flex-row flex-shrink-0 justify-between gap-4 sm:gap-8 items-start shadow-md">
      <div className="w-full">
        <div className="flex items-center gap-4 pb-8">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt="Success"
                width={200}
                height={200}
                className="w-full h-full bg-slate-300"
              />
            ) : (
              <ImageMissing />
            )}
          </div>
          <div className="text-sm">
            <h3 className="font-semibold">{name}</h3>
            <p>{role}</p>
          </div>
        </div>
        <div>
          <Rating rating={rating} />
          <h2 className="font-semibold ">{title}</h2>
          <p className="">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default function Success() {
  const { scrollContainerRef, handleScrollHorizontal } =
    useHorizontalScroll({ scrollLength: 0.6 });
  return (
    <SectionComponent orange={false}>
      <div className="text-kv-black">
        <h1 className="pb-10">Suksess</h1>
        <p className="max-w-[60ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          earum unde placeat ad recusandae? Repellat aperiam vel
          exercitationem, corrupti quas accusantium iure.
        </p>
        <div
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none" }}
          className="flex overflow-x-scroll gap-10 py-8">
          {dummyData.map((data) => (
            <ReviewCard
              key={data.id}
              name={data.name}
              role={data.role}
              rating={data.rating}
              title={data.title}
              review={data.review}
              image={data.image}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-end pt-4">
        <div className="hidden sm:flex gap-2 px-5 text-base">
          <button onClick={() => handleScrollHorizontal("left")}>
            <FaChevronLeft />
          </button>
          <button onClick={() => handleScrollHorizontal("right")}>
            <FaChevronRight />
          </button>
        </div>
        <div className="flex sm:hidden gap-2 px-5 text-base">
          <FaChevronLeft />
          <FaChevronRight />
        </div>
      </div>
    </SectionComponent>
  );
}
