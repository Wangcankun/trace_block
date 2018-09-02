import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import App from './App'

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
