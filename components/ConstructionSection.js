import CustomCarousel from "./CustomCarousel";

const ConstructionSection = () => {
	return (
		<div className="construction-section">
			<h2 className="construction-title">Construction</h2>
			<div className="container filter-btns-container">
				<button className="custom-btn">February 2020</button>
				<button className="custom-btn">Unit Type</button>
			</div>
			<CustomCarousel />
		</div>
	);
};

export default ConstructionSection;
