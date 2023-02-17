import Link from "next/link";
import Arrow from "@components/Arrow";
import ActionBtn from "./ActionBtn";

export const Hero = () => {
	return (
		<div className="bg-no-repeat bg-center lg:bg-right relative h-screen lg:min-h-[800px] md:min-h-[600px] -z-20">
			<div
				className="absolute w-full lg:w-2/3 h-2/3 lg:h-full bg-no-repeat right-0 bg-center -z-10"
				style={{ backgroundImage: "url(/images/hero-image.png)" }}
			>
				<div className="bg-gradient-to-t lg:bg-gradient-to-r from-white xl:via-white to-transparent h-full lg:w-2/3 xl:w-1/2"></div>
			</div>
			<div className="absolute bottom-0 bg-gradient-to-t w-full h-[80%] md:h-3/4 lg:h-full lg:w-[85%]" />
			<div className="xl:max-w-screen-xl lg:max-w-screen-lg px-4 lg:mx-auto flex flex-col justify-end">
				<div className=" lg:min-h-[800px] md:min-h-[600px] lg:w-1/2 h-screen flex flex-col lg:justify-center justify-end pb-32 lg:pb-0">
					<div className="xl:text-3xl text-xl font-mabry leading-tight uppercase">
						Учебный центр
					</div>
					<div className="text-m font-proxima mt-8 leading-normal mb-6 font-light">
						Лекции, мастер-классы, семинары по оздоровлению
						организма от ведущих специалистов&nbsp;
						<Link href="/" className="underline underline-offset-4">
							Ассоциации специалистов висцеральных практик
						</Link>
					</div>
					<div className="ml-0 mr-auto">
						<ActionBtn withArrow={true}>Подробнее</ActionBtn>
					</div>
				</div>
			</div>
			<div className="absolute bottom-10 w-full flex justify-center gap-2">
				<div className="w-3 h-3 border-black border-2 rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
			</div>
		</div>
	);
};
