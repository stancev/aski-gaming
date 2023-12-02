interface Props {
  title: string;
  subtitle: string;
}

const Headings: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="w-full max-w-[1424px] mb-10">
      <div className="text-gray-700 text-5xl font-semibold font-['Poppins'] leading-[60.24px] tracking-wide">
        {title}
      </div>
      <div className="text-gray-700 text-2xl font-medium font-['Poppins'] leading-[30.12px] tracking-wide">
        {subtitle}
      </div>
    </section>
  );
};

export default Headings;
