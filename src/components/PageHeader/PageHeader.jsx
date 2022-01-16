import { Link, NavLink, useLocation } from 'react-router-dom';
import './PageHeader.scss';
import album from '../../assets/icons/album-white-36.svg';



function PageHeader() {
    const { pathname } = useLocation();

    const logout = (event) => {
        sessionStorage.removeItem("authorization");
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__container">
                    <Link to="/home" className="header__link">
                        <img src={album} alt="album" className="header__image" />
                    </Link>
                    <Link to="/home" className="header__link">
                        <h1 className="header__title">
                            Collectify
                        </h1>
                    </Link>
                </div>
                <div className="header__container">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <NavLink 
                                to="/home"
                                isActive={() => {
                                    if (pathname.startsWith('/home/collection/') && pathname.endsWith('/edit')) {
                                        return true;
                                    }
                                    if (pathname.startsWith('/home/wishlist/') && pathname.endsWith('/edit') ) {
                                        return true;
                                    }
                                    return ['/home', '/home/collection', '/home/wishlist', '/home/search'].includes(pathname)
                                }} 
                                className="header__link" 
                                activeClassName="header__link--active"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink 
                                to="/about" 
                                className="header__link" 
                                activeClassName="header__link--active"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink 
                                to="/" 
                                className="header__link"
                                onClick={logout} 
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default PageHeader;