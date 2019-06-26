import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducers from './reducers';
import Home from 'components/home-page/Home';
import Boards from 'components/boards-page/Boards';
import Profile from 'components/profile-page/Profile'
import Header from 'components/header/Header';
import Portal from './components/modals/Portal';
import SingleBoard from './components/single-board-page/SingleBoard';
import FloatedPopupPortal from './components/modals/FloatedPopupPortal';

import "./styles/baseline.scss";
import 'react-datepicker/dist/react-datepicker.css';

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
                <FloatedPopupPortal />
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/boards" exact component={Boards} />
                <Route path="/profile" component={Profile} />
                <Route path='/b' component={SingleBoard} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);

