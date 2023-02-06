import { Header } from "@components/Header";
import Arrow from "@components/Arrow";
import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png'

export default function Courses() {
    return (
        <>
            <section className="xl:mx-auto max-w-screen-xl">
                <div className="flex">
                    <h1 className='xl:text-3xl xl:my-12 my-4 text-xl font-mabry leading-tight grow'>КУРСЫ ОБУЧЕНИЯ</h1>
                    <button className='xl:text-l xl:py-3 xl:px-7 xl:w-96 my-auto px-3 text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
                        СКАЧАТЬ КАЛЕНДАРЬ
                        <div className='xl:scale-100 scale-75'><Arrow /></div>
                    </button>
                </div>
                <div className="flex gap-6">
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow" type="search" id="instructor-search" name="instructor" placeholder="ПРЕПОДАВАТЕЛЬ"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow" type="search" id="city-search" name="city" placeholder="ГОРОД"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                    <div className="grow xl:h-16 xl:text-l xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow" type="search" id="course-search" name="course" placeholder="КУРС"></input>
                        <ArrowDown></ArrowDown>
                    </div>
                </div>
                <div className="xl:h-16 xl:text-l xl:my-10 xl:pl-10 xl:pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow" type="search" id="course-search" name="course" placeholder="ПОИСК ПО НАЗВАНИЮ"></input>
                        <Arrow></Arrow>
                    </div>
                <div className="xl:my-20 flex flex-col">
                    <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 font-mabry border-b-2 border-black">
                        <div>ДАТА</div>
                        <div>ТЕМА КУРСА/СЕМИНАРА</div>
                        <div>ПРЕПОДАВАТЕЛЬ</div>
                        <div className="col-span-2">СТОИМОСТЬ</div>
                    </div>
                    <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 items-center font-proxima">
                        <div>
                            <p>15 января</p>
                            <p className="font-light">10:00 — 15:00</p>
                        </div>
                        <div>Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть</div>
                        <div className="flex items-center font-light">
                            <div className="overflow-hidden rounded-full mr-4"><Image src={InstructorsImage} alt='Instructors Image'></Image></div>
                            Романенко Диана
                        </div>
                        <div className="font-light">8000₽</div>
                        <div className="font-mabry text-center"><button>ЗАПИСАТЬСЯ</button></div>
                    </div>
                    
                </div>
                
                
            </section>
        </>
    )
  }