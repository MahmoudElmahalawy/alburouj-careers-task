import { useState, useEffect } from "react";

import CategoryList from "./CategoryList";
import JobList from "./JobList";

const JobSection = () => {
	const [jobs, setJobs] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState();
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filterJobList = (category) => {
		setSelectedCategory(category);
		if (category === "all") {
			setFilteredJobs(jobs);
		} else {
			setFilteredJobs(jobs.filter((job) => job.category === category));
		}
	};

	useEffect(() => {
		fetch("https://remotive.io/api/remote-jobs")
			.then((data) => data.json())
			.then((data) => {
				setJobs(data.jobs);
				setFilteredJobs(data.jobs);
			})
			// .then((data) => console.log(data.jobs.map((j) => j.category).filter((j, i, a) => a.indexOf(j) === i)))
			.catch((error) => console.error("Error", error));
	}, []);

	return (
		<section className="job-section container">
			<CategoryList filterJobList={filterJobList} selectedCategory={selectedCategory} />
			<JobList jobs={filteredJobs} />
		</section>
	);
};

export default JobSection;
