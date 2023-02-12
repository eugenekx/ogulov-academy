import Link from "next/link";
import Logo from "./Logo";
import Burger from "./Burger";
import ProfileIcon from "./profileIcon";
import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export  const Dropdown = ({ openDropdownTween }) => {
	const dropdownItems = [
		{
			name: 'Вход',
			link: '/login',
		},
		{
			name: 'Регистрация',
			link: '/register',
		},
		{
			name: 'Изменить профиль',
			link: '/profile',
		},
		{
			name: 'Выйти',
			link: '/',
		},
	];

    useEffect(() => {
		openDropdownTween();
	}, []);

	return (
		<div data-animation='dropdown' className="absolute top-full right-0 font-mabry text-md text-right uppercase grid grid-flow-row min-w-max rounded-b-2xl shadow-lg overflow-hidden">
			{dropdownItems.map((dropdownItems, i) => (
				<Link className="hover:bg-black hover:text-white bg-white px-4 py-2 transition-colors" key={i} href={dropdownItems.link}>
					{dropdownItems.name}
				</Link>
			))}
		</div>
	)
}

export const Header = ({ isMenuOpen, toggleMenu, ...props }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		console.log(isDropdownOpen);
	}, [isDropdownOpen]);

	function openDropdown () {
		setIsDropdownOpen(true)
	};

	function closeDropdown () {
		closeDropdownTween(() => setIsDropdownOpen(false));
	}

	function closeDropdownTween (onComplete) {
        gsap.to("[data-animation='dropdown']", { y: 80, opacity: 0, onComplete, duration: .3});
    };

	function openDropdownTween () {
        gsap.fromTo("[data-animation='dropdown']", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: .3 });
    };

	return (
		<div onMouseLeave={closeDropdown} className="fixed w-full top-0 mx-auto text-md font-mabry z-40 bg-white h-20 xl:h-28">
			<div className="xl:max-w-screen-xl lg:max-w-screen-lg lg:mx-auto px-4 flex lg:gap-8 h-full justify-between items-center relative">
				<div className="xl:w-16 w-12">
					<Logo />
				</div>
				<Link className="lg:hidden text-md uppercase" href="/">
					Академия Огулова
				</Link>
				<div className="lg:hidden">
					<Burger onClick={toggleMenu} />
				</div>
				<div className="hidden grow lg:flex justify-center gap-16 items-center uppercase">
					<Link href="/">Главная</Link>
					<Link href="/courses">Курсы</Link>
					<Link href="/instructors">Преподаватели</Link>
					<Link href="/contacts">Контакты</Link>
				</div>
				<a
					className="hidden lg:block lg:text-m text-xl py-2 px-5 border-2 border-black rounded-full"
					href="tel:+79035706688"
				>
					+7 903 570-66-88
				</a>
				<div onMouseEnter={openDropdown} className="hidden lg:block">
					<ProfileIcon />
				</div>
				{isDropdownOpen && <Dropdown openDropdownTween={openDropdownTween} />}
			</div>
			
		</div>
	);
};
