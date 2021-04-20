import React, { useEffect, useState } from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import $ from 'jquery';
import fire from './../../firebase';
import { NavLink } from 'react-router-dom';
function Contact() {
    const { t, i18n } = useTranslation();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const clearInput = () => {
        setEmail(" ");
        setPassword(" ");
    };
    const clearError = () => {
        setEmailError(" ");
        setPasswordError(" ");
    };
    const handleSignUp = () => {
        clearError();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/email-already-in-use":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
        $('#login').slideUp();
        $('#sign-up').slideDown();

    }
    const handleLogin = () => {
        clearError();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
        $('#sign-up').slideUp();
        $('#login').slideDown();
        $('#login').css("display", 'block');
    }

    const authListener = (user) => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInput();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);
    return (
        <div>
            <div className="container mt-5">
                <h2><span style={{ color: "#7E60FA" }}>04</span> {t("contact.title")}</h2>
                <p className="contact-paragraph">{t("contact.paragraph")}</p>
                <div className="contact">
                    <div className="overlay">
                        <div className="contact-details">
                            <h4>{t("contact.horus")}</h4>
                            <h2>{t("contact.organizeTravel")}</h2>
                            <p>{t("contact.paragraph")}</p>
                            <a href="#"><i className="fab fa-facebook fa-2x social"></i></a>
                            <a href="#"><i className="fab fa-instagram  fa-2x social"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-2x social"></i></a>
                        </div>
                        <div>
                            <button onClick={handleSignUp}>{t("contact.signUp")}</button>
                            <button onClick={handleLogin}>{t("contact.login")}</button>
                            <div id="sign-up">
                                <h2>{t("contact.signUp")}</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="email" name="email" placeholder={t("contact.email")} value={email} onChange={event => { setEmail(event.target.value); }} />
                                    <p className="error">{emailError}</p>
                                    <input type="password" name="name" placeholder={t("contact.password")} value={password} onChange={event => { setPassword(event.target.value); }} /><br />
                                    <p className="error">{passwordError}</p>
                                    <input type="checkbox" name="Checkbox" /> {t("contact.termOfPolicy")}<br />
                                    {(emailError === " " && passwordError === " ") ? (
                                        <>
                                            <NavLink to="/dashboard" className="nav-link" onClick={handleSignUp}> {t('contact.signUp')}</NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink to="" className="nav-link" onClick={handleSignUp}> {t('contact.signUp')}</NavLink>
                                        </>
                                    )}
                                </form>
                            </div>
                            <div id="login">
                                <h2>{t("contact.login")}</h2>
                                <form className="" onSubmit={handleSubmit}>
                                    <input type="email" name="email" placeholder={t("contact.email")} value={email} onChange={event => { setEmail(event.target.value); }} />
                                    <p className="error">{emailError}</p>
                                    <input type="password" name="name" placeholder={t("contact.password")} value={password} onChange={event => { setPassword(event.target.value); }} /><br />
                                    <p className="error">{passwordError}</p>
                                    {(emailError === " " && passwordError === " ") ? (
                                        <>
                                            <NavLink to="/dashboard" className="nav-link" onClick={handleLogin}> {t('contact.login')}</NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink to="" className="nav-link" onClick={handleLogin}> {t('contact.login')}</NavLink>
                                        </>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;