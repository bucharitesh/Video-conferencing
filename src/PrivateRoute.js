import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAppContext } from "./context/appContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAppContext();

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser === null ? <Redirect to="/" /> : <Component {...props} /> 
      }}
    ></Route>
  )
}