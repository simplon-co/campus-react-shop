import React, { useContext } from "react";
import { CartContext } from "../App";

export default function CartSummary() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h4>Caddie ({cart.length})</h4>
    </>
  );
}
