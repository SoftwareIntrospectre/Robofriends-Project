import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
