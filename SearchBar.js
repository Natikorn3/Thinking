import React from "react";

function SearchBar(props) {
    const {filtertext, setFilterText, inStockOnly, setInStockOnly} = props
    return (
        <form className="search-bar">
            <input type="text" placeholder="Search..." 
            value={filtertext}
            onChange={e => setFilterText(e.target.value)}
            />
            <label>
                <input type="checkbox" 
                value={inStockOnly}
                onChange={e=>setInStockOnly(e.target.checked)}
                />
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar    