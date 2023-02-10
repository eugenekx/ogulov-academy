import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImageBanner from '../public/images/Instructors-image-main.png';
import Link from 'next/link';
import { InstructorsCard } from "@components/InstructorsCard";
import ActionBtn from "@components/ActionBtn";

export default function Instructors() {
    return (
        <>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4 xl:mb-14 xl:mt-40 mt-32">
                <div className="flex lg:flex-row flex-col-reverse gap-4 items-center mx-auto">
                    <div className="lg:w-1/2 xl:mx-0 xl:my-0 my-10">
                        <h1 className='xl:text-3xl lg:text-2xl xl:my-12 my-4 text-xl font-mabry leading-tight grow uppercase'>
                            Огулов Александр Тимофеевич
                        </h1>
                        <p className="text-md font-proxima mb-6">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                        <p className="text-md mb-10">Программы: <Link href='/course-about' className="underline">Висцеральная практика</Link></p>
                        <Link href='/aboutinstructor'>
                            <ActionBtn withArrow={true}>
                                Подробнее
                            </ActionBtn>
                        </Link>
                    </div>
                    <div className="mt-20 lg:mt-0">
                        <Image
                            src={InstructorsImageBanner}
                            alt='Огулов Александр Тимофеевич'
                        />
                    </div>
                    
                </div>
            </div>
            <div className="mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg my-10">
                <div className='xl:my-28 xl:max-w-screen-xl lg:max-w-screen-lg max-w-[587px] font-proxima mx-auto'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <InstructorsCard />
                        <InstructorsCard />
                    </div>
                </div>
                <button className='xl:my-24 xl:text-xl my-10 text-m flex items-center font-mabry mx-auto uppercase'>Показать еще
                    <div className='xl:scale-100 scale-75'><ArrowDown /></div>
                </button>
            </div>
        </>
    )
  }