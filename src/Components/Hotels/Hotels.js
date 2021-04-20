import React from 'react'
import HotelVideo from '../../assets/videos/hotel.mp4';
import hotel1 from '../../assets/images/h1.jpg';
import hotel2 from '../../assets/images/h2.jpg';
import hotel3 from '../../assets/images/h3.jpg';
import hotel4 from '../../assets/images/h4.jpg';
import hotel5 from '../../assets/images/h5.jpg';
import hotel6 from '../../assets/images/h6.jpg';
import hotel7 from '../../assets/images/h7.jpg';
import hotel8 from '../../assets/images/h8.jpg';
import hotel9 from '../../assets/images/h9.jpg';
import './Hotels.css';
import Footer from './../Footer/Footer';
import { useTranslation } from 'react-i18next';
function Hotels() {
    const { t, i18n } = useTranslation();
    return (
        <div className="hotels">
            <video autoPlay loop >
                <source src={HotelVideo} />
            </video>
            <h1> {t("hotels.title")}</h1>
            <div className="hotels-view container mb-5">
                <div className="hotel">
                    <div className="">
                        <img src={hotel1} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel1')} </h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 1,300</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel2} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel2')}  </h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 2,240</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel3} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel3')}  </h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 1,960</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel4} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel4')}</h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 3,730</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel5} />
                    </div>
                    <div className="hotel-details">
                        <h4> {t('hotels.hotel5')}</h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 2,820</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel6} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel6')} </h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 2,100</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel7} />
                    </div>
                    <div className="hotel-details">
                        <h4>{t('hotels.hotel7')} </h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 5,300</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel8} />
                    </div>
                    <div className="hotel-details">
                        <h4> {t('hotels.hotel8')}</h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 1,890</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
                <div className="hotel">
                    <div className="">
                        <img src={hotel9} />
                    </div>
                    <div className="hotel-details">
                        <h4> {t('hotels.hotel9')}</h4>
                        <p>{t('hotels.paragraph')}</p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <strong className="ml-5 mr-5"> EGP 4,140</strong>
                        <br />
                        <button>{t("hotels.book")}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hotels
