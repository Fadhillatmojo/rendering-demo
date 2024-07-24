"use client";
// every client component also rendered once on the server to generate the initial html
// import { serverSideFunction } from "@/utils/server-utils";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';

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

	const settings = {
		dots: true,
	};
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
		<h1 style={{
			color: theme.colors.primary
		}}>
			Client Route
		</h1>
	);
}