import Link from "next/link";

export const About = () => {
	return (
		<div className="xl:text-xl xl:my-14 mx-auto xl:max-w-screen-xl max-w-screen-md text-s font-proxima px-4 pt-8">
			<h1 className="xl:text-3xl mb-14 text-xl font-mabry leading-tight text-center uppercase">
				О центре
			</h1>
			<div className="mask font-light">
				Огулов Центр – это учебно-оздоровительный центр, который был
				создан 19 октября 1995 года Огуловым Александром Тимофеевичем.
				До 2019 года Центр носил название Учебно-оздоровительный центр
				“Предтеча”. Основное направление деятельности Центра -
				висцеральный массаж. В работе Центра используются не имеющие
				аналогов в мире авторские методики А.Т. Огулова, которые успешно
				применяются более 20 лет. Также более 20 лет существует
				«Профессиональная ассоциация специалистов висцеральных практик»,
				состоящая из выпускников нашего Учебного Центра. Все выпускники
				программ нашего Учебного Центра имеют возможность вступить в это
				сообщество близких по духу и мышлению специалистов, получить
				доступ к закрытым чатам и материалам, специальным предложениям и
				скидкам. Огулов Центр проводит не только обучение по различным
				методикам оздоровления, но также оказывает оздоровительные
				услуги по адресам проспект Маршала Жукова 78к2 и проспект
				Маршала Жукова 78к4.
			</div>
			<div className="xl:my-24 xl:text-xl my-10 text-m flex items-center font-mabry mx-auto uppercase underline underline-offset-4 justify-center">
				<Link href="/" className="">
					Подробнее
				</Link>
			</div>
		</div>
	);
};
