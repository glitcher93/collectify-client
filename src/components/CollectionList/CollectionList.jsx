import './CollectionList.scss';
import Album from '../Album';

function CollectionList(props) {

    return (
        <div className="collection__list-container">
            {(props.collection.length === 0) ? 
                <p className="collection__empty-list">Nothing to see here...yet</p> :
                <ul className="collection__list">
                    {props.collection.map((album, i) => {
                        return <Album 
                                key={album.id}
                                id={album.id}
                                index={i}
                                image={album.image}
                                albumTitle={album.albumTitle}
                                artist={album.artist}
                                releaseDate={album.releaseDate}
                                numTracks={album.numTracks}
                                medium={album.medium}
                                numCopies={album.numCopies}
                                description={album.description}
                                handleOnClickDelete={props.handleOnClickDelete}
                                />
                    })}
                </ul>
            }
        </div>
    );
}

export default CollectionList;