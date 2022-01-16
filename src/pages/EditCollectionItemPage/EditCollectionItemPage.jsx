import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './EditCollectionItemPage.scss';
import arrow from '../../assets/icons/arrow-back-black.svg';

function EditCollectionItemPage(props) {

    const [collectionItem, setCollectionItem] = useState([]);
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
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem("authorization").split(' ')[1];
        axios
            .get(`http://localhost:8080/collection/${props.match.params.itemId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setCollectionItem(response.data[0])
                setMedium({
                    ...medium,
                    value: response.data[0].medium
                })
                setNumCopies({
                    ...numCopies,
                    value: parseInt(response.data[0].numCopies)
                })
                setDescription({
                    ...description,
                    value: response.data[0].description
                })
            })
            .catch(err => console.log(err))
            // eslint-disable-next-line
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

    const handleOnSubmit = (event) => {
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
        if (!medium.value || !numCopies.value || !description.value ) {
            return;
        }
        const token = sessionStorage.getItem("authorization").split(' ')[1];
        axios
            .put(`http://localhost:8080/collection/${props.match.params.itemId}/update`, {
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .catch(err => console.log(err))
        setIsSubmitted(true);
        alert("Item successfully updated!");
    }

    if(isSubmitted) {
        return <Redirect to='/home/collection' />
    }

    return (
        <section className="edit-collection">
            <div className="edit-collection__header-container">
                <Link 
                to='/home/collection' 
                className="edit-collection__header-link"
                >
                    <img 
                    src={arrow} 
                    alt="Back" />
                </Link>
                <h3 className="edit-collection__title">Edit Collection Item</h3>
            </div>
            <div className="edit-collection-album">
                <div className="edit-collection-album__img-container">
                    <img 
                    src={collectionItem.image} 
                    alt={collectionItem.albumTitle}
                    className="edit-collection-album__img" 
                    />
                </div>
                <div className="edit-collection-album__container">
                    <div className="edit-collection-album__text-container">
                        <article className="edit-collection-album__info">
                            <h3 className="edit-collection-album__title">Album:</h3>
                            <p className="edit-collection-album__paragraph">{collectionItem.albumTitle}</p>
                        </article>
                        <article className="edit-collection-album__info">
                            <h3 className="edit-collection-album__title">Artist:</h3>
                            <p className="edit-collection-album__paragraph">{collectionItem.artist}</p>
                        </article>
                        <article className="edit-collection-album__info">
                            <h3 className="edit-collection-album__title">Release Date:</h3>
                            <p className="edit-collection-album__paragraph">{collectionItem.releaseDate}</p>
                        </article>
                        <article className="edit-collection-album__info">
                            <h3 className="edit-collection-album__title">Number of Tracks:</h3>
                            <p className="edit-collection-album__paragraph">{collectionItem.numTracks}</p>
                        </article>
                    </div>
                    <form 
                    onSubmit={handleOnSubmit}
                    className="edit-collection-form">
                        <div className="edit-collection-form__container">
                            <div className="edit-collection-form__group">
                                <label 
                                className="edit-collection-form__label"
                                htmlFor="medium">
                                    Medium:
                                </label>
                                <select 
                                name="medium"
                                id="medium" 
                                value={medium.value}
                                onChange={handleOnChange}
                                className={`edit-collection-form__select ${medium.required ? "edit-collection-form__select--invalid" : ""}`}
                                >
                                    <option value="" disabled>Please Select</option>
                                    <option value="CD">CD</option>
                                    <option value="Vinyl">Vinyl</option>
                                    <option value="Casette">Casette</option>
                                </select>
                            </div>
                            <div className="edit-collection-form__group">
                                <label 
                                className="edit-collection-form__label"
                                htmlFor="numCopies">
                                    Number of Copies:
                                </label>
                                <input 
                                type="number"
                                name="numCopies" 
                                id="numCopies" 
                                defaultValue={collectionItem.numCopies}
                                onChange={handleOnChange}
                                className={`edit-collection-form__input ${numCopies.required ? "edit-collection-form__input--invalid" : ""}`}
                                />
                            </div>
                            <div className="edit-collection-form__group">
                                <label 
                                className="edit-collection-form__label"
                                htmlFor="description">
                                        Description:
                                </label>
                                <textarea 
                                name="description" 
                                id="description"
                                defaultValue={collectionItem.description}
                                onChange={handleOnChange}
                                className={`edit-collection-form__textarea ${description.required ? "edit-collection-form__textarea--invalid" : ""}`}
                                placeholder="Provide a description..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="edit-collection-form__buttons">
                            <button 
                            type="submit"
                            className="edit-collection-form__button"
                            >
                                Save
                            </button>
                            <Link to='/home/collection'>
                                <button 
                                className="edit-collection-form__button edit-collection-form__button--cancel"
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EditCollectionItemPage;