import React from 'react';
import ReactDOM from 'react-dom';
import { init } from 'emailjs-com';
import './styles/common.css';
import App from './App';

import * as serviceWorker from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
init("user_SyWMZvU5AjIPBGRCl4M80");