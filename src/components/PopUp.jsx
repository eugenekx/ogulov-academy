import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png';
import CrossIcon from "./CrossIcon";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import ActionBtn from "./ActionBtn";

export const PopUp = ({closePopUp, isPopUpOpen, setIsPopUpOpen, ...props}) => {

    function openPopUpTween () {
        gsap.fromTo("[data-animation='pop-up']", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .3 });
    };

    useEffect(() => {
		openPopUpTween();
	}, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 overflow-y-scroll">
        <div className="w-full px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-md flex flex-col lg:w-183 w-104 p-14 rounded-3xl">
                <div className='flex items-baseline'>
                    <h1 className="grow font-mabry xl:text-2xl lg:text-xl text-l lg:mb-14 mb-10 text-left uppercase">
                        Запись на курс
                    </h1>
                    <div>
                        <CrossIcon />
                    </div>
                </div>
                
                <div className="mb-8">
                    <h3 className="font-mabry mb-2 uppercase">
                        Название
                    </h3>
                    <p className="font-proxima">
                        Фитнес-формирующий массаж лица
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="font-mabry mb-2 uppercase">
                        Уровень подготовки
                    </h3>
                    <p className="font-proxima">
                        Начальный
                    </p>
                </div>
                <div className="mb-8">
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
                    <div className="mb-8">
                        <h3 className="font-mabry mb-2 uppercase">
                            Город
                        </h3>
                        <div className="xl:h-14 h-10 text-md pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                            <input className="placeholder-black grow uppercase"
                            type='search'
                            id="city"
                            name="city"
                            placeholder="Москва"
                            />
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-mabry mb-2 uppercase">
                            Дата
                        </h3>
                        <div className="xl:h-14 h-10 text-md pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                            <input className="placeholder-black grow uppercase"
                            type='date'
                            id="date"
                            name="date"
                            placeholder="3 Февраля, 16:00 — 18:00"
                            />
                        </div>
                    </div>
                </form>
                <div className="mb-8">
                    <h3 className="font-mabry mb-2 uppercase">
                        Стоимость обучения
                    </h3>
                    <p className="font-proxima">
                        16000 ₽
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
