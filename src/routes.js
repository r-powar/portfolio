/**
 * Created by rpowar on 12/20/17.
 */
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import App from './App';
import About from './components/About';
import Skills from './components/Skills';
import Main from './components/Main';

export default (
    <HashRouter>
        <App>
            {/*<Route exact path="/" component={Bio}/>*/}
            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
        </App>
    </HashRouter>
);