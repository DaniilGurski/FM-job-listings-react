

function FilterBar({ tags, onTagRemoval, onClearClick }) {
    return (
        <div className="filter-bar">
            <ul className="filter-bar__filter-tags" aria-live="polite" id="filter-tags-list">
                {
                    tags.map((tag, index) => {
                        return (
                            <li className="tag" key={tag}>
                            {tag}
                                <button className="button tag__close-btn" onClick={() => onTagRemoval(index)}>
                                    <span className="visually-hidden"> remove tag</span>
                                    <img src="/img/icon-remove.svg" alt="remove icon" />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <button className="button button--secondary" aria-controls="filter-tags-list" 
            aria-label="Clear filters" onClick={onClearClick}>
                Clear
            </button>
        </div>
    )
}

export default FilterBar;