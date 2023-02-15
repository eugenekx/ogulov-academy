import Arrow from "@components/Arrow";
import Image from "next/image";
import HeroImage from '/public/images/clinic.png'

export const Slider = () => {
	return (
		<div>
			<div className="flex gap-12 mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg justify-around items-center">
				<div className="hidden w-11 shrink-0 lg:flex justify-start rotate-180">
					<Arrow />
				</div>
				<div className="relative grow rounded-3xl overflow-hidden">
					<Image
						src={HeroImage}
						alt="Клиника Огулова"
					/>
				</div>
				<div className="hidden w-11 shrink-0 lg:flex justify-start">
					<Arrow />
				</div>
			</div>
			<div className="w-full flex justify-center gap-2 pt-16">
				<div className="w-3 h-3 border-black border-2 rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
			</div>
			<div className="lg:hidden w-full flex px-4 pt-16">
				<div className="w-14 rotate-180">
					<Arrow />
				</div>
				<div className="w-14">
					<Arrow />
				</div>
			</div>
		</div>
	);
};
