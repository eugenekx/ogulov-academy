import Image from 'next/image'
import CourseImg from '../public/images/course-image.png'
import Arrow from './Arrow'
import { CourseDescription } from './CourseDescription'
import { Instructors } from './Instructors'

export const Course = () => {
  return (
    <>
    <div className='max-w-screen-xl my-28 mx-auto flex items-center'>
      <div>
        <h1 className='text-3xl font-mabry leading-tight my-12'>ФИТНЕС-ФОРМИРУЮЩИЙ МАССАЖ ЛИЦА</h1>
        <button className='w-80 flex justify-between items-center text-l font-mabry bg-yellow py-3 px-7 rounded-full'>
          ЗАПИСАТЬСЯ
          <Arrow />
        </button>
      </div>
      <Image src={CourseImg} alt='Course Image'></Image>
    </div>
    <CourseDescription />
    <Instructors />
    </>
  )
}
