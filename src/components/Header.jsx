import Link from 'next/link'
import Image from 'next/image'
import Icon from '../public/images/ogulov-logo.png'

export const Header = () => {
	return (
		<div className='flex justify-between items-center max-w-screen-xl my-10 mx-auto text-m font-mabry'>
			<Image src={Icon}></Image>
			<Link href='/'>ГЛАВНАЯ</Link>
			<Link href='/courses'>КУРСЫ</Link>
			<Link href='/instructors'>ПРЕПОДАВАТЕЛИ</Link>
			<Link href='/contacts'>КОНТАКТЫ</Link>
			<a className='text-l py-3 px-7 border-2 border-black rounded-full' href="tel:+79035706688">+7 903 570-66-88</a>
		</div>
	);
};
