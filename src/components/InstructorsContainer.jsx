import { InstructorsCard } from "./InstructorsCard"

export const InstructorsContainer = () => {
  return (
    <div className='xl:max-w-screen-xl lg:max-w-screen-lg max-w-[587px] font-proxima mx-auto xl:my-56 lg:my-40 my-32 px-4'>
      <h2 className='xl:text-2xl text-xl text-center font-mabry xl:mb-12 mb-10 uppercase'>Преподаватели</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <InstructorsCard />
        <InstructorsCard />
      </div>
    </div>
  )
}
