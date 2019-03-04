import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, BrowserRouter } from 'react-router-dom';


import reducers from './reducers';
import App from './components/App';
import Header from './components/headerComponents/Header';
import "./styles/baseline.scss";

//you can use this to manually call dispatch and getState but instead passing it off to provider, letting react-redux handle things.
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);

