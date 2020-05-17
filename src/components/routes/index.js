import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {routes} from './routes';

const Routes = () => {
    
    return (
        <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        {routes.map((route, i)=>
                            <Route
                                exact
                                key={i}
                                path={route.path}
                                component={route.component}
                            />)}
                    </Switch>
                </Suspense>
        </Router>
    )
}

export default Routes;