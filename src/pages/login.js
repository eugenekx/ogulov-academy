import Arrow from "@components/Arrow";
import { Header } from "@components/Header";
import Link from "next/link";


export default function Login() {
	return (
        <div className="max-w-screen-xl mx-auto my-52">
            <h1 className="font-mabry lg:text-3xl text-xl text-center my-16 uppercase">
                Вход
            </h1>
            <form className="lg:w-140 w-64 flex flex-col lg:gap-8 gap-4 mx-auto my-12">
                <div className="grow lg:h-16 h-12 lg:text-xl xl:px-10 px-6 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase"
                    type='email'
                    id="email"
                    name="email"
                    placeholder="Эл. почта"
                    />
                </div>
                <div className="grow lg:h-16 h-12 lg:text-xl xl:px-10 px-6 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow uppercase"
                    type='password'
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    />
                </div>
                <button type='submit'
                className='lg:text-xl lg:py-3 lg:pl-10 lg:pr-6 ml-auto mr-0 pl-6 pr-3 text-md flex items-center font-mabry bg-yellow rounded-full uppercase'>
                    Войти
                    <div className='lg:scale-100 scale-75 lg:ml-10 ml-4'>
                        <Arrow />
                    </div>
                </button>
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