import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';
import Home from './components/home-page/Home';
import Header from 'components/header/Header';
import Portal from './components/modals/Portal';

import "./styles/baseline.scss";

//you can use this to manually call dispatch and getState but instead passing it off to provider, letting react-redux handle things.
const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <div>
                <Portal />
                <Header />
                <Route path="/" exact component={Home} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);

