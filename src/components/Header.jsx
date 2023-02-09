import Link from "next/link";
import Logo from "./logo";
import Burger from "./Burger";

export const Header = ({ isMenuOpen, toggleMenu, ...props }) => {
	return (
		<div className="fixed w-full top-0 mx-auto text-md font-mabry z-40 bg-white h-20 xl:h-28">
			<div className="xl:max-w-screen-xl lg:max-w-screen-lg lg:mx-auto px-4 flex h-full justify-between items-center">
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
			</div>
		</div>
	);
};
