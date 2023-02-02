import Link from 'next/link'
import Logo from './logo';
import Burger from './Burger';

export const Header = ({isMenuOpen, toggleMenu, ...props}) => {

	return (
		<div className='sticky xl:py-6 top-0 py-4 mx-auto text-md font-mabry z-40 bg-white'>
			<div className='xl:max-w-screen-xl xl:mx-auto mx-4 flex justify-between items-center'>
				<div className='xl:w-16 w-12'><Logo /></div>
				<Link className='xl:hidden text-md' href='/'>АКАДЕМИЯ ОГУЛОВА</Link>
				<div className='xl:hidden'><Burger onClick={toggleMenu} /></div>
				<div className='hidden grow xl:flex justify-center gap-16 items-center'>
					<Link href='/'>ГЛАВНАЯ</Link>
					<Link href='/courses'>КУРСЫ</Link>
					<Link href='/instructors'>ПРЕПОДАВАТЕЛИ</Link>
					<Link href='/contacts'>КОНТАКТЫ</Link>
				</div>
				<a className='hidden xl:block text-xl py-3 px-7 border-2 border-black rounded-full' href="tel:+79035706688">+7 903 570-66-88</a>
			</div>
			
		</div>
	);
};
