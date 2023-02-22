import Link from "next/link";
import Logo from "./Logo";
import LinkArrow from "./LinkArrow";
import InstagramLogo from "./InstagramLogo";
import VkLogo from "./VkLogo";
import FacebookLogo from "./FacebookLogo";

export const Footer = () => {
	return (
		<div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
			<div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-4 text-s xl:text-m font-mabry border-black border-t px-4 py-8 my-14">
				<div className="flex flex-col gap-6 text-m mb-4 lg:flex-row lg:gap-12 xl:text-l">
					<div className="grow">
						<div className="xl:w-21 w-12 mb-8">
							<Link href="/">
								<Logo />
							</Link>
						</div>
						<div className="uppercase text-s xl:text-m">ООО «Огулов центр», 2022</div>
						<Link className="text-s xl:text-m" href="/">Пользовательское соглашение</Link>
					</div>
					<div>
						<div className="text-s xl:text-m mb-4 uppercase">
							Навигация
						</div>
						<Link className="flex items-center gap-2 uppercase" href="/">
							Главная
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="/courses"
						>
							Курсы
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="/instructors"
						>
							Преподаватели
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="/contacts"
						>
							Контакты
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
					</div>
					<div>
						<div className="text-s xl:text-m mb-4 uppercase">
							Ссылки
						</div>
						<Link className="flex items-center gap-2 uppercase" href="https://clinic.ogulov.com/">
							Клиника
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="https://academy.ogulov.com/"
						>
							Академия
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="https://shop.ogulov.com/"
						>
							Магазин
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
						<Link
							className="flex items-center gap-2 uppercase"
							href="https://online.ogulov.com/"
						>
							Академия-онлайн
							<div className="w-3 h-3">
								<LinkArrow />
							</div>
						</Link>
					</div>
				</div>
				<div className="flex gap-4 my-8">
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
		</div>
	);
};
