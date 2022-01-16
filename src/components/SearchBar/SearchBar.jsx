import { useState } from 'react';
import './SearchBar.scss'

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = event => {
        setTerm(event.target.value);
    }

    const search = () => {
        props.onSearch(term)
    }

    return (
        <div className="search__search-bar">
            <input 
            type="text" 
            placeholder="Enter album or artist..." 
            className="search__input"
            value={term}
            onChange={handleTermChange}
            />
            <button
            onClick={search}
            className="search__button">
                Search
            </button>
        </div>
    )
}

export default SearchBar;