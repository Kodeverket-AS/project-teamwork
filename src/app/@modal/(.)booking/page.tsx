"use client"

import { useEffect } from "react";
import { ModalContainer } from "@/components/modal/Container";

export default function ModalPage () {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head!.appendChild(script);
    return () => {
      head!.removeChild(script);
    }
  }, []); 

  return (
    <ModalContainer>
      <div
        className="calendly-inline-widget"
        data-resize="true"
        data-url="https://calendly.com/teamwork-as/30min?preview_source=et_card&month=2024-08&date=2024-08-22"
        style={{ minHeight: "650px", width: "clamp(400px, 100svw, 1000px)" }}
      ></div>
    </ModalContainer>
  );
};