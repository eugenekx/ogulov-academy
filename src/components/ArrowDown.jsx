const ArrowDown = (props) => {
  return (
    <div className={props.rotation === 180 ? "rotate-180 xl:w-12 xl:h-12 lg:w-8 lg:h-8 w-6 h-6" : "xl:w-12 xl:h-12 lg:w-8 lg:h-8 w-6 h-6"}>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path stroke="#000" strokeWidth="2" d="M24 9L24 38"></path>
      <path
        stroke="#000"
        strokeWidth="2"
        d="M33 28v0c-4.8 1.09-8.403 5.114-9 10v0M15 28v0c4.8 1.09 8.403 5.114 9 10v0"
      ></path>
    </svg>
    </div>
    
  );
}

export default ArrowDown;