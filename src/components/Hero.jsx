import Link from "next/link";
import Arrow from "@components/Arrow";

export const Hero = () => {
	return (
		<div
			className="bg-no-repeat bg-right relative"
			style={{ backgroundImage: "url(/images/hero-image.png)" }}
		>
			<div className=" xl:max-w-screen-xl mx-auto flex flex-col justify-end pt-28">
				<div className="w-1/2 h-[700px] flex flex-col justify-center">
					<div className="xl:text-3xl text-xl font-mabry leading-tight uppercase">
						Учебный центр
					</div>
					<div className="text-m font-proxima mt-8 leading-normal mb-6">
						Лекции, мастер-классы, семинары по оздоровлению
						организма от ведущих специалистов&nbsp;
						<Link href="/" className="underline underline-offset-4">
							Ассоциации специалистов висцеральных практик
						</Link>
					</div>
					<button className="xl:text-l xl:py-3 xl:px-7 xl:w-72 w-52 pl-6 pr-4 text-md flex justify-between items-center font-mabry bg-yellow rounded-full">
						ПОДРОБНЕЕ
						<div className="xl:scale-100 scale-75">
							<Arrow />
						</div>
					</button>
				</div>
			</div>
			<div className="absolute bottom-10 w-full flex justify-center gap-2">
				<div className="w-3 h-3 bg-black rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
			</div>
		</div>
	);
};
