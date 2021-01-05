import React from "react";

import NumberFormat from "react-number-format";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  // console.log(getBasketTotal(basket));
  return (
    <div className="subtotal">
      <NumberFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
        renderText={(value) => {
          return (
            <div>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value} </strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </div>
          );
        }}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
