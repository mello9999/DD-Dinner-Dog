import { Redirect, Switch, Route } from 'react-router-dom';
import ConfigRoutes from "../../config/routes";
import React from 'react';

function PrivateRoutes(props) {
    const role = props.role || "guest";

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoutes;
    console.log(allowedRoutes.map(a => (a)))
    return (
        <Switch>
            {allowedRoutes.map(route => (
                <Route
                    path={route.url}
                    key={route.url}
                    exact
                >
                    <route.component setRole={props.setRole} />
                </Route>))}
            <Redirect to={redirectRoute} />
        </Switch>
    )
}

export default PrivateRoutes;
