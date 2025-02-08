import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation, } from 'react-router-dom';

const Routes = () => {
    const location = useLocation();

    return (
        <Switch>
            <Route path={[ '/', ]}>
                <MainLayout>
                    <Switch location={location} key={location.pathname}>
                        <Route 
                            path="/" 
                            component={DashboardDefault} 
                        />
                    </Switch>
                </MainLayout>
            </Route>
            <Route path="/*" element={ <Redirect to="/" /> }/>
        </Switch>
    );
};

export default Routes;
