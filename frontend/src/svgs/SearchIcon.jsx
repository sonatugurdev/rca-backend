export const SearchIcon = (props) => {
  const width = props.width ? props.width : "23";
  const height = props.height ? props.height : "23";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 23 23"
    >
      <path
        fill="#000"
        d="M22.677 21.061l-4.264-4.233a10.357 10.357 0 00-1.166-14.185 10.34 10.34 0 00-14.217.389 10.356 10.356 0 006.466 17.637 10.338 10.338 0 007.32-2.242l4.229 4.233a1.15 1.15 0 001.632 0 1.15 1.15 0 000-1.599zm-12.31-2.634a8.04 8.04 0 01-7.432-4.97A8.057 8.057 0 014.68 4.683a8.043 8.043 0 0113.734 5.693 8.054 8.054 0 01-2.356 5.693 8.042 8.042 0 01-5.69 2.358z"
      ></path>
    </svg>
  );
};
