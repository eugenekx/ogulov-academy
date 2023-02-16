import Arrow from "./Arrow";

function ActionBtn ({children, withArrow, onClick, ...props}) {
    return (
        <button
        onClick={onClick}
        className={ withArrow ?
            "xl:pr-6 lg:pl-8 pl-6 pr-3 xl:h-16 lg:h-12 h-10 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            :"lg:pl-8 lg:pr-8 xl:h-16 lg:h-12 h-10 pl-6 pr-6 flex items-center bg-yellow rounded-full lg:text-l text-m font-mabry uppercase"
            }>
            {children}
            {withArrow && <div className='xl:w-12 xl:h-12 lg:w-9 lg:h-9 w-8 h-8 xl:ml-10 lg:ml-6 ml-4'>
                <Arrow />
            </div>}
        </button>
    )
}

export default ActionBtn