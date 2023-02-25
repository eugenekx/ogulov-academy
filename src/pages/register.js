import Link from "next/link";
import ActionBtn from "@components/ActionBtn";


export default function Register() {
	return (
        <div className="max-w-screen-xl min-h-screen mx-auto px-4 grid grid-cols-1 items-center ">
            <div>
                <h1 className="font-mabry lg:text-3xl text-xl text-center my-16 uppercase">
                    Регистрация
                </h1>
                <form className="lg:w-140 max-w-xl flex flex-col xl:gap-8 gap-4 mx-auto my-12">
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none overflow-hidden"
                        type='email'
                        id="email"
                        name="email"
                        placeholder="Эл. почта"
                        />
                    </div>
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none overflow-hidden"
                        type='password'
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        />
                    </div>
                    <div className="xl:h-16 lg:h-12 h-10 xl:text-l pl-6 pr-4 flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black grow uppercase focus:outline-none overflow-hidden"
                        type='password'
                        id="password-confirm"
                        name="password-confrm"
                        placeholder="Подтвердить пароль"
                        />
                    </div>
                    <div className="ml-auto mr-0">
                        <ActionBtn withArrow={true}>
                            Отправить
                        </ActionBtn>
                    </div>
                </form>
                <div className="text-center lg:text-l text-m font-proxima my-12">
                    Уже есть аккаунт?
                    <span> </span>
                    <Link className='underline'
                    href='/login'>
                        Войти
                    </Link>
                </div>
            </div>
            
        </div>
	);
}