import Link from 'next/link'
import Image from 'next/image'
import Icon from '../public/images/ogulov-logo.png'
import Hamburger from './Hamburger';

export const Header = () => {
	return (
		<div className='sticky xl:max-w-screen-xl xl:py-10 top-0 flex justify-between items-center w-full py-4 mx-auto text-m font-mabry z-10 bg-white'>
			<Image className='w-8 xl:w-21 xl:ml-0 ml-4' src={Icon}></Image>
			<Link className='xl:hidden text-m' href='/'>АКАДЕМИЯ ОГУЛОВА</Link>
			<div className='xl:hidden xl:mr-0 mr-4'><Hamburger /></div>
			<div className='hidden grow xl:flex justify-around items-center'>
				<Link href='/'>ГЛАВНАЯ</Link>
				<Link href='/courses'>КУРСЫ</Link>
				<Link href='/instructors'>ПРЕПОДАВАТЕЛИ</Link>
				<Link href='/contacts'>КОНТАКТЫ</Link>
			</div>
			<a className='hidden xl:block text-l py-3 px-7 border-2 border-black rounded-full' href="tel:+79035706688">+7 903 570-66-88</a>
		</div>
	);
};
