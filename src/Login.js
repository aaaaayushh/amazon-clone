import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "./firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    //firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    //firebase register stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          //redirect to home page after successful creation of account
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing in you are agreeing to the Amazon Fake Clone Conditions of
          use and Sale. Please see our privacy notice, our Cookies notice and
          our Interest based Ads notice
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
