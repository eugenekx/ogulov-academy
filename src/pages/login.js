import Link from "next/link";
import ActionBtn from "@components/ActionBtn";

export default function Login() {
	return (
        <div className="max-w-screen-xl mx-auto my-52">
            <h1 className="font-mabry lg:text-3xl text-xl text-center my-16 uppercase">
                Вход
            </h1>
            <form className="lg:w-140 w-64 flex flex-col lg:gap-8 gap-4 mx-auto my-12">
                <div className="grow lg:h-16 h-12 lg:text-xl xl:px-10 px-6 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
                    type='email'
                    id="email"
                    name="email"
                    placeholder="Эл. почта"
                    />
                </div>
                <div className="grow lg:h-16 h-12 lg:text-xl xl:px-10 px-6 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase focus:outline-none"
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
	);
}