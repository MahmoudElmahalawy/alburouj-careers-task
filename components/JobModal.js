const JobModalContent = ({ title }) => {
	return (
		// <div className="job-modal">
		// 	<div className="job-description">
		// 		<div className="card-body">
		// 			<div className="card-head">
		// 				<img src="/icons/job-icon.svg" />
		// 				<p className="job-time">Time</p>
		// 			</div>
		// 			<h5 className="card-title job-title">Title</h5>
		// 			<div className="card-tags">
		// 				<span className="job-tag">{'job.job_type.replaceAll("_", " ")' || "N/A"}</span>
		// 				<span className="job-tag">{"job.category" || "N/A"}</span>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="job-application-form">bbbbbbbbbbbbbb</div>
		// </div>
		<div className="row">
			<div className="col">
				<div className="row h-75">
					<div className="col-4">
						<img src="/icons/job-icon.svg" />
					</div>
					<div className="col-8">
						<h5 className="card-title job-title">Title</h5>
						<p className="job-time">Time</p>
					</div>
				</div>
				<div className="row">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius illo ipsa, possimus cupiditate
					reiciendis officia in ex similique laboriosam eligendi explicabo perferendis inventore voluptates
					vero facere. Nobis, alias recusandae.
				</div>
				<div className="row"></div>
			</div>
			<div className="col"></div>
		</div>
	);
};

export default JobModalContent;
