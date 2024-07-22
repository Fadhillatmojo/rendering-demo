"use client";

// all React server components in next js app router the components are server component by default. so you must define which one is client components or server components

import { useState } from "react";

export default function DashboardPage() {
	const [name, setName] = useState("");
	console.log("Dashboard client components");
	return (
		<>
			<h1>Dashboard Page</h1>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<p>Hello, {name}</p>
		</>
	);
}