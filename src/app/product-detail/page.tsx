import { Suspense } from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProducDetailPage() {
	return (
		<div>
			<h1>Product Detail</h1>
			<Suspense fallback={<p>Loading product details...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading reviews...</p>}>
				<Reviews />
			</Suspense>

		</div>
	);
}