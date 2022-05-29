import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container d-flex justify-content-between align-items-center pt-4 pb-4">
				<div className="site-logo">
					<Link href="/">
						<a>
							<Image src="/logo/logo.svg" alt="site logo" width={195} height={39} />
						</a>
					</Link>
				</div>

				<div className="">
					<button className="navbar__menu-btn" title="menu">
						<Image src="/icons/menu-icon.svg" width={30} height={20} />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
