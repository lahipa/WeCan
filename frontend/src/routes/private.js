import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../../utils";

// handle the private routes for react-router-dom v4/v5
const PrivateRoute = ({ component: Component, redirect, ...rest }) => {
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       getAccessToken() ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{ pathname: redirect, state: { from: props.location } }}
  //         />
  //       )
  //     }
  //   />
  // );
  return null;
};

export default PrivateRoute;
