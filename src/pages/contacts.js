import Link from "next/link";
import Arrow from "@components/Arrow";
import Image from "next/image";
import PathImage from '/public/images/pathFirst.jpg'

export default function Contacts () {

    const wrapperDivStyle = {
        position: "relative",
        overflow: "hidden"
    };

    const firstATagStyle = {
        color: "#eee",
        fontSize: "12px",
        position: "absolute",
        top: "0px"
    };

    const secondATagStyle = {
        color: "#eee",
        fontSize: "12px",
        position: "absolute",
        top: "14px"
    }

    const iFrameStyle = {
        position: "relative"
    }

	return (
        <>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
                <div
                style={wrapperDivStyle}
                className="w-full xl:h-140 lg:h-120 h-104 overflow-hidden relative rounded-xl lg:order-2">
                    <a
                    href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                    style={firstATagStyle}>
                        Москва
                    </a>
                    <a
                    href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=37.452869%2C55.779875&mode=routes&origin=jsapi_2_1_79&rtext=55.779993%2C37.450020&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1772317964&utm_medium=mapframe&utm_source=maps&z=14"
                    style={secondATagStyle}>
                        проспект Маршала Жукова, 78к2: как доехать на автомобиле, общественным транспортом или пешком – Яндекс Карты
                    </a>
                    <iframe src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=37.452869%2C55.779875&mode=routes&origin=jsapi_2_1_79&rtext=55.779993%2C37.450020&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1772317964&z=14"
                    width={'100%'}
                    height={"100%"}
                    frameborder="1"
                    allowfullscreen="true"
                    style={iFrameStyle}>
                    </iframe>
                </div>
                <div>
                    <h1 className="font-mabry text-3xl xl:mb-16 mb-10 text-left uppercase">
                        Контакты
                    </h1>
                    <div className="text-lg my-11">
                        <h3 className="font-mabry uppercase">
                            Адрес
                        </h3>
                        <p className="font-proxima font-light">
                            123103, Москва, проспект Маршала Жукова, 78 к2
                            <span> </span>
                            <Link href="https://www.youtube.com/embed/CzcQ0DBuNdU" className="text-yellow underline">Видео</Link>
                        </p>
                        <p className="font-proxima font-light">
                            123103, Москва, проспект Маршала Жукова, 78 к4
                            <span> </span>
                            <Link href="https://www.youtube.com/embed/Mpj8AjKceJg" className="text-yellow underline">Видео</Link>
                        </p>
                    </div>
                    <div className="text-lg my-11">
                        <h3 className="font-mabry uppercase">
                            Телефон
                        </h3>
                        <a
                        href="tel:+79035706688"
                        className="font-proxima font-light">
                            +7 (903) 570-66-88
                        </a>
                        <p className="font-proxima font-light">
                            (Многоканальный)
                        </p>
                    </div>
                    <div className="text-lg my-11">
                        <h3 className="font-mabry uppercase">
                            График работы
                        </h3>
                        <p className="font-proxima font-light">
                            Понедельник-пятница:с 9:30 до 20:00
                        </p>
                        <p className="font-proxima font-light">
                            Суббота: с 9:30 до 18:00
                        </p>
                    </div>
                    <div className="font-mabry text-lg">
                        <h3 className="font-mabry uppercase">
                            Эл. почта
                        </h3>
                        <a
                        href="mailto:academy@ogulov.org"
                        className="font-proxima font-light">
                            academy@ogulov.org
                        </a>
                    </div>
                </div>
            </div>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4">
                <h1 className="font-mabry text-3xl xl:mb-16 mb-10 text-center uppercase">
                    Как добраться
                </h1>
                <div className="gap-10 grid grid-cols-1 justify-center items-center">
                    <div>
                        <h2 className="xl:text-2xl text-xl font-mabry my-12 uppercase lg:order-1">
                            На общественном транспорте
                        </h2>
                        <div className="text-lg mb-8">
                            <h3 className="font-mabry uppercase mb-2">
                                От метро «Щукинская» (20-25 мин) 
                            </h3>
                            <ol className="font-proxima font-light list-decimal list-inside">
                                <li>Первый вагон из центра, из стеклянных дверей метро направо, выйти на улицу двигаться правее, к трамваям.</li>
                                <li>Трамвай № 28 или 31 – ехать до конечной остановки «Проспект Маршала Жукова».</li>
                                <li>Выйдя из автобуса, идите налево 250 метров, мимо ДК «Берендей». Справа будет Огулов Центр.</li>
                                <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                            </ol>
                        </div>
                        <div className="text-lg mb-8">
                            <h3 className="font-mabry uppercase mb-2">
                                От метро «Полежаевская» (15-20 мин) 
                            </h3>
                            <ol className="font-proxima font-light list-decimal list-inside">
                                <li>Первый вагон из центра, выход направо и налево. Указатели: на Хорошёвское шоссе.</li>
                                <li>При выходе из метро увидите остановку. Автобус Т- 21, Т-65 и Т-86. Ехать до остановки «Живописная улица. Храм Живоначальной Троицы».</li>
                                <li>Выйдя из транспорта, идёте в сторону его движения. Через 250 метров справа будет Огулов Центр.</li>
                                <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                            </ol>
                        </div>
                        <div className="text-lg">
                            <h3 className="font-mabry uppercase mb-2">
                                От метро МЦК «Хорошёво» (10-15 мин)
                            </h3>
                            <ol className="font-proxima font-light list-decimal list-inside">
                                <li>Выйти из метро, спуститься к дороге.</li>
                                <li>Перейти на противоположную сторону. Автобус Т-21, Т-65 и Т-86 или маршрутка 597. Ехать до остановки «Живописная улица. Храм Живоначальной Троицы».</li>
                                <li>Выйдя из транспорта, идти в сторону его движения. Через 250 метров справа будет Огулов Центр.</li>
                                <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                            </ol>
                        </div>
                        <div className="mt-12">
                            <div className="flex gap-12 mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg justify-around items-center">
                                <div className="hidden w-11 shrink-0 lg:flex justify-start rotate-180">
                                    <Arrow />
                                </div>
                                <div className="relative grow rounded-3xl overflow-hidden">
                                    <Image
                                        src={PathImage}
                                        alt="Клиника Огулова"
                                    />
                                </div>
                                <div className="hidden w-11 shrink-0 lg:flex justify-start">
                                    <Arrow />
                                </div>
                            </div>
                            <div className="w-full flex justify-center gap-2 pt-16">
                                <div className="w-3 h-3 border-black border-2 rounded-full"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="lg:hidden w-full flex px-4 pt-16">
                                <div className="w-14 rotate-180">
                                    <Arrow />
                                </div>
                                <div className="w-14">
                                    <Arrow />
                                </div>
                            </div>
		                </div>
                    </div>
                    <div className="lg:order-3">
                        <h2 className="xl:text-2xl text-xl font-mabry my-12 uppercase">
                            На автомобиле
                        </h2>
                        <div className="text-lg mb-8">
                            <h3 className="font-mabry uppercase mb-2">
                                От метро «Щукинская» (20-25 мин) 
                            </h3>
                            <ol className="font-proxima font-light list-decimal list-inside">
                                <li>Удобный заезд с дублера проспекта Маршала Жукова.</li>
                                <li>Далее поворот направо на набережную Новикова прибоя.</li>
                                <li>сразу же еще один поворот направо.</li>
                                <li>Можно проехать правее шлагбаума вдоль дома и припарковаться там.</li>
                            </ol>
                        </div>
                        <div className="mt-12">
                            <div className="flex gap-12 mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg justify-around items-center">
                                <div className="hidden w-11 shrink-0 lg:flex justify-start rotate-180">
                                    <Arrow />
                                </div>
                                <div className="relative grow rounded-3xl overflow-hidden">
                                    <Image
                                        src={PathImage}
                                        alt="Клиника Огулова"
                                    />
                                </div>
                                <div className="hidden w-11 shrink-0 lg:flex justify-start">
                                    <Arrow />
                                </div>
                            </div>
                            <div className="w-full flex justify-center gap-2 pt-16">
                                <div className="w-3 h-3 border-black border-2 rounded-full"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <div className="lg:hidden w-full flex px-4 pt-16">
                                <div className="w-14 rotate-180">
                                    <Arrow />
                                </div>
                                <div className="w-14">
                                    <Arrow />
                                </div>
                            </div>
		                </div>
                    </div>
                </div>
            </div>
        </>
	);
}