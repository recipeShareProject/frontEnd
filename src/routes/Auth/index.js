import PageLoader from "components/common/PageLoader";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

const Auth = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect
          exact
          from={`${requestedUrl}/`}
          to={`${requestedUrl}/signup`}
        />

        <Route
          exact
          path={`${requestedUrl}/signup`}
          component={lazy(() => import(`./SignUp`))}
        />
        <Route
          exact
          path={`${requestedUrl}/login`}
          component={lazy(() => import(`./Login`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Auth;
