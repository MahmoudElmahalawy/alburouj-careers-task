import { useState, useEffect, createContext } from "react";

import Modal from "react-modal";

import HeroSection from "../components/HeroSection";
import JobSection from "../components/JobSection";
import PartnersSection from "../components/PartnersSection";
import ConstructionSection from "../components/ConstructionSection";
import JobModalContent from "../components/JobModal";

Modal.setAppElement("#__next");

export const ModalContext = createContext();

const Careers = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalProps, setModalProps] = useState(null);

	const [jobs, setJobs] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState();
	const [selectedCategory, setSelectedCategory] = useState("all");

	const searchForJob = (searchTerm, jobType) => {
		setFilteredJobs(jobs.filter((job) => job.description.includes(searchTerm)));
	};

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
		<ModalContext.Provider value={{ setModalOpen, setModalProps }}>
			<HeroSection searchForJob={searchForJob} />
			<JobSection filteredJobs={filteredJobs} filterJobList={filterJobList} selectedCategory={selectedCategory} />
			<PartnersSection />
			<ConstructionSection />

			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
				style={{
					content: {
						borderRadius: 56,
						backgroundColor: "#fbf6f3",
					},
					overlay: { zIndex: 1000, backgroundColor: "rgb(35, 51, 66, 0.5)" },
				}}
			>
				<JobModalContent modalProps={modalProps} />
			</Modal>
		</ModalContext.Provider>
	);
};

export default Careers;
