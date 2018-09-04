import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'

import App from './App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

const createStoreWithMiddleware= applyMiddleware()(createStore) 

ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
       
    </Provider>

,document.getElementById('root'));
registerServiceWorker();
