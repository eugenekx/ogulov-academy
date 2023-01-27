import Image from "next/image"
import InstructorImage from '../public/images/Instructor-image.png'

export const InstructorsCard = () => {
  return (
    <div className="w-full xl:h-104 flex flex-wrap rounded-xl shadow-xl relative overflow-hidden">
        <div className=" w-80 my-12 xl:ml-9  ml-4 z-10">
            <h3 className="xl:text-xl text-m font-mabry my-4 leading-tight">МАЛАХОВ ИГОРЬ МИХАЙЛОВИЧ</h3>
            <p className="w-52 text-s font-proxima my-4">Специалист висцеральных практик высшей категории, врач-уролог.</p>
            <button className="text-m font-mabry my-4">ПОДРОБНЕЕ</button>  
        </div>
        <div className="xl:absolute xl:bottom-0 xl:right-0">
            <Image src={InstructorImage} alt='Instructors image' />
        </div>
    </div>
  )
}
