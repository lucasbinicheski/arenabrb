import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout/Layout";
// pages
import Error from "./../pages/error/Error";
import Login from "./../pages/login/Login";

// context
import { useUserState } from "../context/UserContext";
import PageEvent from "../pages/formEvento/PageEvent";
import LayoutProdutor from "./LayoutProdutor/LayoutProdutor";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/inicio" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/inicio" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PrivateRoute path="/produtor" component={LayoutProdutor} />
        <PrivateRoute path="/subscription" component={PageEvent} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
