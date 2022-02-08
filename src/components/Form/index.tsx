import React, { useState } from "react";
import { Container, InputForm, ButtonForm, Plus } from "./styles";

interface FormProps {
  onPress: (name: string) => void;
}
export function Form({ onPress }: FormProps) {
  const [productName, setProductName] = useState("");

  function handleAddProduct(productName: string) {
    onPress(productName);

    setProductName("");
  }
  return (
    <Container>
      <InputForm
        placeholder="Novo item da lista"
        onChangeText={setProductName}
        onSubmitEditing={() => handleAddProduct(productName)}
        value={productName}
      />

      <ButtonForm onPress={() => handleAddProduct(productName)}>
        <Plus name="plus" />
      </ButtonForm>
    </Container>
  );
}
