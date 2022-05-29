const JobCard = ({ title }) => {
	return (
		<div className="job-card card text-center">
			<div className="card-body">
				<div className="card-head">
					<img src="/icons/job-icon.svg" />
					<p className="job-time">5 minutes ago</p>
				</div>
				<h5 className="card-title job-title">{title}</h5>
				<div className="card-tags">
					<span className="job-tag">Full Time</span>
					<span className="job-tag">Business Department</span>
				</div>
				<button className="btn-apply">Apply Job</button>
			</div>
		</div>
	);
};

export default JobCard;
