import React from "react";
import "./header.css";
import BookingForm from "../BookingForm/BookingForm";
import { useTranslation } from 'react-i18next';

const Header = () => {
   const { t } = useTranslation();
   return (
      <div>
         <div className="header-bg">
            <div className=" overlay">
               <h1>{t("header.title")}</h1>
               <p>{t("header.paragraph")}</p>
            </div>
         </div>
         <BookingForm/>
      </div>
   );
}
export default Header;
