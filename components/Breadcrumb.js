import Link from "next/link";

const Breadcrumb = () => {
	return (
		<div className="breadcrumb container">
			<h1>Careers</h1>
			<div>
				<Link href="/">Home</Link>
				<span className="separator"></span>
				<Link href="/careers/">Careers</Link>
			</div>
		</div>
	);
};

export default Breadcrumb;
