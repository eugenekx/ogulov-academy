import Image from 'next/image'
import CourseImg from '../public/images/course-image.png'
import Arrow from './Arrow'
import { CourseDescription } from './CourseDescription'
import { Instructors } from './Instructors'

export const Course = () => {
  return (
    <>
    <div className='xl:my-28 xl:flex-nowrap xl:mx-auto my-4 max-w-screen-xl mx-4 flex items-center flex-wrap'>
      <div>
        <h1 className='xl:text-3xl xl:my-12 my-4 text-l font-mabry leading-tight'>ФИТНЕС-ФОРМИРУЮЩИЙ МАССАЖ ЛИЦА</h1>
        <button className='xl:text-l xl:py-3 xl:px-7 xl:w-80 my-4 px-3 w-52 text-m flex justify-between items-center font-mabry bg-yellow rounded-full'>
          ЗАПИСАТЬСЯ
          <div className='xl:scale-100 scale-75'><Arrow /></div>
        </button>
      </div>
      <Image src={CourseImg} alt='Course Image'></Image>
    </div>
    <CourseDescription />
    <Instructors />
    </>
  )
}
