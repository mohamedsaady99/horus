import React, { useState } from "react";
import "./BookingForm.css";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
   const { t, i18n } = useTranslation();
   const [movingFrom, setMovingFrom] = useState('');
   const [movingTo, setMovingTo] = useState('');
   const [movingDate, setMovingDate] = useState('');
   const [backDate, setBackDate] = useState('');
   return (
      <div>
         <div className="booking">
            <div className="input-group">
               <div className="input-group-text">
                  <input className="form-control"
                     type="text"
                     value={movingFrom}
                     placeholder={t("booking.from")}
                     onChange={e => {
                        setMovingFrom(
                           e.target.value
                        )
                     }} />
               </div>
               <div className="input-group-text">
                  <input className="form-control"
                     type="text"
                     value={movingTo}
                     placeholder={t("booking.to")}
                     onChange={e => {
                        setMovingTo(
                           e.target.value
                        )
                     }} />
               </div>
               <div className="input-group-text">
                  <input className="form-control"
                     type="date"
                     value={movingDate}
                     onChange={e => {
                        setMovingDate(
                           e.target.value
                        )
                     }} />
                  <i class="fas fa-calendar-alt"></i>
               </div>
               <div className="input-group-text">
                  <input className="form-control"
                     type="date"
                     value={backDate}
                     onChange={e => {
                        setBackDate(
                           e.target.value
                        )
                     }} />
                  <i class="fas fa-calendar-alt"></i>
               </div>
               <div className="input-group-text search">
                  <input className="form-control search" type="submit" value={t("booking.search")} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default BookingForm;
