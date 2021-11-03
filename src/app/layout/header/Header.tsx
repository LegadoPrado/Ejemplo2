import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  getCurrentUser,
  logOut as closeSession,
} from "./../../helpers/auth-helper";
import { Login } from "../../components/login/Login";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import "./header.scss";

export const Header = () => {
  const user = getCurrentUser();

  const logOut = () => {
    closeSession();
    window.location.href = "./login";
  };

  return (
    <Router>
      <div className="nav">
        <div className="nav-item brand">
          <span>ReactJs</span>
        </div>
        <div className="nav-item menu"></div>
        <div className="nav-item user">
          {!user ? (
            <Link to="/login">
              <span>Login</span>
            </Link>
          ) : (
            <span onClick={logOut}>{user.replaceAll('"', "")}</span>
          )}
        </div>
      </div>
      <Switch>
        <Route path="/register-form">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
