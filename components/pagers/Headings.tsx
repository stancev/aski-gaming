interface Props {
  title: string;
  subtitle: string;
}

const Headings: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="mb-10 w-full max-w-[1424px]">
      <h1 className="text-2xl font-semibold leading-[30.12px] tracking-wide text-heading xl:text-5xl xl:leading-[60.24px]">
        {title}
      </h1>
      <h2 className="text-lg font-medium leading-[22.59px] tracking-wide text-heading xl:text-2xl xl:leading-[30.12px]">
        {subtitle}
      </h2>
    </section>
  );
};

export default Headings;
