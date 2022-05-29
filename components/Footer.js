import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<div className="footer container">
				<div className="row gx-0">
					<div className="footer-branding col-12 col-md-6 col-xl-2 mb-md-5">
						<img src="/logo/logo-with-subtitle.png" className="footer-branding__logo" />
					</div>
					<div className="footer-optin col-12 col-md-6 col-xl-4 mb-md-5">
						<p>Sign up to receive the latest updates</p>
						<form action="#" onSubmit={(e) => e.preventDefault()}>
							<div className="footer-optin__input">
								<input type="mail" required="" />
								<label>Email</label>
							</div>
							<button type="submit" className="custom-btn">
								Subscribe
							</button>
						</form>
					</div>
					<div className="col-12 col-xl-6 d-flex flex-column justify-content-between">
						<div className="footer-navigation">
							<ul>
								<li>
									<Link href="#">
										<a>About Us</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Products</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Virtual Tour</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Offers</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>News &amp; Events</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>About the developer</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Contact Us</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>Careers</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer-social">
							<div className="social-icons">
								<img src="/icons/facebook-icon.svg" />
								<img src="/icons/instagram-icon.svg" />
								<img src="/icons/twitter-icon.svg" />
								<img src="/icons/youtube-icon.svg" />
							</div>
							<div className="hotline">Hotline 19333</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
