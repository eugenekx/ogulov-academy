import Image from "next/image";

export const Licenses = () => {
	return (
		<div className="mx-auto max-w-screen-xl xl:my-56 lg:my-40 my-32">
			<h1 className="xl:text-3xl mb-14 text-xl font-mabry leading-tight text-center uppercase">
				Лицензии и сертификаты
			</h1>
			<div className="flex lg:flex-row flex-col  gap-20 justify-center items-center">
				<Image src="/images/license.png" width={263} height={373} />
				<Image src="/images/license.png" width={263} height={373} />
				<Image src="/images/license.png" width={263} height={373} />
			</div>
		</div>
	);
};
