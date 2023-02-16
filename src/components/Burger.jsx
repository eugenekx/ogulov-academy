function Burger({ onClick }) {
	return (
		<svg
			width={32}
			height={32}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			id="burger-svg"
			className="cursor-pointer lg:hidden"
			onClick={onClick}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 21.3333C4 20.597 4.59695 20 5.33333 20L26.6667 20C27.403 20 28 20.597 28 21.3333C28 22.0697 27.403 22.6667 26.6667 22.6667L5.33333 22.6667C4.59695 22.6667 4 22.0697 4 21.3333Z"
				fill="#161620"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 10.6667C4 9.93033 4.59695 9.33337 5.33333 9.33337L26.6667 9.33337C27.403 9.33337 28 9.93033 28 10.6667C28 11.4031 27.403 12 26.6667 12L5.33333 12C4.59695 12 4 11.4031 4 10.6667Z"
				fill="#161620"
			/>
		</svg>
	);
}

export default Burger;
