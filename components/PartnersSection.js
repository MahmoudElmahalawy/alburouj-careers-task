import PartnersCircle from "./PartnersCircle";

const PartnersSection = () => {
	return (
		<section className="partners-section">
			<div className="section-text">
				<h2 className="section-title">Our Partners</h2>
				<p className="section-subtitle">
					With quality at the heart of every decision they take, IMKAN Misr has partnered with the leading
					developments to develop and manage state-of-the-art facilities within Alburouj Community.
				</p>
			</div>
			<div className="partners">
				<PartnersCircle />
				<PartnersCircle />
			</div>
		</section>
	);
};

export default PartnersSection;
