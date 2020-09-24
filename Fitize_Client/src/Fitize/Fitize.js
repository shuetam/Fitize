import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Fitize.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


class Fitize extends Component {

    //showAll = () => {
        //this.setState({show: true});
    //}

    render() {
        
        return (
            <div style={{minWidth: "320px"}}> 
               <img 
                   class="imgField"
                  
                  src={this.props.url}></img>

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


export default connect(mapStateToProps, mapDispatchToProps)(Fitize);
