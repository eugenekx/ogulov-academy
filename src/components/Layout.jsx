import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

function openMenuTween() {
	const body = document.querySelector("body");
	body.style.overflow = "hidden";
	// gsap.fromTo(
	// 	"[data-animation='menu']",
	// 	{ y: -400, opacity: 0 },
	// 	{ y: 0, opacity: 1, duration: 0.2 }
	// );

	gsap.fromTo(
		"[data-animation='menu']",
		{ background: "linear-gradient(180deg, white 0%, transparent 1%)" },
		{
			background: "linear-gradient(180deg, white 0%, white 100%)",
			ease: "expo.inOut",
			duration: 0.25,
		}
	);

	gsap.fromTo(
		"[data-animation='menu-link']",
		{ yPercent: -50, opacity: 0 },
		{
			yPercent: 0,
			opacity: 1,
			stagger: 0.025,
			delay: 0.1,
			ease: "expo.inOut",
		}
	);

	gsap.to("#burger-svg path:nth-child(1)", {
		rotation: -45,
		y: -6,
		transformOrigin: "center center",
		duration: 0.5,
		ease: "expo.inOut",
	});
	gsap.to("#burger-svg path:nth-child(2)", {
		rotation: 45,
		y: 5,
		transformOrigin: "center center",
		duration: 0.5,
		ease: "expo.inOut",
	});
}

function closeMenuTween({ onComplete }) {
	const body = document.querySelector("body");
	body.style.overflow = "visible";
	gsap.fromTo(
		"[data-animation='menu']",
		{ opacity: 1 },
		{
			opacity: 0,
			ease: "expo.inOut",
			onComplete,
		}
	);
	gsap.to("#burger-svg path:nth-child(1)", {
		rotation: 0,
		y: 0,
		transformOrigin: "center center",
		duration: 0.5,
		ease: "expo.inOut",
	});
	gsap.to("#burger-svg path:nth-child(2)", {
		rotation: 0,
		y: 0,
		transformOrigin: "center center",
		duration: 0.5,
		ease: "expo.inOut",
	});
}

export const Menu = ({ toggleMenu, ...props }) => {
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

	const profileItems = [
		{
			name: "Вход",
			link: "/login",
		},
		{
			name: "Регистрация",
			link: "/register",
		},
		{
			name: "Изменить профиль",
			link: "/profile",
		},
		{
			name: "Мои курсы",
			link: "/my-courses",
		},
	];

	return (
		<div
			data-animation="menu"
			className="xl:hidden w-full h-full fixed top-0 z-20 pt-32 pl-4 flex flex-col gap-2 items-start bg-white font-mabry text-xl uppercase"
		>
			<div
				data-animation="menu-link"
				className="text-s xl:text-m mt-8 mb-2 uppercase"
			>
				Меню
			</div>
			{menuItems.map((menuItems, i) => (
				<Link
					data-animation="menu-link"
					onClick={toggleMenu}
					key={i}
					href={menuItems.link}
				>
					{menuItems.name}
				</Link>
			))}
			<div
				data-animation="menu-link"
				className="text-s xl:text-m mt-8 mb-2 uppercase"
			>
				Личный кабинет
			</div>
			{profileItems.map((menuItems, i) => (
				<Link
					data-animation="menu-link"
					onClick={toggleMenu}
					key={i}
					href={menuItems.link}
				>
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
