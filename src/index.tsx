import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Login from './component/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './reducer/AppReducer';
import Header from './component/Header'
import {initialState} from "./store/AppStore";

const store = createStore(reducer, initialState);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ), document.getElementById('root')
);