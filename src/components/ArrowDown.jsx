function ArrowDown(props) {
  return (
    <div className={props.rotation === 180 ? "rotate-180" : ""}>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle
        cx="24"
        cy="24"
        r="24"
        fill="#fff"
        transform="rotate(90 24 24)"
      ></circle>
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