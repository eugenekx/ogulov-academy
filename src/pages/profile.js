import ArrowDown from "@components/ArrowDown";
import ActionBtn from "@components/ActionBtn";

export default function Profile () {
  return (
    <div className='xl:max-w-4xl lg:max-w-4xl max-w-md lg:px-28 px-4 mx-auto xl:mt-40 mt-32 lg:mb-56 mb-36'>
        <h1 className='xl:text-3xl lg:text-2xl text-l uppercase my-12 font-mabry text-center'>
            Изменить профиль
        </h1>
        <form>
            <div className="xl:mb-14 lg:mb-8 mb-6">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase lg:text-m text-sm">
                    ФИО
                </h3>
                <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
                    type='text'
                    id="name"
                    name="name"
                    placeholder="Иванов Иван Иванович"
                    />
                </div>
            </div>
            <div className="xl:mb-14 lg:mb-8 mb-6">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase lg:text-m text-sm">
                    Телефон
                </h3>
                <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
                    type='tel'
                    id="phone"
                    name="phone"
                    pattern='[7][0-9]{10}'
                    placeholder="+7(926)123-45-67"
                    />
                </div>
            </div>
            <div className="xl:mb-14 lg:mb-8 mb-6">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase lg:text-m text-sm">
                    Эл. почта
                </h3>
                <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
                    type='email'
                    id="email"
                    name="email"
                    placeholder="academy@ogulov.org"
                    />
                </div>
            </div>
            <div className="xl:mb-14 lg:mb-8 mb-6">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase lg:text-m text-sm">
                    Адрес
                </h3>
                <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
                    type='text'
                    id="address"
                    name="address"
                    placeholder="123103, Москва, Маршала Жукова, 78"
                    />
                </div>
            </div>
            <div className="xl:mb-14 lg:mb-8 mb-6">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase lg:text-m text-sm">
                    Образование
                </h3>
                <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none overflow-hidden"
                    type='text'
                    id="education"
                    name="education"
                    placeholder="Высшее медицинское"
                    />
                    <ArrowDown />
                </div>
            </div>
            <div className="float-right">
                <ActionBtn>Сохранить</ActionBtn>
            </div>
        </form>
    </div>
  )
}
