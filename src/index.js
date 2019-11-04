import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App style={Styles} />, document.querySelector('#root'));
serviceWorker.register();
