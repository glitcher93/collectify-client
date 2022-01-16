import LandingPageHeader from '../../components/LandingPageHeader';
import './LandingPage.scss';
import { Link } from 'react-router-dom';
import PageFooter from '../../components/PageFooter';
import spotifyLogo from '../../assets/images/spotify-logo.png';
import vinylRecord from '../../assets/images/vinyl-record.png';
import wishList from '../../assets/images/wish-list.png';

function LandingPage() {
    return (
        <>
            <LandingPageHeader />
            <main className='landing'>
                <section className='landing__section landing__info'>
                    <div className="landing__wrapper landing__wrapper--special">
                        <div className="landing__text-container landing__text-container--special">
                            <h2 className='landing__title'>Welcome to Collectify!</h2>
                            <p className='landing__paragraph'>Collectify helps a user to archive their physical music collection with ease!</p>
                        </div>
                    </div>
                </section>
                <section className='landing__section landing__search'>
                    <div className="landing__wrapper">
                        <div className="landing__image-container">
                            <img 
                            src={spotifyLogo}
                            alt="Spotify"
                            className='landing__image' 
                            />
                        </div>
                        <div className="landing__text-container">
                            <h2 className='landing__title'>Searching for albums?</h2>
                            <p className='landing__paragraph'>Our search functionality makes use of Spotify to find whatever album you are looking for.</p>
                            <p className='landing__paragraph'>If the album you are looking for doesn't exist, you can easily add it to your collection through our Add New Album feature!</p>
                        </div>
                    </div>
                </section>
                <section className='landing__section landing__wishlists'>
                    <div className="landing__wrapper">
                        <div className="landing__text-container">
                            <h2 className='landing__title'>Wishlists</h2>
                            <p className='landing__paragraph'>You can even create a wishlist of albums you would like to one day own! Once you own it you can add it to your collection with the click of a button.</p>
                        </div>
                        <div className="landing__image-container landing__image-container--special">
                            <img 
                            src={wishList} 
                            alt="Wishlist"
                            className='landing__image'
                            />
                        </div>
                    </div>
                </section>
                <section className='landing__section landing__get-started'>
                    <div className="landing__wrapper">
                        <div className="landing__image-container">
                            <img 
                            src={vinylRecord} 
                            alt="Vinyl record" 
                            className='landing__image'
                            />
                        </div>
                        <div className="landing__text-container">
                            <h2 className='landing__title'>Get Started</h2>
                            <p className='landing__paragraph'>Become a member and start building your collection today!</p>
                            <Link to ='/signup'>
                                <button className='landing__button'>
                                    Sign Up!
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <PageFooter />
        </>
    )
}

export default LandingPage;