import React from 'react';
import './About.css';
import about from '../../assets/images/about.png';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="container">
            <div className=" about">
                <div>
                    <h2><span>01 </span>{t("about.title")}</h2>
                    <p>{t("about.paragraph")}</p>
                </div>
                <div>
                    <img src={about} alt="about" />
                </div>
            </div>
        </div>
    );
}
export default About;