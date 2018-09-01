import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chain from './containers/chain/Chain';
import ProductList from './containers/list/ProductList';
import Company from './containers/company/Company';
import About from './containers/about/About';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router';


ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/chain" component={Chain}/>
    <Route path="/list" component={ProductList}/>
    <Route path="/company" component={Company}/>
    <Route path="/about" component={About}/>
</Router>, document.getElementById('root'));
registerServiceWorker();
