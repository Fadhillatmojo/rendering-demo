"use client";
// every client component also rendered once on the server to generate the initial html
import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
	console.log("Client route rendered");
	const result = serverSideFunction();

	return (
		<>
			<h1>Client Route Page</h1>
			<h1>{result}</h1>
		</>
	);
}