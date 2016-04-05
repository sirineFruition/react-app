/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactDom = require('react-dom');
var Search = require('./components/search.react');
var Login = require('./components/Login.react');
var ListExample = require('./components/List.react')
var Router = require('react-router/lib/Router');
var Route = require('react-router/lib/Route');
var hashHistory = require('react-router/lib/hashHistory');
var IndexRoute = require('react-router/lib/IndexRoute');
var Main = require ('./components/Main')
var MesTerroirs = require('./components/MesTerroirs');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main} >

            <IndexRoute component={Login}/>
            <Route path="Login" component={Login}/>
            <Route path="Search" component={Search}/>
            <Route path="MesTerroirs" component={MesTerroirs}/>



        </Route>
    </Router>,
    document.getElementById('todoapp')
);