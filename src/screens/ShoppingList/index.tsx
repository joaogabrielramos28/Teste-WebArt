import React from "react";
import { Product } from "../../components/Product";
import { Container, Header, Title, Count, ProductList } from "./styles";
export function ShoppinList() {
  return (
    <Container>
      <Header>
        <Title>Lista de compras</Title>
        <Count>3/8</Count>
      </Header>

      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </Container>
  );
}
