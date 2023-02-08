import Image from 'next/image';
import CourseImg from '../public/images/course-image.png';
import Arrow from './Arrow';
import { CourseDescription } from './CourseDescription';
import { InstructorsContainer } from './InstructorsContainer';
import { PopUp } from './PopUp';
import { useState } from 'react';
import { gsap } from 'gsap';

function closePopUpTween () {
	gsap.fromTo("[data-animation='pop-up']", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0 });
};

export const Course = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  function openPopUp () {
    setIsPopUpOpen(true)
  };

  function closePopUp () {
    closePopUpTween({
      onComplete: () => setIsPopUpOpen(false),
    })
  };
  

  return (
    <>
    {isPopUpOpen && <PopUp
    closePopUp={closePopUp}
     />}
    <div className='xl:my-28 mx-auto px-4 xl:mt-28 mt-20 mb-4 xl:max-w-screen-xl lg:max-w-screen-lg grid lg:grid-cols-9 lg:gap-4 items-center'>
      <div className='overflow-hidden rounded-3xl lg:col-span-4 lg:order-last mx-auto'>
        <Image
        width={587}
        src={CourseImg}
        alt='Course Image'
        />
      </div>
      <div className='lg:col-span-5'>
        <h1 className='xl:text-3xl lg:text-2xl lg:my-12 mb-6 mt-12 text-xl font-mabry leading-tight uppercase'>
          Фитнес-формирующий массаж лица
        </h1>
        <button
        onClick={openPopUp}
        className='xl:text-xl lg:text-l xl:py-3 xl:pl-9 xl:pr-6 lg:py-1 xl:w-80 lg:w-64 my-4 pl-6 pr-4 w-56 text-md flex justify-between items-center font-mabry bg-yellow rounded-full uppercase'>
          Записаться
          <div className='xl:scale-100 scale-75'>
            <Arrow />
          </div>
        </button>
      </div>
    </div>
    <CourseDescription />
    <InstructorsContainer />
    </>
  )
}