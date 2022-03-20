import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import { Redirect, Link } from "react-router-dom";
import './LoginPage.scss';
import album from '../../assets/icons/album-white-36.svg';
import LandingPageHeader from "../../components/LandingPageHeader";
import PageFooter from "../../components/PageFooter";


function LoginPage() {
    
    const [username, setUsername] = useState({
        value: "",
        required: false
    });
    const [password, setPassword] = useState({
        value: "",
        required: false
    });
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case "username":
                setUsername({
                    value,
                    required: false
                })
                break;
            case "password":
                setPassword({
                    value,
                    required: false
                })
                break;
            default:
                console.log('default')
        }
    }

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username.value) {
            setUsername({
                ...username,
                required: true
            })
        }
        if (!password.value) {
            setPassword({
                ...password,
                required: true
            })
        }
        if (!username.value || !password.value) {
            return;
        }
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .post(`${serverURL}/login`, {
                username: username.value,
                password: password.value
            })
            .then((response) => {
                if (response.status === 200) {
                    sessionStorage.setItem("authorization", `Bearer ${response.data.token}`);
                    setIsLoggedIn(true);
                }
            })
            .catch(err => {
                alert("Username or password is incorrect");
                setUsername({
                    ...username,
                    required: true
                });
                setPassword({
                    ...password,
                    required: true
                })
            })
    }

    if (isLoggedIn) {
        return <Redirect to='/home' />
    }

    return (
        <>
            <LandingPageHeader />
            <main className="login">
                <div className="login__card">
                    <div className="login__title-container">
                        <img src={album} alt="album" />
                        <h2 className="login__title">Collectify</h2>
                    </div>
                    <form 
                    onSubmit={handleOnSubmit} 
                    method="POST"
                    className="login-form">
                        <div className="login-form__form-group">
                            <label 
                            htmlFor="username"
                            className="login-form__label">
                                Username
                            </label>
                            <input 
                            type="text" 
                            id="username" 
                            name="username"
                            value={username.value}
                            onChange={handleOnChange} 
                            placeholder="Enter username here"
                            className={`login-form__input ${username.required ? "login-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="login-form__form-group">
                            <label 
                            htmlFor="password"
                            className="login-form__label">
                                Password
                            </label>
                            <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={password.value}
                            onChange={handleOnChange}
                            placeholder="Enter password here"
                            className={`login-form__input ${password.required ? "login-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="login-form__button-container">
                            <button 
                            type="submit"
                            className="login-form__button">
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="login__text">
                        <p className="login__paragraph">Not a member?</p>
                        <Link 
                        to='/signup'
                        className="login__link">
                            Sign up
                        </Link>
                    </div>
                </div>
            </main>
            <PageFooter />
        </>
    )
}

export default LoginPage