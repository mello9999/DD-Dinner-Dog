import { Redirect, Switch, Route } from 'react-router-dom';
import ConfigRoutes from "../../config/routes";
import React from 'react';
import Header from '../core/header/Header'
function PrivateRoutes(props) {
    const role = props.role || "guest";

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoutes;

    return (

        <Switch>
            {allowedRoutes.map(route => (


                <Route
                    path={route.url}
                    key={route.url}
                    exact
                >
                    <div>
                        {(() => {
                            console.log(route.url.slice(1, route.url.length))
                            if (route.url !== "/login" && route.url !== "/register") {
                                return <Header className={route.url.slice(1, route.url.length)} />
                            }
                        })()}

                        <route.component setRole={props.setRole} />
                    </div>
                </Route>))}
            <Redirect to={redirectRoute} />
        </Switch>
    )
}

export default PrivateRoutes;
