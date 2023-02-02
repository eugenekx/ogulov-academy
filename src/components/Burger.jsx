function Burger({onClick}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        onClick={onClick}
        fill="none"
        viewBox="0 0 32 32"
      >
        <path fill="transparent" d="M0 0H32V32H0z"></path>
        <path data-animation='firstLine' fill="#000" d="M3 10H29V12H3z"></path>
        <path data-animation='secondLine' fill="#000" d="M3 20H29V22H3z"></path>
      </svg>
    );
  }
  
  export default Burger;