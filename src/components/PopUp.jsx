import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png';
import CrossIcon from "./CrossIcon";
import { useEffect, useState } from "react";
import ActionBtn from "./ActionBtn";

export const PopUp = ({openPopUpTween, closePopUpTween, isPopUpOpen, ...props}) => {

    useEffect(() => {
		openPopUpTween();
	}, [isPopUpOpen]);

  return (
    <div data-animation='pop-up' className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 overflow-y-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-183 px-4 lg:px-0 mx-auto">
            <div className=" bg-white text-md flex flex-col w-full xl:px-14 xl:py-14 lg:px-12 lg:py-12 px-8 py-10 rounded-3xl">
                <div className='flex items-start'>
                    <h1 className="grow font-mabry xl:text-2xl lg:text-xl text-l lg:mb-10 mb-8 text-left uppercase">
                        Запись на курс
                    </h1>
                    <div onClick={closePopUpTween} className="xl:w-12 xl:h-12 lg:w-10 lg:h-10 w-6 h-6">
                        <CrossIcon />
                    </div>
                </div>
                
                <div className="mb-6">
                    <h3 className="font-mabry mb-2 uppercase">
                        Название
                    </h3>
                    <p className="font-proxima">
                        Фитнес-формирующий массаж лица
                    </p>
                </div>
                <div className="mb-6">
                    <h3 className="font-mabry mb-2 uppercase">
                        Уровень подготовки
                    </h3>
                    <p className="font-proxima">
                        Начальный
                    </p>
                </div>
                <div className="mb-6">
                    <h3 className="font-mabry mb-2 uppercase">
                        Преподаватели
                    </h3>
                    <div className="flex items-center font-mabry text-sm uppercase">
                        <div className="w-10 overflow-hidden rounded-full mr-2">
                            <Image
                            src={InstructorsImage}
                            alt='Instructors Image'/>
                        </div>
                        Романенко Д. В.
                    </div>
                </div>
                <form>
                    <div className="mb-6">
                        <h3 className="font-mabry mb-2 uppercase">
                            Город
                        </h3>
                        <div className="xl:h-14 h-10 text-md px-6 flex items-center font-mabry border-2 border-black rounded-full">
                            <input className="placeholder-black w-full uppercase focus:outline-none"
                            type='search'
                            id="city"
                            name="city"
                            placeholder="Москва"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-mabry mb-2 uppercase">
                            Дата
                        </h3>
                        <div className="xl:h-14 h-10 text-md px-6 flex items-center font-mabry border-2 border-black rounded-full">
                            <input className="placeholder-black grow uppercase focus:outline-none"
                            type='date'
                            id="date"
                            name="date"
                            placeholder="3 Февраля, 16:00 — 18:00"
                            />
                        </div>
                    </div>
                </form>
                <div className="mb-6">
                    <h3 className="font-mabry mb-2 uppercase">
                        Стоимость обучения
                    </h3>
                    <p className="font-proxima">
                        16000 руб.
                    </p>
                </div>
                <div className="float-right ml-auto mr-0">
                    <ActionBtn withArrow={true}>К оплате</ActionBtn>
                </div>
            </div>
        </div>
        
    </div>
  )
}
