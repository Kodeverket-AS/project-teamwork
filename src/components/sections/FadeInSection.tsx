import React, { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve once it’s in view
        }
      },
      { threshold: 0.2 } // Trigger when X% of the element visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-in-out w-full ${
        isVisible
          ? "opacity-100 skew-x-0 translate-x-0"
          : "opacity-0 skew-x-1 translate-x-6"
      }`}>
      {children}
    </div>
  );
};

export default FadeInSection;
