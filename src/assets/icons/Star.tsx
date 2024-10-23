const Star: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
    >
      <path
        d="M47 24.0127C30.224 21.342 25.9703 15.289 23.5855 -4.18375e-07C21.1048 16.4257 15.2374 20.9355 4.25954e-07 24.0127C17.2592 26.4808 21.451 32.3047 23.5855 47C25.506 31.4077 31.2645 26.9604 47 24.0127Z"
        fill="#FF5521"
      />
    </svg>
  );
};

export default Star;

interface Props {
  className?: string;
}
