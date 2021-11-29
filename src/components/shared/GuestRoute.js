import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function GuestRoute({ children, ...props }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Route {...props}>
      {!isAuthenticated ? children : <Redirect to="/cars" />}
    </Route>
  );
}