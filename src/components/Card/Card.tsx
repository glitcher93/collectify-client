import { Switch, Route, Link } from 'react-router-dom';
import CollectionPage from '../../pages/CollectionPage';
import EditCollectionItemPage from '../../pages/EditCollectionItemPage';
import EditWishlistItemPage from '../../pages/EditWishlistItemPage';
import SearchPage from '../../pages/SearchPage';
import WishListPage from '../../pages/WishListPage';
import AddAlbumPage from '../../pages/AddAlbumPage';
import './Card.scss';

function Card() {
    return (
        <div className="main__card">
            <div className="main__button-container">
                <Link to="/home/collection">
                    <button className="main__button">Collection</button>
                </Link>
                <Link to="/home/wishlist" >
                    <button className="main__button">Wishlist</button>
                </Link>
                <Link to="/home/search">
                    <button className="main__button main__button--no-margin">Search</button>
                </Link>
                <Link to="/home/add-album">
                    <button className="main__button main__button--no-margin">Add An Album</button>
                </Link>
            </div>
            <Switch>
                <Route path='/' exact component={CollectionPage}/>
                <Route path='/home' exact component={CollectionPage}/>
                <Route path='/home/collection' exact component={CollectionPage}/>
                <Route path='/home/collection/:itemId/edit' component={EditCollectionItemPage}/>
                <Route path='/home/wishlist' exact component={WishListPage} />
                <Route path='/home/wishlist/:itemId/edit' component={EditWishlistItemPage} />
                <Route path='/home/search' component={SearchPage} />
                <Route path='/home/add-album' component={AddAlbumPage} />
            </Switch>
        </div>
    );
}

export default Card;