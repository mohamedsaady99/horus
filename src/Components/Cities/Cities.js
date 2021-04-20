import React from "react";
import edfu from "../../assets/images/edfu.jpg";
import abosimbl from "../../assets/images/abosimbl.jpg";
import Cataract from "../../assets/images/kataract.jpg";
import "./Cities.css";
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const Cities = () => {
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
    <div className="cities container ">
      <h2><span>02 </span> {t("cities.title")}</h2>
      <p className="cities-paragraph">{t("cities.paragraph")}</p>
      <div className="cities-group ">
        <div >
          <div className="main-city">
            <div className="overlay">
              <h4><span>33 <sup>o</sup>C</span> <span className="far fa-heart" onClick={addToFavorite}></span></h4>
              <h3><a href="#">{t("cities.aswan")}</a></h3>
              <p> {t("cities.cityTitle")}</p>
            </div>
          </div>
          <div className="details">
            <h4>{t("cities.details")}</h4>
            <table >
              <tbody>
                <tr>
                  <td>
                    {t("cities.ticket")} <strong> {t("cities.ticketPrice")}</strong>
                  </td>
                  <td>
                    {t("cities.season")} <strong> {t("cities.bestSeason")}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    {t("cities.average")} <strong> {t("cities.averageDay")}</strong>
                  </td>
                  <td>
                    {t("cities.program")} <strong> {t("cities.programType")}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="main-images">
            <img src={edfu} alt="aswan" title="Edfo temple" />
            <img src={Cataract} alt="aswan" title="Catarackt hotel" />
            <img src={abosimbl} alt="aswan" title="Aboseple temple" />
          </div>
        </div>
        <div>
          <div className="city sharm">
            <div className="overlay">
              <h4><span>27 <sup>o</sup>C</span> <i className="far fa-heart" onClick={addToFavorite}></i></h4>
              <h3><a href="#">{t("cities.sharm")}</a></h3>
              <p> {t("cities.cityTitle")}</p>
            </div>
          </div>
          <div className="city luxor">
            <div className="overlay">
              <h4><span>30 <sup>o</sup>C</span> <i className="far fa-heart" onClick={addToFavorite}></i></h4>
              <h3><a href="#">{t("cities.luxor")}</a></h3>
              <p> {t("cities.cityTitle")}</p>
            </div>
          </div>
          <div className="city aswan">
            <div className="overlay">
              <h4><span>20 <sup>o</sup>C</span> <i className="far fa-heart" onClick={addToFavorite}></i></h4>
              <h3><a href="#">{t("cities.giza")}</a></h3>
              <p> {t("cities.cityTitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cities;
