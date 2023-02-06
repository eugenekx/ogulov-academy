import Arrow from "@components/Arrow";
import Image from "next/image";

export const Slider = () => {
	return (
		<div className="flex xl:mx-auto max-w-screen-xl justify-between items-center">
			<div className="w-24 shrink-0 flex justify-start">
				<Arrow className="rotate-180" />
			</div>
			<div className="relative w-full h-140 rounded-3xl overflow-hidden shrink">
				<Image
					src="/images/clinic.png"
					fill={true}
					alt="Клиника Огулова"
				/>
			</div>
			<div className="w-24 shrink-0 flex justify-end">
				<Arrow />
			</div>
		</div>
	);
};
