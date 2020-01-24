import React, { useContext } from "react";
import { Header, Table } from "semantic-ui-react";
import { CartContext } from "../App";

export default function CartDetails() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine textAlign="center">
              Quantité
            </Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cart).map(key => (
            <Table.Row key={cart[key].id}>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  <button onClick={() => removeFromCart(cart[key])}>-</button>{" "}
                  {cart[key].quantity}{" "}
                  <button onClick={() => addToCart(cart[key])}>+</button>
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{cart[key].title}</Table.Cell>
              <Table.Cell textAlign="right">{cart[key].price} €</Table.Cell>
              <Table.Cell textAlign="right">
                {cart[key].quantity * cart[key].price} €
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
