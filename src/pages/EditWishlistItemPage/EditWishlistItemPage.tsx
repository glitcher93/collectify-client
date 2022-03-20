import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './EditWishlistItemPage.scss';
import arrow from '../../assets/icons/arrow-back-black.svg';
import { Album } from '../../utils/interfaces';

function EditWishlistItemPage(props: { match: { params: { itemId: any; }; }; }) {

    const [wishlistItem, setWishlistItem] = useState<Album>({} as Album);
    const [medium, setMedium] = useState({
        value: "",
        required: false
    });
    const [numCopies, setNumCopies] = useState({
        value: 0,
        required: false
    });
    const [description, setDescription] = useState({
        value: "",
        required: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem("authorization")!.split(' ')[1];
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .get(`${serverURL}/wishlist/${props.match.params.itemId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setWishlistItem(response.data[0])
                setMedium({
                    ...medium,
                    value: response.data[0].medium
                })
                setNumCopies({
                    ...numCopies,
                    value: parseInt(response.data[0].numCopies),
                })
                setDescription({
                    ...description,
                    value: response.data[0].description,
                })
            })
            .catch(err => console.log(err))
            // eslint-disable-next-line
    }, [])

    const handleOnChange = (event: { target: { name: any; value: any; }; }) => {
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

    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
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
        const token = sessionStorage.getItem("authorization")!.split(' ')[1];
        axios
            .put(`http://localhost:8080/wishlist/${props.match.params.itemId}/update`, {
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

    if (isSubmitted) {
        return <Redirect to='/home/wishlist' />
    }

    return (
        <section className="edit-wishlist">
            <div className="edit-wishlist__header-container">
                <Link 
                to='/home/wishlist' 
                className="edit-wishlist__header-link"
                >
                    <img 
                    src={arrow} 
                    alt="Back" 
                    />
                </Link>
                <h3 className="edit-wishlist__title">Edit Wishlist Item</h3>
            </div>
            <div className="edit-wishlist-album">
                <div className="edit-wishlist-album__img-container">
                    <img 
                    src={wishlistItem.image} 
                    alt={wishlistItem.albumTitle}
                    className="edit-wishlist-album__img" 
                    />
                </div>
                <div className="edit-wishlist-album__container">
                    <div className="edit-wishlist-album__text-container">
                        <article className="edit-wishlist-album__info">
                            <h3 className="edit-wishlist-album__title">Album:</h3>
                            <p className="edit-wishlist-album__paragraph">{wishlistItem.albumTitle}</p>
                        </article>
                        <article className="edit-wishlist-album__info">
                            <h3 className="edit-wishlist-album__title">Artist:</h3>
                            <p className="edit-wishlist-album__paragraph">{wishlistItem.artist}</p>
                        </article>
                        <article className="edit-wishlist-album__info">
                            <h3 className="edit-wishlist-album__title">Release Date:</h3>
                            <p className="edit-wishlist-album__paragraph">{wishlistItem.releaseDate}</p>
                        </article>
                        <article className="edit-wishlist-album__info">
                            <h3 className="edit-wishlist-album__title">Number of Tracks:</h3>
                            <p className="edit-wishlist-album__paragraph">{wishlistItem.numTracks}</p>
                        </article>
                    </div>
                    <form 
                    onSubmit={handleOnSubmit}
                    className="edit-wishlist-form">
                        <div className="edit-wishlist-form__container">
                            <div className="edit-wishlist-form__group">
                                <label 
                                className="edit-wishlist-form__label"
                                htmlFor="medium">
                                    Medium:
                                </label>
                                <select 
                                name="medium"
                                id="medium" 
                                value={medium.value}
                                onChange={handleOnChange}
                                className={`edit-wishlist-form__select ${medium.required ? "edit-wishlist-form__select--invalid" : ""}`}
                                >
                                    <option value="" disabled>Please Select</option>
                                    <option value="CD">CD</option>
                                    <option value="Vinyl">Vinyl</option>
                                    <option value="Casette">Casette</option>
                                </select>
                            </div>
                            <div className="edit-wishlist-form__group">
                                <label 
                                className="edit-wishlist-form__label"
                                htmlFor="numCopies">
                                    Number of Copies:
                                </label>
                                <input 
                                type="number"
                                name="numCopies" 
                                id="numCopies" 
                                defaultValue={wishlistItem.numCopies}
                                onChange={handleOnChange}
                                className={`edit-wishlist-form__input ${numCopies.required ? "edit-wishlist-form__input--invalid" : ""}`}
                                />
                            </div>
                            <div className="edit-wishlist-form__group">
                                <label 
                                className="edit-wishlist-form__label"
                                htmlFor="description">
                                        Description:
                                </label>
                                <textarea 
                                name="description" 
                                id="description"
                                defaultValue={wishlistItem.description}
                                onChange={handleOnChange}
                                className={`edit-wishlist-form__textarea ${description.required ? "edit-wishlist-form__textarea--invalid" : ""}`}
                                placeholder="Provide a description..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="edit-wishlist-form__buttons">
                            <button 
                            type="submit"
                            className="edit-wishlist-form__button"
                            >
                                Save
                            </button>
                            <Link to='/home/wishlist'>
                                <button 
                                className="edit-wishlist-form__button edit-wishlist-form__button--cancel "
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

export default EditWishlistItemPage;