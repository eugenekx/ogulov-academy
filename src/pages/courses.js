import Arrow from "@components/Arrow";
import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png';
import Link from "next/link";
import ActionBtn from "@components/ActionBtn";
import { useMediaQuery } from "react-responsive";

export default function Courses() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const isMidScreen = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1279px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 1023px)' });
    
    return (
        <>
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg px-4 xl:mt-40 lg:mt-32 mt-24">
                <div className="grid lg:grid-flow-col grid-flow-row items-center">
                    <h1 className='xl:text-3xl lg:text-2xl text-xl lg:my-12 my-4 font-mabry leading-tight grow uppercase'>Курсы обучения</h1>
                    <div className="lg:float-right lg:ml-auto lg:mr-0">
                        <ActionBtn withArrow={true}>Скачать календарь</ActionBtn>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-rows-1 xl:gap-6 gap-4 w-full mt-10 mb-4">
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none overflow-hidden"
                        type='search'
                        id="instructor-search"
                        name="instructor-search"
                        placeholder="Преподаватель"
                        />
                        <ArrowDown />
                    </div>
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none lg:w-52 xl:w-full overflow-hidden"
                        type='search'
                        id="city-search"
                        name="city-search"
                        placeholder="Город"
                        />
                        <ArrowDown />
                    </div>                    
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none lg:w-52 xl:w-full overflow-hidden"
                        type='search'
                        id="course-search"
                        name="course-search"
                        placeholder="Курс"
                        />
                        <ArrowDown />
                    </div>
                </div>
                <div className="grow xl:h-16 lg:h-12 h-10 xl:text-l xl:my-10 lg:my-8 mt-4 pl-6 pr-4 flex justify-between items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none"
                        type="search"
                        id="course-search"
                        name="course"
                        placeholder="Поиск по названию"></input>
                        <div className="xl:w-12 xl:h-12 lg:w-8 lg:h-8 w-6 h-6">
                            <Arrow />
                        </div>
                    </div>
                { isBigScreen &&
                    <div className="flex flex-col my-24">
                        <div className="w-full py-6 xl:text-md grid grid-course-info xl:gap-10 lg:gap-4 font-mabry border-b-2 border-black uppercase">
                            <div>Дата</div>
                            <div>Тема курса/семинара</div>
                            <div>Преподаватель</div>
                            <div className="col-span-2">Стоимость</div>
                        </div>
                        <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info xl:gap-10 lg:gap-4 items-center font-proxima">
                            <div>
                                <p>15 января</p>
                                <p className="font-light">10:00 — 15:00</p>
                            </div>
                            <Link href='/course-about'>Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть</Link>
                            <Link href='/aboutinstructor' className="flex items-center font-light">
                                <div className="overflow-hidden rounded-full mr-4"><Image src={InstructorsImage} alt='Instructors Image'></Image></div>
                                Романенко Диана
                            </Link>
                            <p className="font-light">
                                8000 руб.
                            </p>
                            <div className="font-mabry text-center uppercase"><Link href='/course-about'>Записаться</Link></div>
                        </div> 
                    </div>
                }
                { isMidScreen &&
                    <div className="my-24 flex flex-col gap-4">
                        <div className="w-full py-6 xl:text-md grid grid-course-info-lg xl:gap-10 lg:gap-4 font-mabry border-b-2 border-black uppercase">
                            <div>Дата</div>
                            <div>Тема курса/семинара</div>
                            <div>Преподаватель</div>
                            <div className="col-span-2">Стоимость</div>
                        </div>
                        <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info-lg xl:gap-10 lg:gap-4 items-center font-proxima">
                            <div>
                                <p>15 января</p>
                                <p className="font-light">10:00 — 15:00</p>
                            </div>
                            <Link href='/course-about'>Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть</Link>
                            <Link href='/aboutinstructor' className="flex items-center font-light">
                                <div className="overflow-hidden rounded-full mr-4"><Image src={InstructorsImage} alt='Instructors Image'></Image></div>
                                Романенко Диана
                            </Link>
                            <p className="font-light">
                                8000 руб.
                            </p>
                            <div className="font-mabry text-center uppercase"><Link href='/course-about'>Записаться</Link></div>
                        </div> 
                    </div>
                }
                { isMobileScreen &&
                    <Link href='/course-about' className="my-20 grid grid-col grid-cols-2 shadow-xl rounded-3xl font-mabry px-4 py-8 gap-4">
                        <div className="uppercase">Дата</div>
                        <div>
                            <p>15 января</p>
                            <p className="font-light">10:00 — 15:00</p>
                        </div>
                        <div className="uppercase">Тема курса/семинара</div>
                        <div>Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть</div>
                        <div className="uppercase">Преподаватель</div>
                        <div className="font-light">
                            Романенко Диана
                        </div>
                        <div className="uppercase">Стоимость</div>
                        <p className="font-light">
                            8000 руб.
                        </p>
                    </Link>
                }
            </div>
        </>
    )
  }