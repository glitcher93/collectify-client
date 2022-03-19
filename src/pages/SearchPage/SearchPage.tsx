import Spotify from '../../utils/Spotify';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import './SearchPage.scss'
import SearchResults from '../../components/SearchResults';

function SearchPage() {

    const [searchResults, setSearchResults] = useState([]);
    
    const search = (term) => {
        Spotify
            .search(term)
            .then(searchResults => setSearchResults(searchResults))
            .catch(err => console.log(err))
    }

    return (
        <section className="search">
            <h3 className="search__title">Search</h3>
            <SearchBar onSearch={search} />
            <SearchResults searchResults={searchResults} />
        </section>
    );
}

export default SearchPage;



