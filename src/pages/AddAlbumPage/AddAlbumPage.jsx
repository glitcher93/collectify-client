import './AddAlbumPage.scss';
import { useRef, useState } from 'react';
import jwt_decode from "jwt-decode";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function AddAlbumPage() {
    const formRef = useRef();

    const token = sessionStorage.getItem("authorization").split(' ')[1];
    const decodedUser = jwt_decode(token);

    // eslint-disable-next-line
    const [user, setUser] = useState(decodedUser);
    const [image, setImage] = useState({
        value: "",
        required: false
    })
    const [albumTitle, setAlbumTitle] = useState({
        value: "",
        required: false
    });
    const [artist, setArtist] = useState({
        value: "",
        required: false
    });
    const [releaseDate, setReleaseDate] = useState({
        value: "",
        required: false
    });
    const [numTracks, setNumTracks] = useState({
        value: '',
        required: false
    });
    const [medium, setMedium] = useState({
        value: "",
        required: false
    });
    const [numCopies, setNumCopies] = useState({
        value: '',
        required: false
    });
    const [description, setDescription] = useState({
        value: "",
        required: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOnChange = (event) => {
        const { name, value, files } = event.target;
        switch (name) {
            case "image":
                setImage({
                    value: files[0],
                    required: false
                })
                break;
            case "albumTitle":
                setAlbumTitle({
                    value,
                    required: false
                })
                break;
            case "artist":
                setArtist({
                    value,
                    required: false
                })
                break;
            case "releaseDate":
                setReleaseDate({
                    value,
                    required: false
                })
                break;
            case "numTracks":
                setNumTracks({
                    value: parseInt(value),
                    required: false
                })
                break;
            case "medium":
                setMedium({
                    value,
                    required: false
                }) 
                break;
            case "numCopies":
                setNumCopies({
                    value: parseInt(value),
                    required: false
                })
                break;
            case "description":
                setDescription({
                    value,
                    required: false
                })
                break;
            default: 
                console.log('default');
        }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!image.value) {
            setImage({
                ...image,
                required: true
            })
        }
        if (!albumTitle.value) {
            setAlbumTitle({
                ...albumTitle,
                required: true
            })
        }
        if (!artist.value) {
            setArtist({
                ...artist,
                required: true
            })
        }
        if (!releaseDate.value) {
            setReleaseDate({
                ...releaseDate,
                required: true
            })
        }
        if (!numTracks.value) {
            setNumTracks({
                ...medium,
                required: true
            })
        }
        if (!medium.value) {
            setMedium({
                ...medium,
                required: true
            })
        }
        if (!numCopies.value) {
            setNumCopies({
                ...numCopies,
                required: true
            })
        }
        if (!description.value) {
            setDescription({
                ...description,
                required: true
            })
        }
        if (!image.value || !albumTitle.value || !artist.value || !releaseDate.value || !numTracks.value || !medium.value || !numCopies.value || !description.value ) {
            return;
        }
        const fd = new FormData(formRef.current);
        axios
            .post(`http://localhost:8080/collection/add-new-album`, fd, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .catch(err => console.log(err));
        alert('Album added successfully');
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return <Redirect to='/home/collection'/>
    }

    return (
        <section className="add-album">
            <h3 className="add-album__title">Add New Album</h3>
            <p className="add-album__paragraph">Own an album that can't be found in our search?</p>
            <p className="add-album__paragraph">No worries! Add an album to your collection using this form.</p>
            <form 
            className='add-album-form'
            encType='multipart/form-data'
            onSubmit={handleOnSubmit}
            ref={formRef}
            >
                <div className="add-album-form__group">
                    <label 
                    htmlFor="image" 
                    className="add-album-form__label"
                    >
                        Album Image:
                    </label>
                    <input 
                    type="file" 
                    name="image" 
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={(event) => handleOnChange(event)}
                    className='add-album-form__file' 
                    />
                    {image.required ? <p className="add-album-form__required-message">Please select a file</p> : ""}
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="albumTitle" 
                    className="add-album-form__label"
                    >
                        Album Title:
                    </label>
                    <input 
                    type="text" 
                    id="albumTitle" 
                    name='albumTitle'
                    value={albumTitle.value}
                    onChange={(event) => handleOnChange(event)}
                    placeholder='Enter album name'
                    className={`add-album-form__input ${albumTitle.required ? "add-album-form__input--invalid" : ""}`}
                    />
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="artist" 
                    className="add-album-form__label"
                    >
                        Artist:
                    </label>
                    <input 
                    type="text" 
                    id="artist" 
                    name='artist'
                    value={artist.value}
                    onChange={(event) => handleOnChange(event)}
                    placeholder='Enter artist name'
                    className={`add-album-form__input ${artist.required ? "add-album-form__input--invalid" : ""}`}
                    />
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="releaseDate" 
                    className="add-album-form__label"
                    >
                        Release Date:
                    </label>
                    <input 
                    type="text" 
                    id="releaseDate"
                    name="releaseDate"
                    value={releaseDate.value}
                    onChange={(event) => handleOnChange(event)}
                    placeholder='yyyy or yyyy-mm-dd'
                    className={`add-album-form__input ${releaseDate.required ? "add-album-form__input--invalid" : ""}`}
                    />
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="numTracks" 
                    className="add-album-form__label"
                    >
                        Number of Tracks:
                    </label>
                    <input 
                    type="number" 
                    id="numTracks"
                    name="numTracks"
                    value={numTracks.value}
                    onChange={(event) => handleOnChange(event)}
                    min={1}
                    placeholder={1}
                    className={`add-album-form__input add-album-form__input--number ${numTracks.required ? "add-album-form__input--invalid" : ""}`}
                    />
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="medium" 
                    className="add-album-form__label"
                    >
                        Medium:
                    </label>
                    <select 
                    name="medium" 
                    id="medium" 
                    value={medium.value}
                    onChange={(event) => handleOnChange(event)}
                    className={`add-album-form__select ${medium.required ? "add-album-form__select--invalid" : ""}`}
                    >
                        <option value="" disabled>Please Select</option>
                        <option value="CD">CD</option>
                        <option value="Vinyl">Vinyl</option>
                        <option value="Cassette">Cassette</option>
                    </select>
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="numCopies" 
                    className="add-album-form__label"
                    >
                        Number of Copies:
                    </label>
                    <input 
                    type="number" 
                    id="numCopies"
                    name="numCopies"
                    value={numCopies.value}
                    onChange={(event) => handleOnChange(event)}
                    className={`add-album-form__input add-album-form__input--number ${numCopies.required ? "add-album-form__input--invalid" : ""}`}
                    placeholder={0}
                    />
                </div>
                <div className="add-album-form__group">
                    <label 
                    htmlFor="description" 
                    className="add-album-form__label"
                    >
                        Description:
                    </label>
                    <textarea 
                    name="description" 
                    id="description"
                    value={description.value}
                    onChange={(event) => handleOnChange(event)}
                    className={`add-album-form__textarea ${description.required ? "add-album-form__textarea--invalid" : ""}`}
                    placeholder='Please enter a description...'
                    ></textarea>
                </div>
                <input 
                type="hidden"
                id="userId"
                name="userId"
                value={user.id}
                />
                <div className="add-album-form__button-container">
                    <button 
                    type="submit" 
                    className='add-album-form__button'
                    >
                        + Add to Collection
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AddAlbumPage;