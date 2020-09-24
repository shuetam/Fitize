import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {authCheckState} from './Store/Actions/auth';

class App extends Component {

  componentWillMount () {

    document.title = "fitize";
    this.props.onTryAutoSignup(); 
}
  
  
render() {
       
  return (
      <BrowserRouter>
          <div>
          
              <Route path={'/:id?/:id1?/:id2?'} component={Header} />        
          </div>
      </BrowserRouter>
  );
}


}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState() )
  };
};

export default  connect( null, mapDispatchToProps )( App );
