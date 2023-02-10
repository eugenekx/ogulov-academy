import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

function openMenuTween() {
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
	gsap.fromTo("[data-animation='menu']", { y: -400, opacity: 0 }, { y: 0, opacity: 1, duration: .2});
	gsap.to("[data-animation='firstLine']", { y: 5, duration: .2});
	gsap.to("[data-animation='secondLine']", { y: -5, duration: .2});
	gsap.to("[data-animation='firstLine']", { rotate: 45, y: -4, x: .5, delay: .4, duration: .2});
	gsap.to("[data-animation='secondLine']", { rotate: -45, y: 4, x: -.5, delay: .4, duration: .2});
}

function closeMenuTween({ onComplete }) {
	const body = document.querySelector('body');
	body.style.overflow = 'visible';
	gsap.to("[data-animation='menu']", { y: -400, opacity: 0, onComplete, duration: .2 });
	gsap.to("[data-animation='firstLine']", { rotate: 0, y: 0, x: 0, duration: .2});
	gsap.to("[data-animation='secondLine']", { rotate: 0, y: 0, x: 0, duration: .2});
	gsap.to("[data-animation='firstLine']", { y: 0, delay: .4, duration: .2});
	gsap.to("[data-animation='secondLine']", { y: 0, delay: .4, duration: .2});
}

export const Menu = ({toggleMenu, ...props}) => {
	useLayoutEffect(() => {
		openMenuTween();
	}, []);

	const menuItems = [
		{
			name: "Главная",
			link: "/",
		},
		{
			name: "Курсы",
			link: "/courses",
		},
		{
			name: "Преподаватели",
			link: "/instructors",
		},
		{
			name: "Контакты",
			link: "/contacts",
		},
	];

	return (
		<div
			data-animation="menu"
			className="xl:hidden w-full h-full fixed top-0 z-20 pt-36 pl-4 flex flex-col gap-16 items-start bg-white font-mabry text-xl uppercase"
		>
			{menuItems.map((menuItems, i) => (
				<Link onClick={toggleMenu} key={i} href={menuItems.link}>
					{menuItems.name}
				</Link>
			))}
		</div>
	);
};

export const Layout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		isMenuOpen
			? closeMenuTween({
					onComplete: () => setIsMenuOpen(false),
			  })
			: setIsMenuOpen(true);
	}

	return (
		<div>
			<Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			{isMenuOpen && <Menu toggleMenu={toggleMenu} />}
			{children}
			<Footer />
		</div>
	);
};
