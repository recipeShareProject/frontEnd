import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { useSelector } from "react-redux";

import Auth from "./Auth";

//TODO : 로그인 안됐을 때 페이지 리다이렉트
//auth 필요한 곳에서 사용
const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/signup",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const location = useLocation();

  if (location.pathname === "" || location.pathname === "/") {
    return <Redirect to={"/auth/signup"} />;
  }
  return (
    <Switch>
      {/* TODO : auth 조건부 페이지 렌더링 이렇게 사용 */}
      {/* <RestrictedRoute path="/auth" component={Auth} /> */}

      <Route path="/auth" component={Auth} />
    </Switch>
  );
};

export default Routes;
