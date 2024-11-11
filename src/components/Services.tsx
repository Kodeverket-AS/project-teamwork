"use client";

import { Services as tServices } from "@/types/sanity.types";
import SectionComponent from "./sections/SectionComponent";

export default function Services({ content }: { content: tServices[] }) {
  return (
    <SectionComponent orange={false}>
      <div className="flex flex-col gap-10">
        <h2>Tjenester</h2>
        {content && content.map(item => (
          <div key={item._id} className="flex flex-col md:flex-row w-full md:justify-between gap-10">
            <div className="w-full h-60 shadow md:w-56 md:h-64">
              <h3>{item.title}</h3>
            </div>
            <div className="w-full h-60 shadow md:w-56 md:h-64">
              <h3>{item.title}</h3>
            </div>
            <div className="w-full h-60 shadow md:w-56 md:h-64">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </SectionComponent>
  );
}
