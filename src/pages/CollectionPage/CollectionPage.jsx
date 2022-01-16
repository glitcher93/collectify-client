import './CollectionPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CollectionList from '../../components/CollectionList';


function CollectionPage() {
    
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .get('http://localhost:8080/collection', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setCollection(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleOnClickDelete = (id) => {
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        axios
            .delete(`http://localhost:8080/collection/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                axios
                    .get(`http://localhost:8080/collection`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        setCollection(response.data)
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="collection">
                <h3 className="collection__title">Your Collection</h3>
                <CollectionList 
                collection={collection}
                handleOnClickDelete={handleOnClickDelete} 
                />
        </section>
    );
}

export default CollectionPage