import Arrow from "@components/Arrow";
import { Header } from "@components/Header";
import Link from "next/link";


export default function Register() {
	return (
        <section className="max-w-screen-xl mx-auto my-52">
            <h1 className="font-mabry text-3xl text-center my-16">
                РЕГИСТРАЦИЯ
            </h1>
            <form className="xl:w-140 flex flex-col gap-8 mx-auto my-12">
                <div className="grow xl:h-16 xl:text-xl xl:px-10 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow"
                    type='email'
                    id="email"
                    name="email"
                    placeholder="ЭЛ. ПОЧТА"
                    />
                </div>
                <div className="grow xl:h-16 xl:text-xl xl:px-10 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow"
                    type='password'
                    id="password"
                    name="password"
                    placeholder="ПАРОЛЬ"
                    />
                </div>
                <div className="grow xl:h-16 xl:text-xl xl:px-10 flex items-center font-mabry border-2 border-black rounded-full">
                    <input className="placeholder-black grow"
                    type='password'
                    id="password-confirm"
                    name="password-confrm"
                    placeholder="ПОДТВЕРДИТЬ ПАРОЛЬ"
                    />
                </div>
                <button type='submit'
                className='xl:text-xl xl:py-3 xl:px-7 xl:w-75 ml-auto mr-0 px-3 text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
                    ОТПРАВИТЬ
                    <div className='xl:scale-100 scale-75'>
                        <Arrow />
                    </div>
                </button>
            </form>
            <div className="text-center text-l font-proxima my-12">
                Уже есть аккаунт?
                <span> </span>
                <Link className='underline'
                href='/login'>
                    Войти
                </Link>
            </div>
        </section>
	);
}