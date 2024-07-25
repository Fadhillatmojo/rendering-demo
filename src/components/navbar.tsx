import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
// apabila kita menjadikan suatu component itu menjadi client component, maka akan mengubah semua child dibawahnya menjadi client component, itu adalah konsekuensinya
// makanya kalo bisa, client component itu ditaruh di paling bawah atau sebagai leaf dalam DOM tree. misalkan di contoh inisaya pake di dalam navbar-search bukan di navbar component.
export const Navbar = () => {
	console.log("navbar Rendered");
	return (
		<div>
			<NavLinks />
			<NavSearch />
		</div>
	);
};