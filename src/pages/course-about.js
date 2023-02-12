import Image from 'next/image';
import CourseImg from '../public/images/course-image.png';
import { CourseDescription } from '@components/CourseDescription';
import { InstructorsContainer } from '@components/InstructorsContainer';
import { PopUp } from '@components/PopUp';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ActionBtn from '@components/ActionBtn';


export default function CourseAbout () {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  function openPopUp () {
    const body = document.querySelector('body');
    
    body.style.overflow='hidden';
    setIsPopUpOpen(true)
  };

  function openPopUpTween () {
    gsap.fromTo("[data-animation='pop-up']", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: .5 });
  };

  function closePopUp () {
    const body = document.querySelector('body');
    body.style.overflow = 'visible';
    setIsPopUpOpen(false)
  };

  function closePopUpTween (onComplete) {
    gsap.to("[data-animation='pop-up']", { y: -100, opacity: 0, onComplete: () => closePopUp(), duration: .5 });
  };

  return (
    <>
    {isPopUpOpen && <PopUp
    openPopUpTween={openPopUpTween}
    isPopUpOpen={isPopUpOpen}
    closePopUpTween={closePopUpTween}
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
