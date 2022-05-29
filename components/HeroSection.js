import Breadcrumb from "./Breadcrumb";
import SearchBox from "./SearchBox";

const HeroSection = ({ searchForJob }) => {
	return (
		<section className="hero-section">
			<Breadcrumb />
			<SearchBox searchForJob={searchForJob} />
		</section>
	);
};

export default HeroSection;
