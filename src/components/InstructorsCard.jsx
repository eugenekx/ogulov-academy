import Image from "next/image";
import InstructorImage from '../public/images/Instructor-image.png';
import Link from "next/link";

export const InstructorsCard = () => {
  return (
    <div className="w-full xl:h-104 lg:h-96 flex lg:flex-col-reverse flex-row-reverse flex-wrap justify-center rounded-xl shadow-lg relative overflow-hidden">
      <div className="lg:w-80 lg:mt-0 lg:mb-12 my-6 lg:ml-9 mx-4 z-10 order-last">
        <h3 className="xl:text-xl text-l font-mabry my-4 leading-tight uppercase">Малахов Игорь Михайлович</h3>
        <p className="w-52 text-s font-proxima my-4">Специалист висцеральных практик высшей категории, врач-уролог.</p>
        <Link href='/aboutinstructor' className="text-md font-mabry my-4 uppercase">Подробнее</Link>  
      </div>
      
      <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-80 mx-4 my-4 mask">
        <Image src={InstructorImage} alt='Instructors image' />
      </div>
        
        
    </div>
  )
}
