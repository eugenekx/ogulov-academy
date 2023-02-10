import Arrow from "./Arrow";

function ActionBtn ({children, withArrow, onClick, ...props}) {
    return (
        <button
        onClick={onClick}
        className={ withArrow ?
            "lg:pl-8 xl:h-16 lg:h-14 h-10 pl-6 pr-5 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            :"lg:pl-8 lg:pr-8 xl:h-16 lg:h-14 h-10 pl-6 pr-6 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            }>
            {children}
            {withArrow && <div className='xl:scale-100 scale-75 ml-8'>
                <Arrow />
            </div>}
        </button>
    )
}

export default ActionBtn