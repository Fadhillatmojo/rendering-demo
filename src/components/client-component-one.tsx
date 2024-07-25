"use client";
import { useState } from "react";
// import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = ({children} : {
	children:React.ReactNode;
}) => {
	const [name, setName] = useState("Batmans");
	return (
		<>
			<h1>Client Component One</h1>
			{/* <ClientComponentTwo />  */}
			{/* <ServerComponentOne /> this will result and error */}
			{children}
		</>
	);
};