import { useContext } from "react";

import { ModalContext } from "../pages/careers";

const JobCard = ({ job }) => {
	const { setModalOpen, setModalProps } = useContext(ModalContext);

	const calcTimeSince = (dateStr) => {
		let diffMs = new Date().getTime() - new Date(dateStr).getTime();
		let sec = diffMs / 1000;
		if (sec < 60) return parseInt(sec) + " second" + (parseInt(sec) > 1 ? "s" : "") + " ago";
		let min = sec / 60;
		if (min < 60) return parseInt(min) + " minute" + (parseInt(min) > 1 ? "s" : "") + " ago";
		let h = min / 60;
		if (h < 24) return parseInt(h) + " hour" + (parseInt(h) > 1 ? "s" : "") + " ago";
		let d = h / 24;
		if (d < 30) return parseInt(d) + " day" + (parseInt(d) > 1 ? "s" : "") + " ago";
		let m = d / 30;
		if (m < 12) return parseInt(m) + " month" + (parseInt(m) > 1 ? "s" : "") + " ago";
		let y = m / 12;
		return parseInt(y) + " year" + (parseInt(y) > 1 ? "s" : "") + " ago";
	};

	return (
		<div className="job-card card text-center h-100">
			<div className="card-body">
				<div className="card-head">
					<img src="/icons/job-icon.svg" />
					<p className="job-time">{calcTimeSince(job.publication_date)}</p>
				</div>
				<h5 className="card-title job-title">{job.title}</h5>
				<div className="card-tags">
					<span className="job-tag">{job.job_type.replaceAll("_", " ") || "N/A"}</span>
					<span className="job-tag">{job.category || "N/A"}</span>
				</div>
				<button
					className="btn-apply"
					onClick={() => {
						setModalProps({ job: { ...job, published_since: calcTimeSince(job.publication_date) } });
						setModalOpen(true);
					}}
				>
					Apply Job
				</button>
			</div>
		</div>
	);
};

export default JobCard;
