import $ from 'jquery';
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import downstairs from '../../assets/images/downstairs.jpg';
import driver from '../../assets/images/driver.jpg';
import './Bus.css';
import BookingForm from '../BookingForm/BookingForm';
import { withTranslation } from "react-i18next";
import { Translation } from "react-i18next";
class Bus extends Component {
    state ={
        pr:""
    }
    componentDidMount = () => {
        $('.seats  .bus a').on('click', function () {
            this.classList.add("selected-seat",'disabled');
        });
        $('.reset').on('click', function () {
            $('.seats  .bus a').removeClass('disabled');
            $('.seats  .bus a').removeClass('selected-seat');
        });
    }
    render() {
        return (
            <Translation>
                {(t) => (
                    <div className="container   text-center">
                        <div className="booking-bg"></div>
                        <BookingForm />
                        <h3 className="bus-h1">{t('bus.from')} <strong className="badge badge-success">{t('bus.travelFrom')}</strong> {t('bus.to')}  <strong className="badge badge-success">{t('bus.travelTo')}</strong></h3>
                        <div>
                            <div className="travel row mt-5">
                                <div className="col">
                                    <p><strong>{t('bus.travelFrom')} </strong></p>
                                    <strong className="badge bg-warning text-light">12:20 AM</strong>
                                </div>
                                <div className="col">
                                    <i className="fas fa-bus-alt" style={{ fontSize: 25 }}></i><br />
                                    <i className="fas fa-road" style={{ fontSize: 25 }}></i>
                                </div>
                                <div className="col">
                                    <p><strong>{t('bus.travelTo')} </strong></p>
                                    <strong className="badge bg-warning text-light">06:00 AM</strong>
                                </div>
                                <div className="col">
                                    <p><strong style={{ color: '#7E60FA' }}>170 EGP. </strong></p>
                                    <button className="book-btn"><NavLink to="# ">{t('bus.book')} </NavLink></button>                        </div>
                            </div>
                            <div className="travel row mt-5">
                                <div className="col">
                                    <p><strong>{t('bus.travelFrom')} </strong></p>
                                    <strong className="badge bg-warning text-light">09:10 PM</strong>
                                </div>
                                <div className="col">
                                    <i className="fas fa-bus-alt" style={{ fontSize: 25 }}></i><br />
                                    <i className="fas fa-road" style={{ fontSize: 25 }}></i>
                                </div>
                                <div className="col">
                                    <p><strong>{t('bus.travelTo')}</strong></p>
                                    <strong className="badge bg-warning text-light">03:00 PM</strong>
                                </div>
                                <div className="col">
                                    <p><strong style={{ color: '#7E60FA' }}>250 EGP. </strong></p>
                                    <button className="book-btn"><NavLink to="# ">{t('bus.book')}</NavLink></button>
                                </div>
                            </div>
                        </div>
                        <h4 className=" mt-5 ">  {t('bus.selectSeats')}  </h4>
                        <div className="row seats mb-5">
                            <div className=" availablity">
                                <div><a className="badge available"> </a> <strong> {t('bus.availableSeats')} </strong></div>
                                <div><a className="badge selected"> </a> <strong> {t('bus.selectedSeats')}  </strong></div>
                                <div><a className="badge unavailable">  </a> <strong>  {t('bus.unAvailableSeats')}  </strong></div>
                                <p> {t('bus.youSelected')}<span className="badge badge-secondary">{this.props.count} </span> {t('bus.seat')} </p>
                                <p> {t('bus.totalPrice')}<span className="badge badge-secondary ml-3 ">{this.props.totalPrice} </span> EGP</p>
                                <button className="book-btn"><NavLink to="# ">{t('bus.book')}</NavLink></button>{" "}
                                <button onClick={this.props.reset} className="book-btn reset "><NavLink to="#">{t('bus.cancel')}</NavLink></button>
                            </div>
                            <div className=" bus" >
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Can't select seat "><img src={downstairs} width="20px" /></a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">04</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">08</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">12</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">16</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Can't select seat "><img src={downstairs} width="20px" /></a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Can't select seat "><img src={downstairs} width="20px" /></a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">24</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">28</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">32</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">36</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">40</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">44</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">48</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">53</a>
                                <br />
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Cant select seat ">01</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">03</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">07</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">11</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">15</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Can't select seat ">19</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat " title="Can't select seat ">00</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">23</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">27</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">31</a>
                                <a to="#" className="btn btn-warning unavailable text-light disabled" title="unavailable seat ">35</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">39</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">43</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">47</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">52</a>
                                <br />

                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a to="#" className="btn btn-warning text-light ">51</a>
                                <br />
                                <a to="#" className="btn btn-secondary text-light disabled" title="Can't select seat ">01</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">02</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">06</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">10</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">14</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">18</a>
                                <a to="#" className="btn btn-warning unavailable text-light disabled" title="unavailable seat ">20</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">22</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">26</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">30</a>
                                <a to="#" className="btn btn-warning unavailable text-light disabled" title="unavailable seat ">34</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">38</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">42</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">46</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">50</a>
                                <br />
                                <a className="btn btn-secondary text-light driver disabled" title="Driver"><img src={driver} width="20px" /></a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">01</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">05</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">09</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">13</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">17</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning  text-light" title="Click to select seat ">19</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">21</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">25</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">29</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">33</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">37</a>
                                <a to="#" className="btn btn-warning  unavailable text-light disabled" title="unavailable seat ">41</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">45</a>
                                <a onClick={this.props.addSeat} to="#" className="btn btn-warning text-light" title="Click to select seat ">49</a>
                            </div>
                        </div>
                    </div>)}
            </Translation>
        );

    }
}
const mapStateToProps = state => {
    return {
        count: state.count,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {

        addSeat: () => dispatch({ type: "ADD_SEAT" }),
        reset: () => dispatch({ type: "RESET" })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bus);
 