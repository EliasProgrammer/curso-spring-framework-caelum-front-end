import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { 
    BrowserRouter as Router, 
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import HomePage from './pages/HomePage';
import TopicoPage from './pages/TopicoPage';
import LoginPage from './pages/LoginPage';
import FormNovoTopicoPage from './pages/FormNovoTopicoPage';

import JWTs from './infra/JWTs';

import registerServiceWorker from './registerServiceWorker';

class PrivateRoute extends Component {
    render() {
        const jwt = localStorage.getItem('jwt');
        
        if( jwt && !JWTs.isExpired(jwt) ) {
            const Component = this.props.component;
            return ( 
                <Route component={Component} /> 
            );
            
        } else {
            return <Redirect to="/login" />;
        }
    }
}

const AluraForum = () => (
    <HomePage />
);

  
ReactDOM.render(<AluraForum />, document.getElementById('root'));
registerServiceWorker();
