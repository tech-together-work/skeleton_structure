const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 9L12 15L6 9"
        stroke="currentColor" //Add this "currentColor" wherever you see any color in svg to inherit the color from his parent.
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
