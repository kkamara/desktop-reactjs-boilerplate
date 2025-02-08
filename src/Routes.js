import React from 'react';
import { Switch, Route, Redirect, useLocation, } from 'react-router-dom';

import Header from './components/layouts/Header';

import Home from "./components/pages/HomeComponent";

const Routes = () => {
    const location = useLocation();

    return (
        <>
            <Header/>
            <Switch>
                <Route path={[ '/', ]}>
                    <Switch location={location} key={location.pathname}>
                        <Route 
                            path="/" 
                            component={Home} 
                        />
                    </Switch>
                </Route>
                <Route path="/*" element={ <Redirect to="/" /> }/>
            </Switch>
        </>
    );
};

export default Routes;
