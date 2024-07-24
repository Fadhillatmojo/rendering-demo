import "server-only"; // this used to define the utils is only can be used in server component page only and will build an error if dipaksakan

export const serverSideFunction = () => {
	console.log(
		`use multiple libraries,
		use environment variables,
		interact with databases,
		process confidential information`
	);
	return "server result";
};

// install server only package -> npm i server-only
