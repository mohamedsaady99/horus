import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';
const NavBar = () => {
    const { t, i18n } = useTranslation();

    const changeToArabic = (lang) => {
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
        i18n.changeLanguage('ar');
        $('.navbar-brand img ').css({
            'marginRight': '0px'
        });
        $('.post img').css({
            "borderTopRightRadius": '25px',
            "borderTopLeftRadius": '0px',
            "borderBottomRightRadius": '25px',
            "borderBottomLeftRadius": '0px',
        });
        $('.post').css({
            "borderTopLeftRadius": '25px',
            "borderBottomLeftRadius": '25px',
        });
        $('.community h5 span').css({
            "paddingLeft": "190px",
            "paddingRight": "0px"
        });
        $('.community .videos h6 span').css({
            "paddingLeft": "100px",
            "paddingRight": "0px"
        });
        $('.contact .contact-details > a:first-of-type').css({
            "marginRight": "40px",
            "marginLeft": "0px",
        });
        $('.contact .overlay div:last-of-type').css({
            'marginLeft': '30px'
        });
       
        $(' .seats .availablity').css({
            'textAlign': 'right'
        });
       
        //media queries screens >= 482px
        if ($(window).width() <= 482) {
            $('.navbar-brand img').css({
                "right": "-55px",
            });
          
            $('.community h5 span').css({
                "paddingLeft": "15px",
                "paddingRight": "5px"
            });
            $('.community .videos h6 span').css({
                "paddingLeft": "80px",
                "paddingRight": "0px"
            });
            $('.post img').css({
                "borderRadius": '25px'
            });
            $('.contact .overlay div:last-of-type').css({
                'marginRight': '0px',
                'marginLeft': '30px'
            });
            $('.contact input').css({
                'marginRight': '-15px',
            });
            $('.contact input[type="checkbox"]').css({
                'marginRight': '0px',
            });
           
        }
        //media queries screens >= 482px to 767px
        if ($(window).width() >= 482 && $(window).width() <= 767) {
            $('.navbar-brand img').css({
                "right": "-55px",
            });
           
            $('.community h5 span').css({
                "paddingLeft": "25px",
            });
            $('.community .videos h6 span').css({
                "paddingLeft": "255px",
                "paddingRight": "0px"
            });
            $('.post img').css({
                "borderRadius": '25px'
            });
            $('.contact .overlay div:last-of-type').css({
                'marginLeft': '20px'
            });
        }
        if ($(window).width() >= 767 && $(window).width() <= 991) {
            $('.navbar-brand img ').css({
                'left': '55px'
            });
            $('.contact .overlay div:last-of-type').css({
                'marginLeft': '20px'
            });
            $('.community h5 span').css({
                "paddingLeft": "0px",
            });
            $('.community .videos h6 span').css({
                "paddingLeft": "0px",
                "paddingRight": "0px",
                "fontSize":"13px",
                "fontWeight":"bold"
            });
            $('.cities .city h4 .fa-heart').css({
                "paddingRight": "10px",
            });
            $('.contact input').css({
                'width': '242px',
            });
            $('.contact input[type="checkbox"]').css({
                'width': '0px',
            });
        }
    };
    const changeToEnglish = (lang) => {
        document.body.style.direction = "ltr";
        document.body.style.textAlign = "left";
        i18n.changeLanguage('en');
        $('.post img').css({
            "borderRadius": '25px',
        });
        $('.community h5 span').css({
            "paddingLeft": "0px",
            "paddingRight": "220px"
        });
        $('.community .videos h6 span').css({
            "paddingLeft": "0px",
            "paddingRight": "125px"
        });
        $('.contact .contact-details > a:first-of-type').css({
            "marginRight": "0px",
            "marginLeft": "40px",
        });
        
        $(' .seats .availablity').css({
            'textAlign': 'left'
        });
        //media queries screens >= 482px
        if ($(window).width() <= 482) {
            $('.community h5 span').css({
                "paddingRight": "65px"
            });
            $('.contact .overlay div:last-of-type').css({
                'marginRight': '30px',
                'marginLeft': '0px'
            });
            $('.community .videos h6 span').css({
                "paddingRight": "105px"
            });
        }
        if ($(window).width() >= 482 && $(window).width() <= 767) {
            $('.community h5 span').css({
                "paddingRight": "75px"
            });
            $('.community .videos h6 span').css({
                "paddingRight": "285px"
            });
        }
        if ($(window).width() >= 767 && $(window).width() <= 991) {
            $('.community h5 span').css({
                "paddingRight": "30px"
            });
            $('.community .videos h6 span').css({
                "paddingRight": "5px"
            });
            $('.navbar-brand img ').css({
                'left': '-40px'
            });
        }

    };
    return (
        <div className="nav">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <LinkContainer to="/">
                    <Nav.Link className="navbar-brand"><img src={logo} /></Nav.Link>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/hotels">
                            <Nav.Link className="nav-link underline-from-center" ><i className="fas fa-hotel"></i> {t('NavBar.1')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/flight">
                            <Nav.Link className="nav-link underline-from-center" ><i className="fas fa-plane-departure"></i> {t('NavBar.2')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/bus">
                            <Nav.Link className="nav-link underline-from-center" ><i className="fas fa-bus-alt"></i> {t('NavBar.3')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Contact" className="Contact">
                            <Nav.Link className="nav-link underline-from-center Contact" > {t('NavBar.4')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="nav-link underline-from-center" > {t('NavBar.5')}</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title={t("NavBar.lang")} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">
                                <Nav.Link onClick={() => changeToEnglish('en')} className="nav-link underline-from-center" > English</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">
                                <Nav.Link onClick={() => changeToArabic('ar')} className="nav-link underline-from-center" >العربية </Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;