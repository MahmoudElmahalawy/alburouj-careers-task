import CategoryList from "./CategoryList";
import JobList from "./JobList";

const JobSection = ({ filteredJobs, filterJobList, selectedCategory }) => {
	return (
		<section className="job-section container">
			<CategoryList filterJobList={filterJobList} selectedCategory={selectedCategory} />
			<JobList jobs={filteredJobs} />
		</section>
	);
};

export default JobSection;
