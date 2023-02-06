import Link from 'next/link'
import Logo from './logo';
import LinkArrow from './LinkArrow';

export const Footer = () => {

	return (
        <div className='max-w-screen-xl mx-auto text-m font-mabry border-black border rounded-3xl px-12 py-8 my-14'>
            <div className='flex gap-12 text-l'>	
                <div className="grow">
                    <div className='xl:w-21 w-12'><Link href='/'><Logo /></Link></div>
                    
                </div>
                <div>
                    <div className="text-m mb-4">ССЫЛКИ</div>
                    <Link className='flex items-center' href='/'>КЛИНИКА<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center' href='/courses'>АКАДЕМИЯ<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center' href='/instructors'>МАГАЗИН<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center' href='/contacts'>АКАДЕМИЯ-ОНЛАЙН<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                </div>
                <div>
                    <div className="text-m mb-4">СОЦ. СЕТИ</div>
                    <Link className='flex items-center' href='/'>INSTAGRAM<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center' href='/courses'>FACEBOOK<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center' href='/instructors'>VK<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                </div>	
            </div>
            <div>
                ООО «ОГУЛОВ ЦЕНТР», 2022
            </div>
            <Link href='/'>Пользовательское соглашение</Link>
        </div>
	);
};