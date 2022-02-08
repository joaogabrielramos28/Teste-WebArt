import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Form } from "../../components/Form";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
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
interface CountProductsProps {
  total: number;
  selecteds: number;
}

export function ShoppingList() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [countProducts, setCountProducts] = useState<CountProductsProps>(
    {} as CountProductsProps
  );

  async function handleAddProduct(name: string) {
    const product = {
      id: String(new Date().getTime()),
      name,
      isSelected: false,
    };

    setProducts([...products, product]);
    try {
      const data = await AsyncStorage.getItem("@WebArt:products");
      const currentData = data ? JSON.parse(data) : [];
      const newProductList = [...currentData, product];
      await AsyncStorage.setItem(
        "@WebArt:products",
        JSON.stringify(newProductList)
      );
    } catch (err) {}
  }

  async function loadProducts() {
    const dataKey = "@WebArt:products";
    const response = await AsyncStorage.getItem(dataKey);
    const products = response ? JSON.parse(response) : [];

    setProducts(products);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    async function countProducts() {
      const dataKey = "@WebArt:products";
      const response = await AsyncStorage.getItem(dataKey);
      const productsList = response ? JSON.parse(response) : [];
      let totalProducts: number = products.length;

      let totalSelectedProducts: [] = productsList.filter(
        (product: ProductsProps) => product.isSelected
      );

      setCountProducts({
        total: totalProducts,
        selecteds: totalSelectedProducts.length,
      });
    }

    countProducts();
  }, [products]);

  async function handleRemoveProduct(id: string) {
    const newList = products.filter((product) => product.id !== id);

    setProducts(newList);
    await AsyncStorage.setItem("@WebArt:products", JSON.stringify(newList));
  }

  async function handleSelectProduct(id: string) {
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
    await AsyncStorage.setItem("@WebArt:products", JSON.stringify(newList));
  }

   async function handleEditProductName(id:string,newName:string){
    const newList = products.map((product) => {
      if (product.id === id) {
        product = {
          ...product,
          name: newName,
        };
      }

      return product;
    });

    setProducts(newList);
    await AsyncStorage.setItem("@WebArt:products", JSON.stringify(newList));
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Lista de compras</Title>
          {products.length > 0 && (
            <Count>
              {countProducts.selecteds}/{countProducts.total}
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
                  onEdit={handleEditProductName}
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
