import './WishListPage.scss'
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import WishList from '../../components/WishList/WishList';
import { Album } from '../../utils/interfaces';
import { UserProfile } from '../../utils/interfaces';

function WishListPage() {

    const [wishlist, setWishlist] = useState<Album[]>([]);
    const [user, setUser] = useState<UserProfile>({} as UserProfile)

    useEffect(() => {
        if (sessionStorage.getItem("authorization")) {
        const token = sessionStorage.getItem("authorization")!.split(" ")[1];
        const decodedUser: UserProfile = jwt_decode(token);
        setUser(decodedUser);
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .get(`${serverURL}/wishlist`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setWishlist(response.data)
            })
        }
    }, [])

    const handleOnClickDelete = (id: number) => {
        const token = sessionStorage.getItem("authorization")!.split(" ")[1];
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .delete(`${serverURL}/wishlist/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                axios
                    .get(`${serverURL}/wishlist`, {
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

    const handleOnClickCollection = (album: Album, id: number) => {
        const token = sessionStorage.getItem("authorization")!.split(" ")[1];
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .post(`${serverURL}/collection`, {
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
                    .delete(`${serverURL}/wishlist/${id}`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        axios
                            .get(`${serverURL}/wishlist`, {
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