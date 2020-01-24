import React, { useState, createContext } from "react";
import { Container, Menu } from "semantic-ui-react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState({});

  function addToCart(item) {
    console.log("item", item);
    if (!cart[item.id]) {
      cart[item.id] = item;
      cart[item.id].quantity = 1;
    } else {
      cart[item.id].quantity += 1;
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  function countCartArticles() {
    let total = 0;
    Object.keys(cart).map(key => (total += cart[key].quantity));
    return total;
  }

  const contextValue = { cart, addToCart, countCartArticles };

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
