import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import Routes from './routes';
import Loadable from 'react-loadable';

import {Provider} from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/configureStore';



import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
              <Routes/>
       </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
