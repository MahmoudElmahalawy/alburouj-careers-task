import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container d-flex justify-content-between align-items-center pt-4 pb-4">
				<div className="">
					<Image src="/logo/logo.svg" alt="site logo" width={195} height={39} />
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
