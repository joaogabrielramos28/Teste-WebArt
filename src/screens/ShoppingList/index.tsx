import React, { useState } from "react";
import { Form } from "../../components/Form";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import { Product } from "../../components/Product";
import {
  Container,
  Header,
  NoItemContainer,
  NoItemMessage,
  ListContainer,
  Title,
  Count,
  ProductList,
} from "./styles";

export interface ProductsProps {
  id: string;
  name: string;
  isSelected: boolean;
}

export function ShoppingList() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  let totalProducts: number = products.length;
  let totalSelectedProducts = products.reduce((acummulator, item) => {
    return item.isSelected ? (acummulator += 1) : 0;
  }, 0);
  console.log(totalSelectedProducts);

  function handleAddProduct(name: string) {
    const product = {
      id: String(new Date().getTime()),
      name,
      isSelected: false,
    };

    setProducts([...products, product]);
  }
  function handleRemoveProduct(id: string) {
    const newList = products.filter((product) => product.id !== id);

    setProducts(newList);
  }

  function handleSelectProduct(id: string) {
    const newList = products.map((product) => {
      if (product.id === id) {
        product = {
          ...product,
          isSelected: !product.isSelected,
        };
      }

      return product;
    });
    setProducts(newList);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Lista de compras</Title>
          {products.length > 0 && (
            <Count>
              {totalSelectedProducts}/{totalProducts}
            </Count>
          )}
        </Header>
        <ListContainer>
          {products.length == 0 ? (
            <NoItemContainer>
              <NoItemMessage>Nenhum item na lista</NoItemMessage>
            </NoItemContainer>
          ) : (
            <ProductList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Product
                  name={item.name}
                  id={item.id}
                  isSelected={item.isSelected}
                  onDelete={handleRemoveProduct}
                  onSelected={handleSelectProduct}
                />
              )}
            />
          )}
          <Form onPress={handleAddProduct} />
        </ListContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
