export const PlusIcon
 = (props) => {
  const width = props.width ? props.width : "25";
  const height = props.height ? props.height : "26";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 31 31"
    >
      <circle
        cx="15.065"
        cy="15.065"
        r="14.774"
        fill="#000"
        stroke="#fff"
        strokeWidth="0.581"
      ></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.163"
        d="M9.273 15.061h11.589M15.065 9.27v11.588"
      ></path>
    </svg>
  );
};
