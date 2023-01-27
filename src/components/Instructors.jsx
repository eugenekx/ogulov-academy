import { InstructorsCard } from "./InstructorsCard"

export const Instructors = () => {
  return (
    <div className='xl:my-28 max-w-screen-xl font-proxima xl:mx-auto mx-4'>
        <h2 className='xl:text-2xl xl:my-20 text-l text-center font-mabry my-4'>ПРЕПОДАВАТЕЛИ</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <InstructorsCard />
        </div>
    </div>
  )
}
