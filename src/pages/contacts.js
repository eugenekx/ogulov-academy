import Link from "next/link";
import Arrow from "@components/Arrow";
import Image from "next/image";
import PathImage from '/public/images/pathFirst.jpg';
import ActionBtn from "@components/ActionBtn";

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
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4">
                <h1 className="font-mabry text-3xl xl:mb-16 mb-10 text-center uppercase">
                    Контакты
                </h1>
                <div className="gap-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
                    <div
                    style={wrapperDivStyle}
                    className="w-full xl:h-120 lg:h-96 h-80 overflow-hidden relative rounded-xl lg:order-2">
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
                        <div className="text-lg my-11">
                            <h3 className="font-mabry uppercase mb-2">
                                Адрес
                            </h3>
                            <p className="font-proxima font-light mb-2">
                                123103, Москва, проспект Маршала Жукова, 78 к2
                                <span> </span>
                                <Link legacyBehavior
                                href="https://www.youtube.com/embed/CzcQ0DBuNdU">
                                    <a target="_blank"
                                    className="text-yellow underline">
                                        Нажмите, чтобы посмотреть видео как добраться
                                    </a>
                                </Link>
                            </p>
                            <p className="font-proxima font-light mb-2">
                                123103, Москва, проспект Маршала Жукова, 78 к4
                                <span> </span>
                                <Link legacyBehavior
                                href="https://www.youtube.com/embed/Mpj8AjKceJg">
                                    <a target="_blank"
                                    className="text-yellow underline">
                                        Нажмите, чтобы посмотреть видео как добраться
                                    </a>
                                </Link>
                            </p>
                        </div>
                        <div className="text-lg my-11">
                            <h3 className="font-mabry uppercase mb-2">
                                Телефон
                            </h3>
                            <a
                            href="tel:+79035706688"
                            className="font-proxima font-light mb-2">
                                +7 (903) 570-66-88
                            </a>
                        </div>
                        <div className="text-lg my-11">
                            <h3 className="font-mabry uppercase mb-2">
                                График работы
                            </h3>
                            <p className="font-proxima font-light mb-2">
                                Понедельник-пятница:с 9:30 до 20:00
                            </p>
                            <p className="font-proxima font-light mb-2">
                                Суббота: с 9:30 до 18:00
                            </p>
                        </div>
                        <div className="font-mabry text-lg">
                            <h3 className="font-mabry uppercase mb-2">
                                Эл. почта
                            </h3>
                            <a
                            href="mailto:academy@ogulov.org"
                            className="font-proxima font-light mb-2">
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
                            <h2 className="xl:text-2xl text-xl font-mabry mb-12 uppercase lg:order-1">
                                На общественном транспорте
                            </h2>
                            <div className="text-lg mb-8">
                                <h3 className="font-mabry uppercase mb-2">
                                    От станции метро «Щукинская»
                                </h3>
                                <ol className="font-proxima font-light list-decimal list-inside">
                                    <li>Первый вагон из центра, из стеклянных дверей метро направо, выход из метро №2.</li>
                                    <li>Трамвай 28 и 31. Ехать до конечной остановки «Пр-т Маршала Жукова». Ехать примерно 20 минут.</li>
                                    <li>Выйдя из автобуса, идите налево 250 метров, мимо ДК «Берендей». Справа будет Огулов Центр.</li>
                                    <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                                </ol>
                            </div>
                            <div className="text-lg mb-8">
                                <h3 className="font-mabry uppercase mb-2">
                                    От станции метро «Полежаевская»
                                </h3>
                                <ol className="font-proxima font-light list-decimal list-inside">
                                    <li>Первый вагон из центра, выход из метро №2. Из дверей направо и налево.</li>
                                    <li>Автобусы Т65, Т86,Т21, маршрутка 390  до остановки «ул. Живописная, храм Живоначальной Троицы». Ехать примерно 20 минут.</li>
                                    <li>Выйдя из транспорта, идёте в сторону его движения. Через 250 метров справа будет Огулов Центр.</li>
                                    <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                                </ol>
                            </div>
                            <div className="text-lg mb-8">
                                <h3 className="font-mabry uppercase mb-2">
                                    От станции МЦК «Хорошёво»
                                </h3>
                                <ol className="font-proxima font-light list-decimal list-inside">
                                    <li>Выход из метро №2. Необходимо спуститься к шоссе. Перейти на светофоре. </li>
                                    <li>Автобусы Т65, Т86, и т21, маршрутка 597. Ехать до остановки «ул. Живописная, Храм Живоначальной Троицы». Ехать примерно 20 минут.</li>
                                    <li>Выйдя из транспорта, идти в сторону его движения. Через 250 метров справа будет Огулов Центр.</li>
                                    <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                                </ol>
                            </div>
                            <div className="text-lg">
                                <h3 className="font-mabry uppercase mb-2">
                                    От станции метро «Народное Ополчение»
                                </h3>
                                <ol className="font-proxima font-light list-decimal list-inside">
                                    <li>Выход из метро №2.</li>
                                    <li>Автобусы Т65, Т86 и Т21, маршрутка 597. Ехать до остановки «ул. Живописная, храм Живоначальной троицы». Ехать примерно 10 минут.</li>
                                    <li>Выйдя из транспорта, идти в сторону его движения. Через 250 метров справа будет Огулов Центр.</li>
                                    <li>Для входа во двор на домофоне наберите кнопку «Охрана 1». Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="lg:order-3">
                            <h2 className="xl:text-2xl text-xl font-mabry my-12 uppercase">
                                На автомобиле
                            </h2>
                            <div className="text-lg mb-12">
                                <ol className="font-proxima font-light list-decimal list-inside mb-12">
                                    <li>Удобный заезд с дублера проспекта Маршала Жукова.</li>
                                    <li>Далее поворот направо на набережную Новикова прибоя.</li>
                                    <li>сразу же еще один поворот направо.</li>
                                    <li>Можно проехать правее шлагбаума вдоль дома и припарковаться там.</li>
                                </ol>
                                <Link
                                legacyBehavior
                                href="https://30488.redirect.appmetrica.yandex.com/show_point_on_map?appmetrica_tracking_id=745803332332869252&amp;lang=ru&amp;lat=55.780081&amp;lon=37.450153">
                                    <a target="_blank">
                                        <ActionBtn
                                        withArrow={true}
                                        >
                                            Открыть в навигаторе
                                        </ActionBtn>
                                    </a>
                                </Link>
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
            </div>
        </>
	);
}