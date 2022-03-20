import './WishList.scss';
import AlbumItem from '../AlbumItem';
import { Album } from '../../utils/interfaces';

interface WishListProps {
    wishlist: Album[]
    handleOnClickDelete: (id: number) => void
    handleOnClickCollection?: (album: Album, id: number) => void
}

function WishList(props: WishListProps) {
    return (
        <div className="wishlist__list-container">
            {(props.wishlist.length) === 0 ? 
            <p className="wishlist__empty-list">Nothing to see here...yet</p> :
            <ul className="wishlist__list">
                {props.wishlist.map((album: Album, i: number) => {
                    return <AlbumItem 
                            key={album.id}
                            id={album.id}
                            album={album}
                            index={i}
                            image={album.image}
                            albumTitle={album.albumTitle}
                            artist={album.artist}
                            releaseDate={album.releaseDate}
                            numTracks={album.numTracks}
                            medium={album.medium}
                            numCopies={album.numCopies}
                            description={album.description}
                            handleOnClickCollection={props.handleOnClickCollection}
                            handleOnClickDelete={props.handleOnClickDelete}
                            />
                })}
            </ul>
            }  
        </div>
    )
}

export default WishList;