const Arrow = (props) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      fill="none"
      viewBox="0 0 48 48"
      >
      <circle cx="24" cy="24" r="24" fill="#fff"></circle>
      <path stroke="#000" strokeWidth="2" d="M9 24L38 24"></path>
      <path
        stroke="#000"
        strokeWidth="2"
        d="M28 15v0c1.09 4.8 5.114 8.403 10 9v0M28 33v0c1.09-4.8 5.114-8.403 10-9v0"
      ></path>
      </svg>
    );
  }
  
  export default Arrow;