const Footer = () => {
	return (
		<footer>
			<div className="footer container">
				<div className="row gx-0">
					<div className="footer-branding col-12 col-md-6 col-xl-2">
						<img src="/logo/logo-with-subtitle.png" className="footer-branding__logo" />
					</div>
					<div className="footer-optin col-12 col-md-6 col-xl-4">
						<p>Sign up to receive the latest updates</p>
						<form action="#">
							<div className="footer-optin__input">
								<input type="mail" required="" />
								<label>Email</label>
							</div>
							<button type="submit" className="footer-optin__btn">
								Subscribe
							</button>
						</form>
					</div>
					<div className="col-12 col-xl-6 d-flex flex-column justify-content-between">
						<div className="footer-navigation">
							<ul>
								<li>About Us</li>
								<li>Products</li>
								<li>Virtual Tour</li>
								<li>Offers</li>
								<li>News &amp; Events</li>
								<li>About the developer</li>
								<li>Contact Us</li>
								<li>Careers</li>
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
