import PlayButton from "@components/PlayButton";

export default function Contacts () {
	return (
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto xl:my-56 lg:my-40 my-32 px-4 gap-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className='order-last lg:order-first'>
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
                        agademy@ogulov.org
                    </p>
                </div>
            </div>
            <div className="w-full pt-[56.25%] overflow-hidden relative rounded-3xl">
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
        </div>
	);
}