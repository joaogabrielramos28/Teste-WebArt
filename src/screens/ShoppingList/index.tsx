import React from "react";
import { Form } from "../../components/Form";
import { Product } from "../../components/Product";
import {
  Container,
  Header,
  ListContainer,
  Title,
  Count,
  ProductList,
} from "./styles";
export function ShoppinList() {
  return (
    <Container>
      <Header>
        <Title>Lista de compras</Title>
        <Count>3/8</Count>
      </Header>

      <ListContainer>
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>

        <Form />
      </ListContainer>
    </Container>
  );
}
