import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../../utils";

// handle the public routes for react-router-dom v4/v5
const PublicRoute = ({ component: Component, redirect, ...rest }) => {
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       !getAccessToken() ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect to={{ pathname: redirect }} />
  //       )
  //     }
  //   />
  // );

  return null;
};

export default PublicRoute;
