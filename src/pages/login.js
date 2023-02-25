import Link from "next/link";
import ActionBtn from "@components/ActionBtn";

export default function Login() {
	return (
        <div className="max-w-screen-xl min-h-screen grid grid-cols-1 items-center mx-auto px-4">
            <div>
                <h1 className="font-mabry lg:text-3xl text-xl text-center my-16 uppercase">
                    Вход
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
                    <div className="ml-auto mr-0">
                        <ActionBtn withArrow={true}>
                            Войти
                        </ActionBtn>
                    </div>
                </form>
                <div className="text-center lg:text-l text-m font-proxima my-12">
                    Нет аккаунта?
                    <span> </span>
                    <Link className='underline'
                    href='/register'>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
	);
}