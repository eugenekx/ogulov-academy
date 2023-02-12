import Image from "next/image";
import InstructorsImage from '../public/images/grid-instructor-image.png';
import ArrowDown from "./ArrowDown";
import Arrow from "./Arrow";
import CrossIcon from "./CrossIcon";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const PopUp = (openPopUp, isPopUpOpen,setIsPopUpOpen, ...props) => {

    function openPopUpTween () {
        gsap.fromTo("[data-animation='pop-up']", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .3 });
    };

    function closePopUpTween (onComplete) {
        gsap.fromTo("[data-animation='pop-up']", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0, onComplete, duration: .3 });
      };

    function closePopUp ({closePopUpTween}) {
        closePopUpTween(() => setIsPopUpOpen(false))
      };

    useEffect(() => {
		openPopUpTween();
	}, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white lg:text-l text-m flex flex-col w-232 px-28 py-21 rounded-3xl">
            <div className='flex items-baseline'>
                <h1 className="grow font-mabry xl:text-3xl lg:text-2xl text-xl lg:mb-14 mb-10 text-left uppercase">
                    Запись на курс
                </h1>
                <div onClick={closePopUp}>
                    <CrossIcon />
                </div>
            </div>
            
            <div className="xl:mb-14 lg:mb-8">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
                    Название
                </h3>
                <p className="font-proxima">
                    Фитнес-формирующий массаж лица
                </p>
            </div>
            <div className="xl:mb-14 lg:mb-8">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
                    Уровень подготовки
                </h3>
                <p className="font-proxima">
                    Начальный
                </p>
            </div>
            <div className="xl:mb-14 lg:mb-8">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
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
                <div className="xl:mb-14 lg:mb-8">
                    <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
                        Город
                    </h3>
                    <div className="grow xl:h-16 lg:h-14 xl:text-xl lg:text-l xl:px-10 lg:px-5 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase"
                        type='search'
                        id="city"
                        name="city"
                        placeholder="Город"
                        />
                    </div>
                </div>
                <div className="xl:mb-14 lg:mb-8">
                    <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
                        Дата
                    </h3>
                    <div className="grow xl:h-16 lg:h-14 xl:text-xl lg:text-l xl:px-10 lg:px-6 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase"
                        type='date'
                        id="date"
                        name="date"
                        placeholder="3 Февраля, 16:00 — 18:00"
                        />
                        <ArrowDown />
                    </div>
                </div>
            </form>
            <div className="xl:mb-16 lg:mb-10">
                <h3 className="font-mabry lg:mb-4 mb-2 uppercase">
                    Стоимость обучения
                </h3>
                <p className="font-proxima">
                    16000 ₽
                </p>
            </div>
            <button type='submit'
            className='xl:text-xl xl:py-3 xl:px-7 py-1 xl:w-72 ml-auto mr-0 px-4 text-md flex justify-between items-center font-mabry bg-yellow rounded-full uppercase'>
                К оплате
                <div className='xl:scale-100 scale-75'>
                    <Arrow />
                </div>
            </button>
        </div>
    </div>
  )
}
