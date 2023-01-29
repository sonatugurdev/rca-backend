export const CloseButton
 = (props) => {
  const width = props.width ? props.width : "25";
  const height = props.height ? props.height : "26";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        stroke="#000"
        strokeWidth="3.442"
        d="M14.608 2.041L1.184 14.777"
      ></path>
      <path
        stroke="#000"
        strokeWidth="3.442"
        d="M0 -1.721L18.504 -1.721"
        transform="scale(1 -1) rotate(-43.493 .212 -3.417)"
      ></path>
    </svg>
  );
};
