import { Header } from "@components/Header";
import Arrow from "@components/Arrow";
import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImageBanner from '../public/images/Instructors-image-main.png';
import Link from 'next/link';
import { InstructorsCard } from "@components/InstructorsCard";
import { CourseCard } from "@components/CourseCard";

export default function Aboutinstructor() {
    return (
        <>
            <section className="xl:mx-auto xl:max-w-screen-xl lg:max-w-screen-lg px-4 mx-auto xl:mt-28 mt-20 mb-10">
                <div className="flex lg:flex-row flex-col-reverse items-center">
                    <div className="lg:w-1/2 lg:mx-0 lg:my-0 mx-4 my-10">
                        <h1 className='xl:text-3xl lg:text-2xl lg:my-12 my-4 text-xl font-mabry leading-tight'>ОГУЛОВ АЛЕКСАНДР ТИМОФЕЕВИЧ</h1>
                        <p className="text-md font-proxima mb-14">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                    </div>
                    <div className="xl:mx-0 mx-4 lg:w-1/2">
                        <Image
                        src={InstructorsImageBanner}
                        alt='Огулов Александр Тимофеевич'
                        />
                    </div>
                </div>
            </section>
            <section className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4 xl:my-24 my-10">
                <h1 className='xl:text-3xl lg-text-2xl xl:my-12 mb-10 text-xl font-mabry leading-tight text-center'>НАГРАДЫ И ДОСТИЖЕНИЯ:</h1>
                    <ul className="text-md font-proxima mx-auto list-disc list-inside">
                        <li>Лауреат премии им. Я. Г. Гальперина «За вклад в развитие народной медицины в России».</li>
                        <li>Янтарная звезда Магистра народной медицины.</li>
                        <li>Медаль «За практический вклад в укрепление здоровья нации».</li>
                        <li>Медаль Пауля Эрлиха «Во благо здоровья».</li>
                        <li>Почетная медаль «За успехи в народной медицине».</li>
                    </ul>
            </section>
            <section className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4">
                <h1 className='xl:text-3xl lg:text-2xl xl:my-12 mb-10 text-xl font-mabry leading-tight text-center'>ПРОГРАММЫ ПРЕПОДАВАТЕЛЯ</h1>
                <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 flex flex-wrap gap-6 mx-auto">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
                <button className='xl:my-24 xl:text-xl lg:text-l my-10 text-m flex items-center font-mabry mx-auto'>ПОКАЗАТЬ ЕЩЕ
                    <div className='xl:scale-100 scale-75'><ArrowDown /></div>
                </button>
            </section>
            
            
        </>
    )
  }