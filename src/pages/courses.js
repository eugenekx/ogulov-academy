import { Header } from "@components/Header";
import Arrow from "@components/Arrow";
import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png'
import RoubleSymbol from "@components/RoubleSymbol";
import Link from "next/link";

export default function Courses() {
    return (
        <>
            <div className="xl:mx-auto max-w-screen-xl xl:mt-28 mt-20">
                <div className="flex">
                    <h1 className='xl:text-3xl xl:my-12 my-4 text-xl font-mabry leading-tight grow uppercase'>Курсы обучения</h1>
                    <button className='xl:text-l xl:py-3 xl:px-7 xl:w-96 my-auto px-3 text-md flex justify-between items-center font-mabry bg-yellow rounded-full uppercase'>
                        Скачать календарь
                        <div className='xl:scale-100 scale-75'><Arrow /></div>
                    </button>
                </div>
                <div className="flex gap-6">
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase" type="search" id="instructor-search" name="instructor" placeholder="Преподаватель"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase" type="search" id="city-search" name="city" placeholder="Город"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase" type="search" id="course-search" name="course" placeholder="Курс"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                </div>
                <div className="xl:h-16 xl:text-l xl:my-10 xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase" type="search" id="course-search" name="course" placeholder="Поиск по названию"></input>
                        <Arrow></Arrow>
                    </div>
                <div className="xl:my-20 flex flex-col">
                    <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 font-mabry border-b-2 border-black uppercase">
                        <div>Дата</div>
                        <div>Тема курса/семинара</div>
                        <div>Преподаватель</div>
                        <div className="col-span-2">Стоимость</div>
                    </div>
                    <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 items-center font-proxima">
                        <div>
                            <p>15 января</p>
                            <p className="font-light">10:00 — 15:00</p>
                        </div>
                        <Link href='/course-about'>Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть</Link>
                        <Link href='/aboutinstructor' className="flex items-center font-light">
                            <div className="overflow-hidden rounded-full mr-4"><Image src={InstructorsImage} alt='Instructors Image'></Image></div>
                            Романенко Диана
                        </Link>
                        <div className="font-light flex items-center">
                            8000
                            <div>
                                <RoubleSymbol />
                            </div>
                        </div>
                        <div className="font-mabry text-center uppercase"><Link href='/course-about'>Записаться</Link></div>
                    </div> 
                </div>
            </div>
        </>
    )
  }