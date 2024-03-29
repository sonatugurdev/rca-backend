export const Biodegradable
 = (props) => {
  const width = props.width ? props.width : "25";
  const height = props.height ? props.height : "26";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 138 138"
    >
      <circle
        cx="68.669"
        cy="68.846"
        r="67.716"
        fill="#fff"
        stroke="#B4D1D3"
        strokeWidth="1.907"
      ></circle>
      <path
        fill="#313131"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="3.155"
        d="M71.938 59.062a1.578 1.578 0 002.907-.173l3.62-10.385c4-.921 8.043-1.634 12.115-2.136a127.895 127.895 0 01-2.2 12.756c-.905 3.986-2.105 8.243-3.666 12.095-1.569 3.872-3.46 7.224-5.695 9.495-8.005 8.134-17.606 7.275-22.758 3.98a1.578 1.578 0 00-1.975.222L47 92.322l-.02.02c-.105.11-.231.199-.368.258a1.1 1.1 0 01-1.236-.244 1.22 1.22 0 01-.246-1.319l-1.454-.615 1.454.615c.061-.146.15-.276.26-.384l.02-.02 7.287-7.405c.51-.518.6-1.318.217-1.937-3.253-5.252-4.093-15.022 3.882-23.157a33.689 33.689 0 0111.428-6.674l3.715 7.602z"
      ></path>
    </svg>
  );
};
