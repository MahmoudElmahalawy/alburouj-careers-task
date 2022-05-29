import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/careers");
		}, 3000);
	}, []);

	return (
		<div style={{ width: "100%", height: "1000px", display: "grid", placeItems: "center" }}>
			This page will redirect to Careers page in 3 seconds
		</div>
	);
}
