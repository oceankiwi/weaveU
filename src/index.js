import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, IndexRoute} from 'react-router';

import { createHashHistory } from 'history'

const history = createHashHistory()

import App from './app';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Colleague from './components/Colleague';



document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Router history={history}>
			<App>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/calendar" component={Calendar}/>
					<Route path="/colleague" component={Colleague}/>
				</Switch>
			</App>
		</Router>,
		document.getElementById('app')
	);
});