import { useState, useEffect } from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
	const [loadedJobs, setLoadedJobs] = useState([]);

	const loadMore = () => {
		setLoadedJobs(jobs.slice(0, loadedJobs.length + 5));
	};

	useEffect(() => {
		if (Array.isArray(jobs) && jobs.length > 0) {
			setLoadedJobs(jobs.slice(0, 5));
		}
	}, [jobs]);

	return (
		<div className="job-list">
			<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
				{!Array.isArray(loadedJobs) && loadedJobs.length > 0
					? null
					: loadedJobs.map((job) => (
							<div className="col" key={job.id}>
								<JobCard job={job} />
							</div>
					  ))}
			</div>
			<button className="btn-load-more" onClick={loadMore}>
				Load More
			</button>
		</div>
	);
};

export default JobList;
