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

	useEffect(() => {
		console.log(modalProps);
	}, [modalProps]);

	return (
		<ModalContext.Provider value={{ setModalOpen, setModalProps }}>
			<HeroSection />
			<JobSection />
			<PartnersSection />
			<ConstructionSection />

			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
				style={{
					content: {
						borderRadius: 56,
						"& .job-description": {
							backgroundColor: "blue",
						},
					},
					overlay: { zIndex: 1000, backgroundColor: "rgb(35, 51, 66, 0.5)" },
				}}
			>
				<JobModalContent title={modalProps?.title} />
			</Modal>
		</ModalContext.Provider>
	);
};

export default Careers;
