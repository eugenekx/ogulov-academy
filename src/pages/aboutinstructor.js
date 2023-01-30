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
            <Header></Header>
            <section className="xl:mx-auto max-w-screen-xl xl:mt-24 xl:mb-52">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <h1 className='xl:text-3xl xl:my-12 my-4 text-l font-mabry leading-tight'>ОГУЛОВ АЛЕКСАНДР ТИМОФЕЕВИЧ</h1>
                        <p className="text-m font-proxima mb-14">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                        <h2 className="text-l font-mabry mb-6">НАГРАДЫ И ДОСТИЖЕНИЯ:</h2>
                        <ul className="text-m font-proxima">
                            <li>Лауреат премии им. Я. Г. Гальперина «За вклад в развитие народной медицины в России».</li>
                            <li>Янтарная звезда Магистра народной медицины.</li>
                            <li>Медаль «За практический вклад в укрепление здоровья нации».</li>
                            <li>Медаль Пауля Эрлиха «Во благо здоровья».</li>
                            <li>Почетная медаль «За успехи в народной медицине».</li>
                        </ul>
                    </div>
                    <Image src={InstructorsImageBanner} alt='Огулов Александр Тимофеевич'></Image>
                </div>
            </section>
            <section className="xl:mx-auto max-w-screen-xl">
                <h1 className='xl:text-3xl xl:my-12 mb-10 text-l font-mabry leading-tight text-center'>ПРОГРАММЫ ПРЕПОДАВАТЕЛЯ</h1>
                <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
                <button className='xl:my-24 flex items-center text-l font-mabry mx-auto'>ПОКАЗАТЬ ЕЩЕ
                    <div className='xl:scale-100 scale-50'><ArrowDown /></div>
                </button>
            </section>
            
            
        </>
    )
  }