import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/imageSlider";
export default function ServerRoutePage() {
	console.log("Server route rendered");
	const result = serverSideFunction();

	return (
		<>
			<h1>Server Route Page</h1>
			<h1>{result}</h1>
			<ImageSlider />

		</>
	);
}