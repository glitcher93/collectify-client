import './Hero.scss';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';

function Hero() {

    const token = sessionStorage.getItem("authorization").split(' ')[1];
    const decodedUser = jwt_decode(token);

    // eslint-disable-next-line
    const [user, setUser] = useState(decodedUser)

    return (
        <section className="hero">
            <div className="hero__wrapper">
                <div className="hero_container">
                    <h2 className="hero__title">
                        Hello, {`${user.firstName}`}
                    </h2>
                    <p className="hero__paragraph">Start building your collection today!</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;