import './Hero.scss';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { UserProfile } from '../../utils/interfaces';
import { useEffect } from 'react';


function Hero() {

    const [user, setUser] = useState<UserProfile>({} as UserProfile)

    useEffect(() => {
        const token = sessionStorage.getItem("authorization")!.split(' ')[1];
        const decodedUser: UserProfile = jwt_decode(token);
        setUser(decodedUser);
    }, [])   

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