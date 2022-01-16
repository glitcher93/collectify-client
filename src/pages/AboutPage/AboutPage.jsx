import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss'
import nigel from '../../assets/images/nigel.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

function AboutPage() {

    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("authorization")) {
            setHasAccess(true);
        }
    }, [])

    if (!hasAccess) {
        return (
        <>
            <p>Error 403: Access forbidden</p>
            <Link to='/'>
                Click here to go back
            </Link>
        </>
        )
    }

    return (
        <>
            <PageHeader />
            <main className="about-main">
                <section className="about">
                    <div className="about__wrapper">
                        <div className="about__img-container">
                            <img 
                            src={nigel} 
                            alt="Nigel D'Souza"
                            className="about__img"
                            />
                        </div>
                        <div className="about__text-container">
                            <h2 className="about__title">About the Developer</h2>
                            <p className="about__paragraph">Hi everyone! My name is Nigel D'Souza and this is my Capstone project, Collectify. As an avid music collector, I always found it hard to archive my personal collection, because I found that I would always lose or misplace my own written record.</p>
                            <p className="about__paragraph">This app allows a user to archive their own collection through the use of Spotify's API, as well as the MySQL database, Express and Node.js to store the information and retrieve information via an Express server, and React, React Router DOM and Sass provide the User Interface and Design. I hope you enjoy the functionality of my project!</p>
                        </div>
                    </div>
                    <div className="about__wrapper-two">
                        <div className="about__header-container">
                            <h2 className="about__title">Contact</h2>
                        </div>
                        <div className="about__link-container">
                            <div className="about__item">
                                <a 
                                className="about__item--link" 
                                href="https://www.linkedin.com/in/nigel-d-souza/"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                                </a>
                                <p className="about__item--paragraph">Connect with me on LinkedIn!</p>
                            </div>
                            <div className="about__item">
                                <a 
                                className="about__item--link" 
                                href="https://github.com/glitcher93"
                                >
                                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                                </a>
                                <p className="about__item--paragraph">Check out my Github profile!</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>
            </main>
            <PageFooter />
        </>
    );
}

export default AboutPage;