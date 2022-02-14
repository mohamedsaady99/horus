import React from "react";
import tahrir from "../../assets/images/tahrir.jpg";
import mummies from "../../assets/images/mummies.jpg";
import kataract from "../../assets/images/kataract.jpg";
import phila from "../../assets/images/Philae_Island,_Aswan.jpg";
import video from "../../assets/videos/video.mp4";
import video2 from "../../assets/videos/video2.mp4";
import { useTranslation } from 'react-i18next';
import $ from 'jquery';
import './Community.css';

const Community = () => {
    const { t, i18n } = useTranslation();
    const addToFavorite = () => {
        $('.fa-heart').on('click', function () {
            if ($(this).hasClass('far')) {
                $(this).removeClass('far');
                $(this).addClass('fas');
            }
            else if ($('.fa-heart').hasClass('fas')) {
                $(this).removeClass('fas');
                $(this).addClass('far');
            }
        });
    }
    return (
        <div className="community container">
            <h2><span>03</span> {t("Community.title")}</h2>
            <p className="community-paragraph">   {t("Community.paragraph")}</p>
            <p dir="auto">This is a paragraph that starts with a latin character</p>
            <p dir="auto">هذا النص يستخدم حروف عربية</p>
            <div className="community-group">
                <div className="  posts ">
                    <div>
                        <div className="post">
                            <div >
                                <img src={mummies} alt="aswan" title="mummies " />
                            </div>
                            <div className="post-details">
                                <h3><a href="#">{t("Community.p1")}</a></h3>
                                <p>{t("Community.p")}</p>
                                <h5><span> {t("Community.time")}</span> 212 <i className="far fa-heart" onClick={addToFavorite}></i></h5>
                            </div>
                        </div>
                        <div className="post mt-3 mb-3">
                            <div >
                                <img src={tahrir} alt="aswan" title="tahrir " />
                            </div>
                            <div className="post-details">
                                <h3><a href="#">{t("Community.p2")}</a></h3>
                                <p>{t("Community.p")}</p>
                                <h5><span>{t("Community.time")}</span> 255 <i className="far fa-heart" onClick={addToFavorite}></i></h5>
                            </div>
                        </div>
                        <div className="post mb-3">
                            <div >
                                <img src={kataract} alt="aswan" title="katarct" />
                            </div>
                            <div className="post-details">
                                <h3><a href="#">{t("Community.p3")}</a></h3>
                                <p>{t("Community.p")}</p>
                                <h5><span>{t("Community.time")}</span> 432 <i className="far fa-heart" onClick={addToFavorite}></i></h5>
                            </div>
                        </div>
                        <div className="post">
                            <div >
                                <img src={phila} alt="aswan" title="katarct" />
                            </div>
                            <div className="post-details">
                                <h3><a href="#">{t("Community.p4")}</a></h3>
                                <p>{t("Community.p")}</p>
                                <h5><span>{t("Community.time")}</span> 262 <i className="far fa-heart" onClick={addToFavorite}></i></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="videos">
                        <div>
                            <video controls>
                                <source src={video} />
                            </video>
                            <div className="description">
                                <h5><a href="#">{t("Community.p5")}</a></h5>
                                <p>{t("Community.p")}</p>
                                <h6><span>{t("Community.time")}</span> 666 <i className="far fa-heart" onClick={addToFavorite}></i></h6>
                            </div>
                        </div>
                        <div className="mt-3">
                            <video controls>
                                <source src={video2} />
                            </video>
                            <div className="description">
                                <h5><a href="#">{t("Community.p6")}</a></h5>
                                <p>{t("Community.p")}</p>
                                <h6><span>{t("Community.time")}</span> 634 <i className="far fa-heart" onClick={addToFavorite}></i></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Community;
