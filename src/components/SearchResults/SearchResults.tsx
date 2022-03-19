import SearchResultForm from '../SearchResultForm/SearchResultForm';
import './SearchResults.scss';

function SearchResults(props) {

    return (
        <div className="search-results__container">
            <ul className="search-results__list">
                {props.searchResults.map((searchResult, i) => {
                    return (
                        <li
                        className="search-result"
                        style={{
                            opacity: 0,
                            animation: `fade-in .5s ${i * .25}s ease-out forwards`
                        }}
                        key={searchResult.id}>
                            <div className="search-result__img-container">
                                <img
                                className="search-result__img" 
                                src={searchResult.image} 
                                alt={searchResult.albumTitle} 
                                />
                            </div>
                            <div className="search-result__container">
                                <div className="search-result__text-container">
                                    <article className="search-result__info">
                                        <h3 className="search-result__title">Album:</h3>
                                        <p className="search-result__paragraph">{searchResult.albumTitle}</p>
                                    </article>
                                    <article className="search-result__info">
                                        <h3 className="search-result__title">Artist:</h3>
                                        <p className="search-result__paragraph">{searchResult.artist}</p>
                                    </article>
                                    <article className="search-result__info">
                                        <h3 className="search-result__title">Release Date:</h3>
                                        <p className="search-result__paragraph">{searchResult.release_date}</p>
                                    </article>
                                    <article className="search-result__info">
                                        <h3 className="search-result__title">Number of Tracks:</h3>
                                        <p className="search-result__paragraph">{searchResult.num_tracks}</p>
                                    </article>
                                </div>
                                <SearchResultForm
                                    image={searchResult.image}
                                    albumTitle={searchResult.albumTitle}
                                    artist={searchResult.artist}
                                    releaseDate={searchResult.release_date}
                                    numTracks={searchResult.num_tracks}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SearchResults