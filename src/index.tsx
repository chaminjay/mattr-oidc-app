import "./styles.scss";
import 'toastr/build/toastr.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'react-app-polyfill/ie11';
import 'core-js';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
