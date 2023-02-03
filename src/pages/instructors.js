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
            <section className="xl:mx-auto max-w-screen-xl xl:my-14">
                <div className="flex xl:flex-row flex-col-reverse items-center">
                    <div className="xl:w-1/2 xl:mx-0 xl:my-0 mx-4 my-10">
                        <h1 className='xl:text-3xl xl:my-12 my-4 text-xl font-mabry leading-tight grow'>ОГУЛОВ АЛЕКСАНДР ТИМОФЕЕВИЧ</h1>
                        <p className="text-md font-proxima mb-6">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                        <p className="text-md mb-10">Программы: <Link href='/courses' className="underline">Висцеральная практика</Link></p>
                        <button className='xl:text-l xl:py-3 xl:px-7 xl:w-72 w-52 pl-6 pr-4 my-auto text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
                            ПОДРОБНЕЕ
                            <div className='xl:scale-100 scale-75'><Arrow /></div>
                        </button>
                    </div>
                    <div className="mx-4">
                        <Image
                            src={InstructorsImageBanner}
                            alt='Огулов Александр Тимофеевич'
                        />
                    </div>
                    
                </div>
            </section>
            <section className="xl:mx-auto mx-4 max-w-screen-xl my-10">
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-16">
                    <InstructorsCard />
                    <InstructorsCard />
                </div>
                <button className='xl:my-24 xl:text-xl my-10 text-m flex items-center font-mabry mx-auto'>ПОКАЗАТЬ ЕЩЕ
                    <div className='xl:scale-100 scale-75'><ArrowDown /></div>
                </button>
            </section>
            
            
        </>
    )
  }