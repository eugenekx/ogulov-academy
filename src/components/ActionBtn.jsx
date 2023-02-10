import Arrow from "./Arrow";

function ActionBtn ({children, withArrow, onClick, ...props}) {
    return (
        <button
        onClick={onClick}
        className={ withArrow ?
            "xl:pr-5 lg:pl-8 lg:pr-2 pl-6 pr-1  xl:h-16 lg:h-14 h-10 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            :"lg:pl-8 lg:pr-8 xl:h-16 lg:h-14 h-10 pl-6 pr-6 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            }>
            {children}
            {withArrow && <div className='xl:scale-100 lg:scale-75 scale-[66%] xl:ml-8 lg:ml-6 ml-2'>
                <Arrow />
            </div>}
        </button>
    )
}

export default ActionBtn