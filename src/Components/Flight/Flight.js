import $ from 'jquery';
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import downstairs from '../../assets/images/downstairs.jpg';
import driver from '../../assets/images/driver.jpg';
import './Flight.css';
import BookingForm from '../BookingForm/BookingForm';
import Footer from '../Footer/Footer';
const Flight = () => {
    return (
        <div >
            <div className=" flight container text-center">
                <div className="booking-bg "></div>
                <BookingForm />
            </div>
            <Footer/>  
        </div>

    );
}

export default Flight;
