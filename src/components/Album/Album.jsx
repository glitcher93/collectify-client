import { Link } from 'react-router-dom';
import './Album.scss';
import deleteicon from '../../assets/icons/delete-white.svg';
import edit from '../../assets/icons/edit-black.svg';
import albumicon from '../../assets/icons/album-black-24.svg';
import add from '../../assets/icons/add-black.svg';

function Album(props) {
    const renderButton = () => {
        if (props.handleOnClickCollection) {
            return <button 
            className="album__button"
            onClick={() => props.handleOnClickCollection(props.album, props.id)}
            title="Add to collection"
            >
                    <img 
                    src={add}
                    alt="Add"
                    className="album__button--image" 
                    />
                    <img 
                    src={albumicon} 
                    alt="to collection"
                    className="album__button--image" 
                    />
            </button>
        }
    }

    return (
        <li 
        style={{
            opacity: 0,
            animation: `fade-in .5s ${props.index * .25}s ease-out forwards`
        }}
        className="album">
            <div className="album__wrapper">
                <div className="album__img-container">
                    <img 
                    src={props.image} 
                    alt={props.albumTitle}
                    className="album__img"
                    />
                </div>
                <div className="album__container">
                    <div className="album__text-container">
                        <article className="album__info">
                            <h3 className="album__title">Album:</h3>
                            <p className="album__paragraph">{props.albumTitle}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Artist:</h3>
                            <p className="album__paragraph">{props.artist}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Release Date:</h3>
                            <p className="album__paragraph">{props.releaseDate}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Number of Tracks:</h3>
                            <p className="album__paragraph">{props.numTracks}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Medium:</h3>
                            <p className="album__paragraph">{props.medium}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Number of Copies:</h3>
                            <p className="album__paragraph">{props.numCopies}</p>
                        </article>
                        <article className="album__info">
                            <h3 className="album__title">Description:</h3>
                            <p className="album__paragraph">{props.description}</p>
                        </article>
                    </div>
                </div>
            </div>
            <div className="album__buttons">
                {renderButton()}
                <Link to={`/home/collection/${props.id}/edit`}>
                    <button 
                    className="album__button"
                    title="Edit"
                    >
                        <img 
                        src={edit} 
                        alt="Edit"
                        className="album__button--image" 
                        />
                    </button>
                </Link>
                <button 
                className="album__button album__button--delete"
                onClick={() => props.handleOnClickDelete(props.id)}
                title="Delete" 
                >
                    <img 
                    src={deleteicon} 
                    alt="Delete" 
                    className="album__button--image"
                    />
                </button>
            </div>
        </li>
    )
}

export default Album;