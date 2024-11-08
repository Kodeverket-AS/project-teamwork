// Description:
// This is a component that is used to wrap the content of each section
// use it as the main parent component of each section component

type TSectionComponentProps = {
  children: React.ReactNode;
  orange: boolean;
};

const SectionComponent = ({
  children,
  orange,
}: TSectionComponentProps) => {
  //   const [isOrange, setIsOrange] = useState(orange);
  return (
    <section
      className={`w-screen ${
        orange ? "bg-teamwork-secondary-orange" : "bg-kv-white"
      }`}>
      <div className="container mx-auto py-14 px-6 sm:px-0">
        {children}
      </div>
    </section>
  );
};

export default SectionComponent;
