const JobModalContent = ({ modalProps: { job } }) => {
	return (
		<div className="job-modal row">
			<div className="job-body col-12 col-lg-6">
				<div className="job-header">
					<div className="job-logo">
						<img src="/icons/job-icon.svg" />
					</div>
					<div className="job-title-time p-2 ">
						<h5 className="job-title">{job.title}</h5>
						<p className="job-time">{job.published_since}</p>
					</div>
				</div>
				<div className="job-description" dangerouslySetInnerHTML={{ __html: job.description }}></div>
				<div className="card-tags">
					<span className="job-tag">{job.job_type.replaceAll("_", " ") || "N/A"}</span>
					<span className="job-tag">{job.category || "N/A"}</span>
				</div>
			</div>
			<div className="job-application-form col-12 col-lg-6">
				<form action="#" onSubmit={(e) => e.preventDefault()}>
					<div className="footer-optin__input">
						<input type="mail" required="" />
						<label>Email</label>
					</div>
					<div className="footer-optin__input">
						<input type="text" required="" />
						<label>Name</label>
					</div>
					<div className="footer-optin__input">
						<input type="phone" required="" />
						<label>Phone</label>
					</div>
					<div>
						<label htmlFor="more-about-you">Write about yourself and your work history</label>
						<div>
							<textarea id="more-about-you" type="textarea" required="" />
						</div>
					</div>
					<div className="modal-btn">
						<button type="submit" className="custom-btn">
							Apply Job
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JobModalContent;
