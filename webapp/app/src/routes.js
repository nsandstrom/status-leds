// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ledPage from './components/ledPage';
import ledsShowOne from './components/leds/ShowOne';
import AddPage from './components/leds/AddPage';
import EditPage from './components/leds/EditPage';
import NotFoundPage from './components/NotFoundPage';


const routes = (
	<Route path="/" component={Layout}>
	    <IndexRoute component={IndexPage}/>
	    <Route path="leds" component={ledPage} />
	    <Route path="leds/new" component={AddPage} />
	    <Route path="leds/:id/edit" component={EditPage} />
	    <Route path="leds/:id" component={ledsShowOne} />
		<Route path="*" component={NotFoundPage}/>
	</Route>
);

export default routes;
