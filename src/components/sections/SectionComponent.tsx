// Description:
// This is a component that is used to wrap the content of each section
// use it as the main parent component of each section component

import FadeInSection from "./FadeInSection";

type TSectionComponentProps = {
  children: React.ReactNode;
  orange: boolean;
  fade?: boolean;
};

const SectionComponent = ({
  children,
  orange,
  fade,
}: TSectionComponentProps) => {
  return (
    <section
      className={`w-screen ${
        orange ? "bg-teamwork-secondary-orange" : "bg-kv-white"
      }`}>
      <div className="container mx-auto py-14 px-6 sm:px-8 md:px-10">
        {fade ? <FadeInSection>{children}</FadeInSection> : children}
      </div>
    </section>
  );
};

export default SectionComponent;
