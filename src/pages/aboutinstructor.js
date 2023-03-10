import ArrowDown from "@components/ArrowDown";
import Image from "next/image";
import InstructorsImageBanner from '../public/images/Instructors-image-main.png';
import { InstructorsCard } from "@components/InstructorsCard";
import { CourseCard } from "@components/CourseCard";

export default function Aboutinstructor() {
    return (
        <>
            <div className="xl:mx-auto xl:max-w-screen-xl lg:max-w-screen-lg px-4 mx-auto xl:my-56 lg:my-40 my-32">
                <div className="flex lg:flex-row flex-col-reverse items-center">
                    <div className="lg:w-1/2 lg:my-0 my-10">
                        <h1 className='xl:text-3xl lg:text-2xl lg:mb-12 mb-4 text-xl font-mabry leading-tight uppercase'>Огулов Александр Тимофеевич</h1>
                        <p className="text-md font-proxima font-light mb-14">
                        Президент Профессиональной ассоциации специалистов висцеральных практик. Доктор народной медицины, профессор,
                         действительный член международной Европейской Академии Естественных наук (Ганновер. Германия),
                         член президиума народных целителей России. Основоположник и исследователь направления - висцеральная практика
                         - массаж живота - массаж внутренних органов через переднюю стенку живота. Профессиональное начало деятельности
                          в области висцеральной практики с 1985 года.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                        src={InstructorsImageBanner}
                        alt='Огулов Александр Тимофеевич'
                        />
                    </div>
                </div>
            </div>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto px-4 xl:my-56 lg:my-40 my-32">
                <h1 className='xl:text-3xl lg-text-2xl xl:mb-12 mb-10 text-xl font-mabry leading-tight text-center uppercase'>Награды и достижения:</h1>
                    <ul className="text-md font-proxima font-light mx-auto list-disc list-inside">
                        <li>Лауреат премии им. Я. Г. Гальперина «За вклад в развитие народной медицины в России».</li>
                        <li>Янтарная звезда Магистра народной медицины.</li>
                        <li>Медаль «За практический вклад в укрепление здоровья нации».</li>
                        <li>Медаль Пауля Эрлиха «Во благо здоровья».</li>
                        <li>Почетная медаль «За успехи в народной медицине».</li>
                    </ul>
            </div>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg flex flex-col mx-auto xl:my-56 lg:my-40 my-32 px-4">
                <h1 className='xl:text-3xl lg:text-2xl xl:mb-12 mb-10 text-xl font-mabry leading-tight text-center uppercase'>Программы преподавателя</h1>
                <div className="xl:grid-cols-3 lg:grid-cols-2 grid grid-cols-1 gap-6 mx-auto mb-16">
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
                <button className='xl:my-24 xl:text-xl lg:text-l my-10 text-m flex items-center font-mabry mx-auto uppercase'>Показать еще
                    <ArrowDown />
                </button>
            </div>
        </>
    )
  }