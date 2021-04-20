import React, { Component } from 'react';
import About from '../About/About';
import Cities from '../Cities/Cities';
import Community from '../Community/Community';
import Contact from '../Contact/Contact';
import Header from '../Header/header';
class Index extends Component {
    state = {  }
    render() {
        return (
            <div >
                <Header/>
                <About/>
                <Cities/>
                <Community/>
                <Contact/>
            </div>
        );
    }
}

export default Index;