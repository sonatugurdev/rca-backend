export const HamburgerMenuIcon = (props) => {
  const width = props.width ? props.width : "32";
  const height = props.height ? props.height : "32";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.666 22.667h18.667M6.666 16h18.667M6.666 9.333h18.667"
      ></path>
    </svg>
  );
};
