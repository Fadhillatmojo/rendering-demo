"use client";
import "client-only"; // agar fungsi server tidak dapat diimport ke dalam sini
// every client component also rendered once on the server to generate the initial html
// import { serverSideFunction } from "@/utils/server-utils";
import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
	console.log("Client route rendered");
	// const result = serverSideFunction();

	// return (
	// 	<>
	// 		<h1>Client Route Page</h1>
	// 		{/* <h1>{result}</h1> */}
	// 	</>
	// );
	const theme = useTheme();
	// const result = serverSideFunction();
	const clientResult = clientSideFunction();

	// const settings = {
	// 	dots: true,
	// };
	return (
		// <div className="image-slider-container">
		// 	<Slider {...settings}>
		// 		<div>
		// 			<img src="https://picsum.photos/g/400/200" />
		// 		</div>
		// 		<div>
		// 			<img src="https://picsum.photos/g/400/200" />
		// 		</div>
		// 		<div>
		// 			<img src="https://picsum.photos/g/400/200" />
		// 		</div>
		// 		<div>
		// 			<img src="https://picsum.photos/g/400/200" />
		// 		</div>
		// 	</Slider>
		// </div>
		<h1>
			Client Route {clientResult}
		</h1>
	);
}