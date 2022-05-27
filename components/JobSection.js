import { useState, useEffect } from "react";

import CategoryList from "./CategoryList";
import JobList from "./JobList";

const JobSection = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		fetch("https://remotive.io/api/remote-jobs")
			.then((data) => data.json())
			.then((data) => setJobs(data.jobs))
			.catch((error) => console.error("Error", error));
	}, []);

	return (
		<section className="job-section container">
			<CategoryList />
			<JobList jobs={jobs} />
		</section>
	);
};

export default JobSection;
