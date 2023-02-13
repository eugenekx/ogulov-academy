import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function MyCourses() {
	const isMidScreen = useMediaQuery({ query: "(min-width: 1024px)" });
	const isMobileScreen = useMediaQuery({ query: "(max-width: 1023px)" });

	return (
		<div className="xl:max-w-screen-xl px-4 mx-auto lg:mt-40 mt-28 lg:mb-56 mb-36">
			<h1 className="xl:text-3xl lg:text-2xl text-l uppercase my-12 font-mabry text-center">
				Мои курсы
			</h1>
			{isMidScreen && (
				<div className="my-20 xl:max-w-screen-xl lg:max-w-screen-lg xl:px-40 lg:px-20  mx-auto grid grid-cols-1">
					<div className="py-6 text-md my-1 grid grid-my-courses-lg justify-center gap-20 font-mabry border-b-2 border-black uppercase">
						<div>Дата</div>
						<div className="col-span-2">Название</div>
					</div>
					<div className="py-6 text-md my-1 grid grid-my-courses-lg justify-center gap-20 items-center font-proxima">
						<div>
							<p>15 января</p>
							<p className="font-light">10:00 — 15:00</p>
						</div>
						<Link href="/course-about">
							Введение в висцеральную практику. Основы анатомии и
							физиологии человека. 2 часть
						</Link>
						<div className="font-mabry text-center uppercase">
							<Link href="/course-about">Просмотреть</Link>
						</div>
					</div>
					<div className="py-6 text-md my-1 grid grid-my-courses-lg justify-center gap-20 items-center font-proxima">
						<div>
							<p>15 января</p>
							<p className="font-light">10:00 — 15:00</p>
						</div>
						<Link href="/course-about">
							Введение в висцеральную практику. Основы анатомии и
							физиологии человека. 2 часть
						</Link>
						<div className="font-mabry text-center uppercase">
							<Link href="/course-about">Просмотреть</Link>
						</div>
					</div>
					<div className="py-6 text-md my-1 grid grid-my-courses-lg justify-center gap-20 items-center font-proxima">
						<div>
							<p>15 января</p>
							<p className="font-light">10:00 — 15:00</p>
						</div>
						<Link href="/course-about">
							Введение в висцеральную практику. Основы анатомии и
							физиологии человека. 2 часть
						</Link>
						<div className="font-mabry text-center uppercase">
							<Link href="/course-about">Просмотреть</Link>
						</div>
					</div>
				</div>
			)}
			{isMobileScreen && (
				<Link
					href="/course-about"
					className="my-20 grid grid-col grid-cols-2 shadow-xl rounded-3xl font-mabry px-4 py-8 gap-4"
				>
					<div>Дата</div>
					<div>
						<p>15 января</p>
						<p className="font-light">10:00 — 15:00</p>
					</div>
					<div>Тема курса/семинара</div>
					<div>
						Введение в висцеральную практику. Основы анатомии и
						физиологии человека. 2 часть
					</div>
					<div>Преподаватель</div>
					<div className="flex items-center font-light">
						Романенко Диана
					</div>
					<div>Стоимость</div>
					<p className="font-light">8000 руб.</p>
				</Link>
			)}
		</div>
	);
}
