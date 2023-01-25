import Image from "next/image"
import InstructorImage from '../public/images/Instructor-image.png'

export const InstructorsCard = () => {
  return (
    <div className="w-2/4 flex rounded-xl shadow-xl">
        <div className="my-12 ml-9">
            <h3 className="text-xl font-mabry">МАЛАХОВ ИГОРЬ МИХАЙЛОВИЧ</h3>
            <p className="text-s font-proxima">Специалист висцеральных практик высшей категории, врач-уролог.</p>
            <button className="text-m font-mabry">ПОДРОБНЕЕ</button>  
        </div>
        <Image src={InstructorImage} alt='Instructors image' />
    </div>
  )
}
