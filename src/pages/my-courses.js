import Link from "next/link";

export default function myCourses () {
    return (
        <div className='xl:max-w-screen-xl lg:px-28 px-4 mx-auto lg:mt-40 mt-28 lg:mb-56 mb-36'>
            <h1 className='xl:text-3xl lg:text-2xl text-l uppercase my-12 font-mabry text-center'>
                Мои курсы
            </h1>
            <div className="xl:my-20 flex flex-col">
                <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 font-mabry border-b-2 border-black uppercase">
                    <div>
                        Дата
                    </div>
                    <div className="col-span-3">
                        Название
                    </div>
                </div>
                <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 items-center font-proxima">
                    <div>
                        <p>
                            15 января
                        </p>
                        <p className="font-light">
                            10:00 — 15:00
                        </p>
                    </div>
                    <Link className='col-span-2' href='/course-about'>
                        Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть
                    </Link>
                    <div className="font-mabry text-center uppercase">
                        <Link href='/course-about'>
                            Просмотреть
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 items-center font-proxima">
                    <div>
                        <p>
                            15 января
                        </p>
                        <p className="font-light">
                            10:00 — 15:00
                        </p>
                    </div>
                    <Link className='col-span-2' href='/course-about'>
                        Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть
                    </Link>
                    <div className="font-mabry text-center uppercase">
                        <Link href='/course-about'>
                            Просмотреть
                        </Link>
                    </div>
                </div>
                <div className="w-full xl:py-6 xl:text-md xl:my-1 grid grid-course-info gap-10 items-center font-proxima">
                    <div>
                        <p>
                            15 января
                        </p>
                        <p className="font-light">
                            10:00 — 15:00
                        </p>
                    </div>
                    <Link className='col-span-2' href='/course-about'>
                        Введение в висцеральную практику. Основы анатомии и физиологии человека. 2 часть
                    </Link>
                    <div className="font-mabry text-center uppercase">
                        <Link href='/course-about'>
                            Просмотреть
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}