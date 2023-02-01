import Link from "next/link";
import Logo from "./logo";
import Hamburger from "./Hamburger";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

function openMenuTween() {
	gsap.fromTo("[data-animation='menu']", { scale: 0 }, { scale: 1 });
}

function closeMenuTween({ onComplete }) {
	gsap.fromTo(
		"[data-animation='menu']",
		{ scale: 1 },
		{ scale: 0, onComplete }
	);
}

export const Menu = () => {
	useLayoutEffect(() => {
		openMenuTween();
	}, []);

	return (
		<div data-animation="menu" className="h-36">
			Hello
		</div>
	);
};

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		const menu = document.getElementById("menu");
		if (menu.classList.contains("hidden") == true) {
			menu.classList.remove("hidden");
			menu.classList.add("flex");
		} else {
			menu.classList.remove("flex");
			menu.classList.add("hidden");
		}
	};

	return (
		<>
			{isMenuOpen && <Menu />}
			<div className="sticky xl:max-w-screen-xl xl:py-6 top-0 flex justify-between items-center w-full py-4 xl:mx-auto mx-4 text-m font-mabry z-20 bg-white">
				<Logo width={64} height={64} />
				<Link className="xl:hidden text-m" href="/">
					АКАДЕМИЯ ОГУЛОВА
				</Link>
				<div className="xl:hidden xl:mr-0 mr-4">
					<Hamburger
						onClick={() =>
							isMenuOpen
								? closeMenuTween({
										onComplete: () => setIsMenuOpen(false),
								  })
								: setIsMenuOpen(true)
						}
					/>
				</div>
				<div
					id="menu"
					className="hidden h-full w-full xl:h-min xl:w-min fixed top-20 left-1/2 -translate-x-1/2 xl:translate-x-0 bg-white xl:bg-transparent xl:static grow xl:flex flex-col xl:flex-row justify-center gap-16 items-center"
				>
					<Link href="/">ГЛАВНАЯ</Link>
					<Link href="/courses">КУРСЫ</Link>
					<Link href="/instructors">ПРЕПОДАВАТЕЛИ</Link>
					<Link href="/contacts">КОНТАКТЫ</Link>
				</div>
				<a
					className="hidden xl:block text-l py-3 px-7 border-2 border-black rounded-full"
					href="tel:+79035706688"
				>
					+7 903 570-66-88
				</a>
			</div>
		</>
	);
};
