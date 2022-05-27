const SearchBox = () => {
	return (
		<div className="container">
			<div className="search-box">
				<h2>Search among our jobs and start your career</h2>
				<div class="input-group">
					<span class="input-group-addon" id="sizing-addon">
						<img src="/icons/search-icon.svg" />
					</span>
					<input type="text" class="form-control" placeholder="Find Your Job" aria-label="..." />
					<div class="input-group-btn">
						<select name="" id="" className="btn dropdown-toggle search-category-select">
							<option value="">All Jobs</option>
							<option value="">Some Jobs</option>
							<option value="">No Jobs</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
