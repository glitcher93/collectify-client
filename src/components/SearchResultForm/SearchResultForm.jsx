import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './SearchResultForm.scss'


function SearchResultForm(props) {

    const [medium, setMedium] = useState({
        value: "",
        required: false
    });
    const [numCopies, setNumCopies] = useState({
        value: parseInt(0),
        required: false
    });
    const [description, setDescription] = useState({
        value: "",
        required: false
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("authorization")) {
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const decodedUser = jwt_decode(token);
            setUser(decodedUser);
        }
    }, [])

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
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

    const addToCollection = (event) => {
        event.preventDefault();
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
        if (!medium.value || !numCopies.value || !description.value) {
            return;
        }
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .post('http://localhost:8080/collection', {
                image: props.image,
                albumTitle: props.albumTitle,
                artist: props.artist,
                releaseDate: props.releaseDate,
                numTracks: props.numTracks,
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                setMedium({
                    ...medium,
                    value: ""
                });
                setNumCopies({
                    ...numCopies,
                    value: parseInt(0)
                })
                setDescription({
                    ...description,
                    value: ""
                });
            })
            .catch(err => console.log(err))
        alert("Album added to collection!")
    }
    
    const addToWishList = (event) => {
        event.preventDefault();
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
        if (!medium.value || !numCopies.value || !description.value) {
            return;
        }
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .post('http://localhost:8080/wishlist', {
                image: props.image,
                albumTitle: props.albumTitle,
                artist: props.artist,
                releaseDate: props.releaseDate,
                numTracks: props.numTracks,
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(() => {
                setMedium({
                    ...medium,
                    value: ""
                });
                setNumCopies({
                    ...numCopies,
                    value: parseInt(0)
                })
                setDescription({
                    ...description,
                    value: ""
                });
            })
            .catch(err => console.log(err))
        alert("Album added to wishlist!");
    }

    return (
        <form 
        className="search-result-form">
            <div className="search-result-form__container">
                <div className="search-result-form__group">
                    <label 
                    className="search-result-form__label"
                    htmlFor="medium">
                        Medium:
                    </label>
                    <select 
                    name="medium"
                    id="medium" 
                    value={medium.value} 
                    onChange={handleOnChange}
                    className={`search-result-form__select ${medium.required ? "search-result-form__select--invalid" : ""}`}
                    >
                        <option value="" disabled>Please Select</option>
                        <option value="CD">CD</option>
                        <option value="Vinyl">Vinyl</option>
                        <option value="Casette">Casette</option>
                    </select>
                </div>
                <div className="search-result-form__group">
                    <label 
                    className="search-result-form__label"
                    htmlFor="numCopies">
                        Number of Copies:
                    </label>
                    <input 
                    type="number"
                    name="numCopies" 
                    id="numCopies" 
                    value={numCopies.value} 
                    onChange={handleOnChange}
                    className={`search-result-form__input ${numCopies.required ? "search-result-form__input--invalid" : ""}`}
                    />
                </div>
                <div className="search-result-form__group">
                    <label 
                    className="search-result-form__label"
                    htmlFor="description">
                            Description:
                    </label>
                    <textarea 
                    name="description" 
                    id="description"
                    value={description.value}
                    onChange={(event) => handleOnChange(event)}
                    className={`search-result-form__textarea ${description.required ? "search-result-form__textarea--invalid" : ""}`}
                    placeholder="Provide a description..."
                    ></textarea>
                </div>
            </div>
            <div className="search-result-form__buttons">
                <button 
                onClick={(event) => {
                    addToCollection(event)
                    }}
                className="search-result-form__button"
                >
                        + Add to Collection
                </button>
                <button 
                onClick={(event) => addToWishList(event)}
                className="search-result-form__button"
                >
                    + Add to Wishlist
                </button>
            </div>
        </form>
    );
}

export default SearchResultForm;