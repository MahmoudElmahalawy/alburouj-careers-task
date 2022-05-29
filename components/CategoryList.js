const CategoryList = ({ filterJobList, selectedCategory }) => {
	return (
		<div className="category-list">
			<ul>
				<li onClick={() => filterJobList("all")} className={selectedCategory === "all" ? "selected" : ""}>
					All Jobs
				</li>
				<li
					onClick={() => filterJobList("Human Resources")}
					className={selectedCategory === "Human Resources" ? "selected" : ""}
				>
					Human Resources
				</li>
				<li
					onClick={() => filterJobList("Customer Service")}
					className={selectedCategory === "Customer Service" ? "selected" : ""}
				>
					Customer Support
				</li>
				<li
					onClick={() => filterJobList("Software Development")}
					className={selectedCategory === "Software Development" ? "selected" : ""}
				>
					Web &amp; Mobile Development
				</li>
				<li
					onClick={() => filterJobList("Business")}
					className={selectedCategory === "Business" ? "selected" : ""}
				>
					Business Development
				</li>
				<li
					onClick={() => filterJobList("Marketing")}
					className={selectedCategory === "Marketing" ? "selected" : ""}
				>
					Marketing
				</li>
			</ul>
		</div>
	);
};

export default CategoryList;
