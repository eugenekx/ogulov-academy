import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png';
import ArrowDown from "./ArrowDown";
import Arrow from "./Arrow";

export const PopUp = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-l flex flex-col w-232 px-28 py-21 rounded-3xl">
            <h1 className="font-mabry text-3xl mb-14 text-left">
                ЗАПИСЬ НА КУРС
            </h1>
            <div className="mb-14">
                <h3 className="font-mabry mb-4">
                    НАЗВАНИЕ
                </h3>
                <p className="font-proxima">
                    Фитнес-формирующий массаж лица
                </p>
            </div>
            <div className="mb-14">
                <h3 className="font-mabry mb-4">
                    УРОВЕНЬ ПОДГОТОВКИ
                </h3>
                <p className="font-proxima">
                    Начальный
                </p>
            </div>
            <div className="mb-14">
                <h3 className="font-mabry mb-4">
                    ПРЕПОДАВАТЕЛИ
                </h3>
                <div className="flex items-center font-mabry text-sm">
                    <div className="w-10 overflow-hidden rounded-full mr-2">
                        <Image
                        src={InstructorsImage}
                        alt='Instructors Image'/>
                    </div>
                    РОМАНЕНКО Д. В.
                </div>
            </div>
            <form>
                <div className="mb-14">
                    <h3 className="font-mabry mb-4">
                        ГОРОД
                    </h3>
                    <div className="grow xl:h-16 xl:text-xl xl:px-10 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow"
                        type='search'
                        id="city"
                        name="city"
                        placeholder="ГОРОД"
                        />
                    </div>
                </div>
                <div className="mb-14">
                    <h3 className="font-mabry mb-4">
                        ДАТА
                    </h3>
                    <div className="grow xl:h-16 xl:text-xl xl:px-10 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow"
                        type='date'
                        id="date"
                        name="date"
                        placeholder="3 ФЕВРАЛЯ, 16:00 — 18:00"
                        />
                        <ArrowDown />
                    </div>
                </div>
            </form>
            <div className="mb-16">
                <h3 className="font-mabry mb-4">
                    СТОИМОСТЬ ОБУЧЕНИЯ
                </h3>
                <p className="font-proxima">
                    16000 ₽
                </p>
            </div>
            <button type='submit'
            className='xl:text-xl xl:py-3 xl:px-7 xl:w-72 ml-auto mr-0 px-3 text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
                К ОПЛАТЕ
                <div className='xl:scale-100 scale-75'>
                    <Arrow />
                </div>
            </button>
        </div>
    </div>
  )
}
