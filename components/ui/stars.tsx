const Stars = ({ rating }: { rating: number }) => {
  const stars = new Array(5).fill(0);
  const ratingInt = Math.floor(rating);
  const ratingDec = rating - ratingInt;

  return (
    <div className="flex items-center space-x-1">
      {stars.map((_, index) => {
        if (index < ratingInt) {
          return <FilledStar key={index} />;
        } else if (index === ratingInt && ratingDec >= 0.5) {
          return <HalfFilledStar key={index} />;
        } else {
          return <EmptyStar key={index} />;
        }
      })}
    </div>
  );
};

const FilledStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 18"
    fill="hsl(var(--primary))"
    className="h-[12px] w-[13px] md:h-[18px] md:w-[19px]"
  >
    <path
      d="M14.8412 17.4975C14.1857 17.9644 9.97996 15.0049 9.17446 14.9984C8.36896 14.9919 4.11586 17.8833 3.46804 17.406C2.82022 16.9286 4.34321 12.0255 4.10051 11.2597C3.8578 10.4938 -0.214286 7.35382 0.0407922 6.59194C0.295927 5.83005 5.44293 5.75929 6.0984 5.29241C6.75386 4.8256 8.49032 -0.0064421 9.29587 6.44851e-06C10.1013 0.00651107 11.7593 4.86586 12.4071 5.34322C13.055 5.82052 18.2002 5.97417 18.443 6.74003C18.6857 7.50589 14.5634 10.5799 14.3082 11.3418C14.0532 12.1037 15.4966 17.0306 14.8412 17.4975Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const HalfFilledStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 18"
    fill="hsl(var(--primary))"
    className="h-[12px] w-[13px] md:h-[18px] md:w-[19px]"
  >
    <defs>
      <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="52%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="52%" style={{ stopColor: 'transparent', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfStar)"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      d="M14.8412 17.4975C14.1857 17.9644 9.97996 15.0049 9.17446 14.9984C8.36896 14.9919 4.11586 17.8833 3.46804 17.406C2.82022 16.9286 4.34321 12.0255 4.10051 11.2597C3.8578 10.4938 -0.214286 7.35382 0.0407922 6.59194C0.295927 5.83005 5.44293 5.75929 6.0984 5.29241C6.75386 4.8256 8.49032 -0.0064421 9.29587 6.44851e-06C10.1013 0.00651107 11.7593 4.86586 12.4071 5.34322C13.055 5.82052 18.2002 5.97417 18.443 6.74003C18.6857 7.50589 14.5634 10.5799 14.3082 11.3418C14.0532 12.1037 15.4966 17.0306 14.8412 17.4975Z"
    ></path>
  </svg>
);

const EmptyStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 18"
    fill="none"
    className="h-[12px] w-[13px] md:h-[18px] md:w-[19px]"
  >
    <path
      d="M14.8412 17.4975C14.1857 17.9644 9.97996 15.0049 9.17446 14.9984C8.36896 14.9919 4.11586 17.8833 3.46804 17.406C2.82022 16.9286 4.34321 12.0255 4.10051 11.2597C3.8578 10.4938 -0.214286 7.35382 0.0407922 6.59194C0.295927 5.83005 5.44293 5.75929 6.0984 5.29241C6.75386 4.8256 8.49032 -0.0064421 9.29587 6.44851e-06C10.1013 0.00651107 11.7593 4.86586 12.4071 5.34322C13.055 5.82052 18.2002 5.97417 18.443 6.74003C18.6857 7.50589 14.5634 10.5799 14.3082 11.3418C14.0532 12.1037 15.4966 17.0306 14.8412 17.4975Z"
      stroke="#A05E9C"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export default Stars;
