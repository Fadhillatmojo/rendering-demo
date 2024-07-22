import { cookies } from "next/headers";
// static rendering: html generated once at build time, cocok untuk yang langsung kelihatan semua like blogs, portfolio, etc
// dynamic rendering : html generated at request time, cocok untuk personalised post like IG, youtube dll
export default function AboutPage() {
	const cookieStore = cookies(); // ini dynamic rendering soalnya dia otomatis ngebaca fungsi dynamic rute
	const theme = cookieStore.get("theme");
	console.log(theme);

	console.log("server component")
	return <h1>About Page</h1>;
}