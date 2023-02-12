import Image from 'next/image';
import CourseImg from '../public/images/course-image.png';
import { CourseDescription } from './CourseDescription';
import { InstructorsContainer } from './InstructorsContainer';
import { PopUp } from './PopUp';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ActionBtn from './ActionBtn';

export const Course = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  function openPopUp () {
    const body = document.querySelector('body');
    
    body.style.overflow='hidden';
    setIsPopUpOpen(true)
  };

  function openPopUpTween () {
    gsap.fromTo("[data-animation='pop-up']", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .3 });
  };

  function closePopUpTween (onComplete) {
    gsap.fromTo("[data-animation='pop-up']", { scale: 1, opacity: 1 }, { scale: 0, opacity: 0, onComplete, duration: .3 });
  };

  function closePopUp () {
    closePopUpTween(() => setIsPopUpOpen(false))
  };

  
  
  return (
    <>
    {isPopUpOpen && <PopUp
    openPopUp={openPopUp}
    //closePopUp={closePopUp}
    openPopUpTween={openPopUpTween}
    isPopUpOpen={isPopUpOpen}
     />}
    <div className='mx-auto px-4 xl:mt-40 mt-32 mb-32 xl:max-w-screen-xl lg:max-w-screen-lg grid lg:grid-cols-9 lg:gap-20 items-center'>
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
        <ActionBtn
        onClick={openPopUp}
        withArrow={true}
        >
          Записаться
        </ActionBtn>
      </div>
    </div>
    <CourseDescription />
    <InstructorsContainer />
    </>
  )
}