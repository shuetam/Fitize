import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Container from '../Container/Container'

class Header extends Component {


    render() {

        let mainContainer =  <Route path={'/'} exact component={(props) => (
            <Container {...props} />
        )} />;
        
        return (
    <div> <div className="header">|- - f i t i z e - -|</div> 
    {mainContainer}
    </div>
                  
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.jwttoken !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
