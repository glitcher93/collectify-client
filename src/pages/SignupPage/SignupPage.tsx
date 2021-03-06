import axios from "axios";
import { useState, FormEvent, ChangeEvent } from 'react';
import { Redirect, Link } from "react-router-dom";
import './SignupPage.scss';
import album from '../../assets/icons/album-white-36.svg';
import LandingPageHeader from "../../components/LandingPageHeader";
import PageFooter from "../../components/PageFooter";


function SignUpPage() {

    const [firstName, setFirstName] = useState({
        value: "",
        required: false
    });
    const [lastName, setLastName] = useState({
        value: "",
        required: false
    });
    const [username, setUsername] = useState({
        value: "",
        required: false
    });
    const [password, setPassword] = useState({
        value: "",
        required: false
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        required: false
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case "firstName":
                setFirstName({
                    value,
                    required: false
                })
                break;
            case "lastName":
                setLastName({
                    value,
                    required: false
                })
                break;
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
            case "confirmPassword":
                setConfirmPassword({
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
        if (!firstName.value) {
            setFirstName({
                ...firstName,
                required: true
            })
        }
        if (!lastName.value) {
            setLastName({
                ...lastName,
                required: true
            })
        }
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
        if (!confirmPassword.value) {
            setConfirmPassword({
                ...confirmPassword,
                required: true
            })
        }
        if (confirmPassword.value !== password.value) {
            alert("Passwords do not match");
            setConfirmPassword({
                ...confirmPassword,
                required: true
            })
        }
        if (!firstName.value || !lastName.value || !username.value || !password.value || !confirmPassword.value) {
            return;
        }
        const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
        axios
            .post(`${serverURL}/signup`, {
                firstName: firstName.value,
                lastName: lastName.value,
                username: username.value,
                password: password.value
            })
            .then(() => {
                alert("User successfully signed up");
                setIsSubmitted(true)
            })
            .catch(() => alert("Username already exists, please choose another username"));
        
    }

    if (isSubmitted) {
        return <Redirect to='/' />
    }
    
    return (
        <>
            <LandingPageHeader />
            <main className="signup">
                <div className="signup__card">
                    <div className="signup__title-container">
                        <img src={album} alt="album" />
                        <h2 className="signup__title">Collectify</h2>
                    </div>
                    <form 
                    onSubmit={handleOnSubmit}
                    method="POST"
                    className="signup-form">
                        <div className="signup-form__form-group">
                            <label 
                            htmlFor="firstName"
                            className="signup-form__label">
                                First Name
                            </label>
                            <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            value={firstName.value}
                            onChange={handleOnChange} 
                            placeholder="Enter first name here"
                            className={`signup-form__input ${firstName.required ? "signup-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="signup-form__form-group">
                            <label 
                            htmlFor="lastName"
                            className="signup-form__label">
                                Last Name
                            </label>
                            <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            value={lastName.value}
                            onChange={handleOnChange}  
                            placeholder="Enter last name here"
                            className={`signup-form__input ${lastName.required ? "signup-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="signup-form__form-group">
                            <label 
                            htmlFor="username"
                            className="signup-form__label">
                                Username
                            </label>
                            <input 
                            type="text" 
                            id="username" 
                            name="username"
                            value={username.value} 
                            onChange={handleOnChange} 
                            placeholder="Enter username here"
                            className={`signup-form__input ${username.required ? "signup-form__input--invalid" : ""}`} 
                            />
                        </div>
                        <div className="signup-form__form-group">
                            <label 
                            htmlFor="password"
                            className="signup-form__label">
                                Password
                            </label>
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password.value} 
                            onChange={handleOnChange}
                            placeholder="Enter password here"
                            className={`signup-form__input ${password.required ? "signup-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="signup-form__form-group">
                        <label 
                            htmlFor="confirmPassword"
                            className="signup-form__label">
                                Confirm Password
                            </label>
                            <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={confirmPassword.value} 
                            onChange={handleOnChange}
                            placeholder="Enter password here"
                            className={`signup-form__input ${confirmPassword.required ? "signup-form__input--invalid" : ""}`}
                            />
                        </div>
                        <div className="signup-form__button-container">
                            <button 
                            type="submit"
                            className="signup-form__button">
                                Sign Up!
                            </button>
                        </div>  
                    </form>
                    <div className="signup__text">
                        <p className="signup__paragraph">Already a member?</p>
                        <Link 
                        to='/login'
                        className="signup__link">
                            Login
                        </Link>
                    </div>
                </div>
            </main>
            <PageFooter />
        </>
    )
}

export default SignUpPage;