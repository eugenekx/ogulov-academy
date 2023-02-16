import Image from "next/image";
import CourseCardImage from "../public/images/course-card-image.png";
import InstructorsImage from "../public/images/grid-instructor-image.png";
import Link from "next/link";

export const CourseCard = () => {
	return (
		<Link 
		href='/course-about'
		className="max-w-[437px] min-w-[288px] mx-auto flex flex-wrap rounded-xl shadow-xl relative overflow-hidden">
			<div className="mb-10">
				<Image src={CourseCardImage} alt="Course image" />
			</div>
			<div className="mx-10 mb-10">
				<h2 className="text-md font-mabry mb-6 leading-tight uppercase">
					Оздоровительный, косметологический и медицинский гуаша
				</h2>
				<p className="text-s font-proxima mb-6 font-light">
					Слово «Гуаша» состоит из двух иероглифов древнекитайского
					языка. Дословно они переводятся как «Гуа-скрести,
					выскребать» и «Ша-болезнь, застой». В Традиционной Китайской
					Медицине существуют три методик Гуаша: оздоровительная,
					косметологическая и медицинская. Все эти методики имеют
					несколько общих моментов, везде для проведения процедуры
					используется специальные комбинации масел и инструменты в
					виде скребков, которые могут быть из различных видов
					материала, но намного больше различий в проведении самой
					лечебной процедуры.
				</p>
				<div className="grid grid-cols-2 gap-y-2 gap-x-8 items-center text-s font-proxima">
					<div>Преподаватель</div>
					<div>Уровень подготовки</div>
					<div className="flex items-center font-mabry uppercase">
						<div className="w-10 overflow-hidden rounded-full mr-2">
							<Image
								src={InstructorsImage}
								alt="Instructors Image"
							></Image>
						</div>
						Романенко Д. В.
					</div>
					<div className="flex items-center font-mabry uppercase">
						Начальный
					</div>
				</div>
			</div>
		</Link>
	);
};
