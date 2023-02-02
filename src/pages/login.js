import Arrow from "@components/Arrow";
import { Header } from "@components/Header";


export default function Login() {
	return (
		<>
			<Header />
			<section className="max-w-screen-xl mx-auto my-52">
                <h1 className="font-mabry text-3xl text-center">ВХОД</h1>
                <form>
                    <div className="xl:w-96 xl:h-16 xl:text-xl xl:px-10 mx-auto flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black" type='tel' id="phone-number" name="phone" placeholder="ТЕЛЕФОН"></input>
                    </div>
                    <div className="xl:w-96 xl:h-16 xl:text-xl xl:px-10 mx-auto flex items-center font-mabry border-2 border-black rounded-full">
                        <input className="placeholder-black" type='password' id="password" name="password" placeholder="ПАРОЛЬ"></input>
                    </div>
                    <button type='submit' className='xl:text-xl xl:py-3 xl:px-7 xl:w-96 mx-auto px-3 text-md flex justify-between items-center font-mabry bg-yellow rounded-full'>
                        ВОЙТИ
                        <div className='xl:scale-100 scale-75'><Arrow /></div>
                    </button>
                </form>
                
            </section>
		</>
	);
}