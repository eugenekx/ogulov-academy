import { InstructorsCard } from "./InstructorsCard"

export const InstructorsContainer = () => {
  return (
    <div className='xl:my-28 xl:max-w-screen-xl lg:max-w-screen-lg max-w-[587px] font-proxima mx-auto'>
      <div className="mx-4">
        <h2 className='xl:text-2xl lg:my-20 text-xl text-center font-mabry my-12'>ПРЕПОДАВАТЕЛИ</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <InstructorsCard />
          <InstructorsCard />
        </div>
      </div>
    </div>
  )
}
