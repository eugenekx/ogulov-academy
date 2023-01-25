import { InstructorsCard } from "./InstructorsCard"

export const Instructors = () => {
  return (
    <div className='max-w-screen-xl font-proxima my-28 mx-auto'>
        <h2 className='text-2xl text-center font-mabry my-20'>ПРЕПОДАВАТЕЛИ</h2>
        <div className="flex">
          <InstructorsCard />
        </div>
    </div>
  )
}
