interface Props {
  title: string;
  subtitle: string;
}

const Headings: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="w-full max-w-[1424px] mb-10">
      <h1 className="text-heading text-5xl font-semibold font-['Poppins'] leading-[60.24px] tracking-wide">
        {title}
      </h1>
      <h2 className="text-heading text-2xl font-medium font-['Poppins'] leading-[30.12px] tracking-wide">
        {subtitle}
      </h2>
    </section>
  );
};

export default Headings;
