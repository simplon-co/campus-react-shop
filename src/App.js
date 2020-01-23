import React, { useState, createContext } from "react";
import { Container, Menu } from "semantic-ui-react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    console.log("item", item);
    setCart([...cart, item]);
    console.log("cart", cart);
  }

  const contextValue = { cart, addToCart };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        <Container>
          <Menu stackable>
            <Menu.Item>Campus Shop</Menu.Item>
            <Menu.Item>
              <CartSummary />
            </Menu.Item>
          </Menu>
        </Container>
        <BookList />
      </CartContext.Provider>
    </>
  );
}

export default App;
