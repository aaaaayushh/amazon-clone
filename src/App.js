import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51I5QZ3Ep1PRolxrgpInz2gf0wQ90WPrarqtTJOeNgTb35FmVcqRhqEZRyXK6PmzU6iGZiqpyotgDY2uTH30igX1000FsheHAfO"
);

const App = () => {
  const [{}, dispatch] = useStateValue();
  //create listener to keep track of who's signed in
  useEffect(() => {
    //listens for log in/out events
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS->", authUser);
      if (authUser) {
        //the user just logged in or was already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention for naming classes
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          {/* default route always at bottom!!! */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
