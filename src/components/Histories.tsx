"use client";

import Image from "next/image";
import SectionComponent from "./sections/SectionComponent";
import { ButtonResponsive } from "./Buttons";
import { FaUserAltSlash } from "react-icons/fa";

// DUMMY DATA
const dummyData = {
  image: "",
  title: "Om oss",
  content:
    "TeamWork OU AS ble grunnlagt av Johan Velten i 1985. Vi er et konsulentfirma som jobber med ledere og organisasjoner på alle nivåer i næringslivet, offentlig sektor og ideelle organisasjoner. Våre egenutviklede samtaleverktøy og metoder er basert på ledende forskning og HR-praksis gjennom 40 år. Verktøyene gjør det enklere å snakke om viktige og vanskelige temaer, og gjennomføre praktiske utviklingstiltak. TeamWork samarbeider med professor Stefan Tengblad ved Göteborgs Universitet, som er ledende innen HR-faglig forskning og utvikling. Sammen utgjør vi Nordens ledende fagmiljø innen medarbeiderskap og den skandinaviske ledelsesmodellen",
};

// MISSING IMAGE REPLACEMENT COMPONENT
const ImageMissing = () => (
  <div className="group w-full h-full flex flex-col justify-center items-center bg-teamwork-primary-orange/80 text-teamwork-secondary-orange">
    <FaUserAltSlash className="text-3xl" />
    <p className="text-xs transition-all group-hover:text-sm group-focus:text-sm">
      Image not available
    </p>
  </div>
);

/**
 * ====================================================
 * HISTORIES (EXPORT DEFAULT)
 * ====================================================
 */
export default function Histories() {
  return (
    <SectionComponent
      orange={true}
      fade>
      <div id="histories">
        <h2 className="pb-10">Historier</h2>
        <div className="flex flex-col sm:h-[528px] lg:flex-row gap-4 sm:gap-10 justify-between items-center">
          <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden">
            {dummyData.image ? (
              <Image
                src={dummyData.image}
                alt={dummyData.title}
                width={100}
                height={100}
                className="w-full h-full bg-slate-300"
              />
            ) : (
              <ImageMissing />
            )}
          </div>
          <div className="bg-kv-white text-kv-black text-pretty p-4 sm:p-10 flex flex-col gap-6 justify-between rounded-lg w-full h-full leading-relaxed">
            <div>
              <h3>{dummyData.title}</h3>
              <p>{dummyData.content}</p>
            </div>

            <ButtonResponsive
              href={""}
              text={"Våre bøker"}
            />
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
