import { Header } from "@components/Header";
import Arrow from "@components/Arrow";
import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImageBanner from '../public/images/Instructors-image-main.png';
import Link from 'next/link';
import { InstructorsCard } from "@components/InstructorsCard";

export default function Instructors() {
    return (
        <>
            <Header></Header>
            <section className="xl:mx-auto max-w-screen-xl xl:my-14">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <h1 className='xl:text-3xl xl:my-12 my-4 text-l font-mabry leading-tight grow'>ОГУЛОВ АЛЕКСАНДР ТИМОФЕЕВИЧ</h1>
                        <p className="text-m font-proxima mb-6">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                        <p className="text-m mb-10">Программы: <Link href='/courses' className="underline">Висцеральная практика</Link></p>
                        <button className='xl:text-l xl:py-3 xl:px-7 xl:w-72 my-auto px-3 text-m flex justify-between items-center font-mabry bg-yellow rounded-full'>
                            ПОДРОБНЕЕ
                            <div className='xl:scale-100 scale-75'><Arrow /></div>
                        </button>
                    </div>
                    <Image src={InstructorsImageBanner} alt='Огулов Александр Тимофеевич'></Image>
                    
                </div>
            </section>
            <section className="xl:mx-auto max-w-screen-xl">
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-16">
                    <InstructorsCard />
                    <InstructorsCard />
                </div>
                <button className='xl:my-24 flex items-center text-l font-mabry mx-auto'>ПОКАЗАТЬ ЕЩЕ
                    <div className='xl:scale-100 scale-50'><ArrowDown /></div>
                </button>
            </section>
            
            
        </>
    )
  }