import PlayButton from "@components/PlayButton";

export default function Contacts () {
	return (
        <section className="max-w-screen-xl mx-auto my-24 flex justify-between items-center">
            <div>
                <h1 className="font-mabry text-3xl mb-16 text-left">
                    КОНТАКТЫ
                </h1>
                <div className="text-lg my-11">
                    <h3 className="font-mabry">
                        АДРЕС
                    </h3>
                    <p className="font-proxima">
                        123103, Москва, проспект Маршала Жукова, 78 к2
                    </p>
                </div>
                <div className="text-lg my-11">
                    <h3 className="font-mabry">
                        ТЕЛЕФОН
                    </h3>
                    <p className="font-proxima">
                        +7 (903) 570-66-88
                    </p>
                    <p className="font-proxima">
                        (Многоканальный)
                    </p>
                </div>
                <div className="text-lg my-11">
                    <h3 className="font-mabry">
                        ГРАФИК РАБОТЫ
                    </h3>
                    <p className="font-proxima">
                        Понедельник-пятница:с 9:30 до 20:00
                    </p>
                    <p className="font-proxima">
                        Суббота: с 9:30 до 18:00
                    </p>
                </div>
                <div className="font-mabry text-lg">
                    <h3 className="font-mabry">
                        ЭЛ. ПОЧТА
                    </h3>
                    <p className="font-proxima">
                        agademy@ogulov.org
                    </p>
                </div>
            </div>
            <div className="w-140 h-80 relative rounded-3xl bg-gray-600">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <PlayButton />
                </div>
            </div>
        </section>
	);
}