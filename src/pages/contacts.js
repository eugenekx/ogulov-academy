import PlayButton from "@components/PlayButton";

export default function Contacts () {
	return (
        <>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
                <div className="w-full pt-[56.25%] overflow-hidden relative rounded-3xl lg:order-last">
                    <iframe
                    className='absolute top-0 bottom-0 left-0 right-0 h-full rounded-3xl'
                    width={'100%'}
                    src="https://www.youtube.com/embed/SKaPzMBWQnI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
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
                        </p>
                    </div>
                    <div className="text-lg my-11">
                        <h3 className="font-mabry uppercase">
                            Телефон
                        </h3>
                        <p className="font-proxima font-light">
                            +7 (903) 570-66-88
                        </p>
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
                        <p className="font-proxima font-light">
                            academy@ogulov.org
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4">
                <h1 className="font-mabry text-3xl xl:mb-16 mb-10 text-left uppercase">
                    Как добраться
                </h1>
                <div className="gap-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
                    <div className="lg:order-2">
                        <div className="w-full pt-[56.25%] overflow-hidden relative rounded-3xl">
                            <iframe
                            className='absolute top-0 bottom-0 left-0 right-0 h-full rounded-3xl'
                            width={'100%'}
                            src="https://www.youtube.com/embed/CzcQ0DBuNdU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                            </iframe>
                        </div>
                        <h3 className="font-mabry uppercase mt-4">
                            Как добраться к Проспект Маршала Жукова 78, корп. 2.
                        </h3>
                    </div>
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
                                <li>Для входа во двор на домофоне наберите кнопку "Охрана 1". Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
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
                                <li>Для входа во двор на домофоне наберите кнопку "Охрана 1". Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
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
                                <li>Для входа во двор на домофоне наберите кнопку "Охрана 1". Идите прямо во двор пока не увидите отдельно стоящее четырехэтажное здание. Ориентир – детский садик «Абракадабра», слева будет наш подъезд. Поднимитесь на лифте на третий этаж.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="lg:order-4">
                        <div className="w-full pt-[56.25%] overflow-hidden relative rounded-3xl">
                            <iframe
                            className='absolute top-0 bottom-0 left-0 right-0 h-full rounded-3xl'
                            width={'100%'}
                            src="https://www.youtube.com/embed/Mpj8AjKceJg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                            </iframe>
                        </div>
                        <h3 className="font-mabry uppercase mt-4">
                            Как добраться к Проспект Маршала Жукова 78, корп. 4.
                        </h3>
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
                    </div>
                </div>
            </div>
        </>
	);
}