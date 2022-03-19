import { Link, NavLink } from 'react-router-dom';
import './LandingPageHeader.scss';
import album from '../../assets/icons/album-white-36.svg';



function LandingPageHeader() {

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__container">
                    <Link to="/" className="header__link">
                        <img src={album} alt="album" className="header__image" />
                    </Link>
                    <Link to="/" className="header__link">
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
                                to="/login"
                                className="header__link" 
                                activeClassName="header__link--active"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink 
                                to="/signup" 
                                className="header__link" 
                                activeClassName="header__link--active"
                                >
                                    SignUp
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default LandingPageHeader;