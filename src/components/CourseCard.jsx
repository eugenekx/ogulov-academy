import Image from "next/image";
import CourseCardImage from '../public/images/course-card-image.png';
import InstructorsImage from '../public/images/grid-instructor-image.png';

export const CourseCard = () => {
  return (
    <div className="w-full flex flex-wrap rounded-xl shadow-xl relative overflow-hidden">
        <div className="mb-10"><Image src={CourseCardImage} alt='Course image' /></div>
        <div className="mx-10 mb-10">
            <h2 className="text-m font-mabry mb-6 leading-tight">ОЗДОРОВИТЕЛЬНЫЙ, КОСМЕТОЛОГИЧЕСКИЙ И МЕДИЦИНСКИЙ ГУАША</h2>
            <p className="text-s font-proxima mb-6">Слово «Гуаша» состоит из двух иероглифов древнекитайского языка.
             Дословно они переводятся как «Гуа-скрести, выскребать» и «Ша-болезнь, застой». В Традиционной Китайской Медицине
             существуют три методик Гуаша: оздоровительная, косметологическая и медицинская. Все эти методики имеют несколько
             общих моментов, везде для проведения процедуры используется специальные комбинации масел и инструменты в виде скребков,
             которые могут быть из различных видов материала, но намного больше различий в проведении самой лечебной процедуры.</p>
            <div className="grid grid-cols-2 gap-y-2 items-center text-xs font-proxima">
                <div>
                    Преподаватель
                </div>
                <div>
                    Уровень подготовки
                </div>
                <div className="flex items-center font-mabry">
                    <div className="w-10 overflow-hidden rounded-full mr-2"><Image src={InstructorsImage} alt='Instructors Image'></Image></div>
                    РОМАНЕНКО Д. В.
                </div>
                <div className="flex items-center font-mabry">
                    НАЧАЛЬНЫЙ
                </div>
            </div>
        </div>
    </div>
  )
}