import Image from "next/image"
import InstructorImage from '../public/images/Instructor-image.png'

export const InstructorsCard = () => {
  return (
    <div className="w-full h-104 flex rounded-xl shadow-xl relative overflow-hidden">
        <div className=" w-80 my-12 ml-9 z-10">
            <h3 className="text-xl font-mabry my-4 leading-tight">МАЛАХОВ ИГОРЬ МИХАЙЛОВИЧ</h3>
            <p className="w-52 text-s font-proxima my-4">Специалист висцеральных практик высшей категории, врач-уролог.</p>
            <button className="text-m font-mabry my-4">ПОДРОБНЕЕ</button>  
        </div>
        <div className="absolute bottom-0 right-0">
            <Image src={InstructorImage} alt='Instructors image' />
        </div>
    </div>
  )
}
