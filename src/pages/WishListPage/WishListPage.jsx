import './WishListPage.scss'
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import WishList from '../../components/WishList/WishList';

function WishListPage() {

    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (sessionStorage.getItem("authorization")) {
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        const decodedUser = jwt_decode(token);
        setUser(decodedUser);
        axios
            .get(`http://localhost:8080/wishlist`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setWishlist(response.data)
            })
        }
    }, [])

    const handleOnClickDelete = (id) => {
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .delete(`http://localhost:8080/wishlist/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                axios
                    .get(`http://localhost:8080/wishlist`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        setWishlist(response.data)
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    const handleOnClickCollection = (album, id) => {
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .post(`http://localhost:8080/collection`, {
                image: album.image,
                albumTitle: album.albumTitle,
                artist: album.artist,
                releaseDate: album.releaseDate,
                numTracks: album.numTracks,
                medium: album.medium,
                numCopies: album.numCopies,
                description: album.description,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                axios
                    .delete(`http://localhost:8080/wishlist/${id}`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        axios
                            .get(`http://localhost:8080/wishlist`, {
                                headers: {
                                    authorization: `Bearer ${token}`
                                }
                            })
                            .then((response) => {
                                setWishlist(response.data)
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        alert("Item successfully posted to your collection!");
    }

    return (
        <section className="wishlist">
            <h3 className="wishlist__title">Your Wishlist</h3>
            <WishList 
            wishlist={wishlist}
            handleOnClickDelete={handleOnClickDelete}
            handleOnClickCollection={handleOnClickCollection}
            />
        </section>
    );
}

export default WishListPage;