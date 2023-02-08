import Link from 'next/link'
import Logo from './logo';
import LinkArrow from './LinkArrow';

export const Footer = () => {

	return (
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
           <div className='xl:max-w-screen-xl lg:max-w-screen-lg mx-4 text-s xl:text-m font-mabry border-black border rounded-3xl px-4 lg:px-12 py-8 my-14'>
            <div className='flex flex-col gap-6 text-m mb-4 lg:flex-row lg:gap-12 xl:text-l'>	
                <div className="grow">
                    <div className='xl:w-21 w-12'><Link href='/'><Logo /></Link></div>
                    
                </div>
                <div>
                    <div className="text-s xl:text-m mb-4 uppercase">Ссылки</div>
                    <Link className='flex items-center uppercase' href='/'>Клиника<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center uppercase' href='/courses'>Академия<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center uppercase' href='/instructors'>Магазин<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center uppercase' href='/contacts'>Академия-онлайн<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                </div>
                <div>
                    <div className="text-s xl:text-m mb-4 uppercase">Соц. сети</div>
                    <Link className='flex items-center uppercase' href='/'>Instagram<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center uppercase' href='/courses'>Facebook<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                    <Link className='flex items-center uppercase' href='/instructors'>Vk<div className='mt-1 ml-2'><LinkArrow /></div></Link>
                </div>	
            </div>
            <div className='uppercase'>
                ООО «Огулов центр», 2022
            </div>
            <Link href='/'>Пользовательское соглашение</Link>
        </div> 
        </div>
        
	);
};