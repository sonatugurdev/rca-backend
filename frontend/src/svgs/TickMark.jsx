export const TickMark
 = (props) => {
  const width = props.width ? props.width : "25";
  const height = props.height ? props.height : "26";
  return (  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 26"
    >
      <rect
        width="24.668"
        height="24.668"
        x="0.049"
        y="0.573"
        fill="#000"
        rx="12.334"
      ></rect>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.156"
        d="M9.234 12.907l2.249 2.249 4.496-4.497"
      ></path>
    </svg>
  );
};
