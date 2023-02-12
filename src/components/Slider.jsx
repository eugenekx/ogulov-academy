import Arrow from "@components/Arrow";
import Image from "next/image";

export const Slider = () => {
	return (
		<div>
			<div className="flex lg:mx-auto px-4 lg:px-0 xl:max-w-screen-xl lg:max-w-screen-lg justify-between items-center">
				<div className="xl:w-24 lg:w-20 w-10 shrink-0 flex justify-start rotate-180">
					<Arrow />
				</div>
				<div className="relative grow h-140 rounded-3xl overflow-hidden shrink">
					<Image
						src="/images/clinic.png"
						fill={true}
						alt="Клиника Огулова"
					/>
				</div>
				<div className="xl:w-24 lg:w-20 w-10 shrink-0 flex justify-start">
					<Arrow />
				</div>
			</div>
			<div className=" w-full flex justify-center gap-2 pt-16">
				<div className="w-3 h-3 border-black border-2 rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
				<div className="w-3 h-3 bg-black rounded-full"></div>
			</div>
		</div>
	);
};
