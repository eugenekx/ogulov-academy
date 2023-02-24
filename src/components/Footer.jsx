import Link from "next/link";
import Logo from "./Logo";
import LinkArrow from "./LinkArrow";
import InstagramLogo from "./InstagramLogo";
import VkLogo from "./VkLogo";
import FacebookLogo from "./FacebookLogo";

export const Footer = () => {
	return (
		<div className="w-full bg-yellow pb-8">
			<div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
				<div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-4 text-s xl:text-m font-mabry px-4 py-14 my-14">
					<div className="flex flex-col gap-6 text-m mb-4 lg:flex-row lg:gap-12 xl:text-l">
						<div className="grow grid grid-cols-1 gap-10">
							<Link href="/"
							className="flex items-center">
								<div className="w-12 h-12 rounded-full flex justify-center items-center bg-white mr-4">
									<div className="w-8 h-8">
										<Logo />
									</div>
								</div>
								<div className="uppercase text-m font-mabry">Академия Огулова</div>
							</Link>
							<div className="font-proxima text-m w-64">
								123103, Москва, проспект Маршала Жукова, 78 к2
							</div>
							<a className="font-mabry text-l"
								href="tel:+79035706688"
							>
								+7 (903) 570-66-88
							</a>
							<div className="flex gap-4">
								<Link className="flex items-center uppercase w-6 h-6"
								href="https://www.instagram.com/ogulov_com/">
									<InstagramLogo />
								</Link>
								<Link
									className="flex items-center uppercase w-6 h-6"
									href="https://vk.com/ogulov.center"
								>
									<VkLogo />
								</Link>
								<Link
									className="flex items-center uppercase w-6 h-6"
									href="https://www.facebook.com/ogulov.center/"
								>
									<FacebookLogo />
								</Link>
							</div>
						</div>
						<div className="mb-10 lg:mb-0">
							<div className="text-s xl:text-m mb-4 uppercase">
								Навигация
							</div>
							<Link className="flex items-center gap-2 uppercase mb-2" href="/">
								Главная
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="/courses"
							>
								Курсы
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="/instructors"
							>
								Преподаватели
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="/contacts"
							>
								Контакты
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
						</div>
						<div className="mb-10 lg:mb-0">
							<div className="text-s xl:text-m mb-4 uppercase">
								Ссылки
							</div>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="https://clinic.ogulov.com/"
							>
								Клиника
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="https://academy.ogulov.com/"
							>
								Академия
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="https://shop.ogulov.com/"
							>
								Магазин
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
							<Link
								className="flex items-center gap-2 uppercase mb-2"
								href="https://online.ogulov.com/"
							>
								Академия-онлайн
								<div className="w-3 h-3">
									<LinkArrow />
								</div>
							</Link>
						</div>
					</div>
					<div className="lg:float-right">
						<div className="uppercase text-s xl:text-m font-mabry">ООО «Огулов центр», 2022</div>
						<Link className="text-s xl:text-m font-proxima" href="/">Пользовательское соглашение</Link>
					</div>
				</div>
			</div>
		</div>
		
	);
};
