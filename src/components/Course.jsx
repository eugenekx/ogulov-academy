import Image from 'next/image';
import CourseImg from '../public/images/course-image.png';
import Arrow from './Arrow';
import { CourseDescription } from './CourseDescription';
import { InstructorsContainer } from './InstructorsContainer';
import { PopUp } from './PopUp';

export const Course = () => {
  return (
    <>
    <PopUp></PopUp>
    <div className='xl:my-28 xl:mx-auto my-4 max-w-screen-xl mx-4 grid xl:grid-cols-3 xl:gap-6 items-center'>
      <div className='overflow-hidden rounded-3xl xl:order-last mx-auto'>
        <Image
        width={587}
        src={CourseImg}
        alt='Course Image'
        />
      </div>
      <div className='xl:col-span-2'>
        <h1 className='xl:text-3xl xl:my-12 mb-6 mt-12 text-xl font-mabry leading-tight'>
          ФИТНЕС-ФОРМИРУЮЩИЙ МАССАЖ ЛИЦА
        </h1>
        <button className='xl:text-xl xl:py-3 xl:pl-9 xl:pr-6 xl:w-80 my-4 pl-6 pr-4 w-56 text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
          ЗАПИСАТЬСЯ
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
