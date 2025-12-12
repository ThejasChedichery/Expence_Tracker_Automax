function FilterBar({ selectedCategory, onCategoryChange }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <label className="form-label">Filter by Category:</label>
                    </div>
                    <div className="col-md-6">
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) => onCategoryChange(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="utilities">Utilities</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
