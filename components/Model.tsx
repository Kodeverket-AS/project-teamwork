"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ModelImage from "../public/ModelImage.jpg";
import Icon1 from "../public/icons/bxl_graphql.svg";
import Icon2 from "../public/icons/octicon_graph-24.svg";
import Icon3 from "../public/icons/material-symbols-light_handshake-outline.svg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Model() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div className="bg-teamwork-secondary-orange w-full flex flex-col md:flex-row px-5 md:px-10 py-14 gap-10">
      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h2>Modell</h2>
        <div
          className={`bg-kv-white text-kv-black shadow px-3 py-2 ${
            show1 ? "h-fit" : "h-14 overflow-hidden"
          }`}
        >
          <button onClick={() => setShow1(!show1)} className="w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center">
                <Image
                  src={Icon1}
                  width={100}
                  height={100}
                  className="w-auto h-10"
                  alt="ikon tilhørende et ledende fagmiljø"
                />
                <h4>Et ledende fagmiljø</h4>
              </div>
              {show1 ? (
                <FaArrowUp className="w-6 h-auto" />
              ) : (
                <FaArrowDown className="w-6 h-auto" />
              )}
            </div>
          </button>
          <p>
            Here comes a text about this subject, please change this before the
            page goes live it's critical and btw I need to fill the space all
            the time you have to leave the space. Just leave me alone, I know
            what to do.
          </p>
        </div>
        <div
          className={`bg-kv-white text-kv-black shadow px-3 py-2 ${
            show2
              ? "h-fit"
              : "h-14 overflow-hidden"
          }`}
        >
          <button onClick={() => setShow2(!show2)} className="w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center">
                <Image
                  src={Icon2}
                  width={100}
                  height={100}
                  className="w-auto h-10"
                  alt="ikon tilhørende et ledende fagmiljø"
                />
                <h4>Medarbeiderskap</h4>
              </div>
              {show2 ? (
                <FaArrowUp className="w-6 h-auto" />
              ) : (
                <FaArrowDown className="w-6 h-auto" />
              )}
            </div>
          </button>
          <p>
            Medarbeiderskap er Nordens ideal for samspill og ansvarsdeling på
            arbeidsplassen. Sammen med professor Stefan Tengblad i Göteborg, har
            Johan Velten bidratt til å gi begrepet et konkret meningsinnhold og
            verktøy for praktisk utvikling.
          </p>
        </div>
        <div
          className={`bg-kv-white text-kv-black shadow px-3 py-2 ${
            show3 ? "h-fit" : "h-14 overflow-hidden"
          }`}
        >
          <button onClick={() => setShow3(!show3)} className="w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center">
                <Image
                  src={Icon3}
                  width={100}
                  height={100}
                  className="w-auto h-10"
                  alt="ikon tilhørende et ledende fagmiljø"
                />
                <h4>Solid samarbeidspartner</h4>
              </div>
              {show3 ? (
                <FaArrowUp className="w-6 h-auto" />
              ) : (
                <FaArrowDown className="w-6 h-auto" />
              )}
            </div>
          </button>
          <p>
            Here comes a text about this subject, please change this before the
            page goes live it's critical and btw I need to fill the space all
            the time you have to leave the space. Just leave me alone, I know
            what to do.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={ModelImage}
          width={1000}
          height={750}
          alt="Mann i dressjakke som ser mot kamera"
        />
      </div>
    </div>
  );
}
