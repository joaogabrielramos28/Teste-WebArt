import React, { useState } from "react";
import { Container, InputForm, ButtonForm, Plus } from "./styles";

interface FormProps {
  onPress: (name: string) => void;
}
export function Form({ onPress }: FormProps) {
  const [productName, setProductName] = useState("");

  return (
    <Container>
      <InputForm
        placeholder="Novo item da lista"
        onChangeText={setProductName}
        onSubmitEditing={() => onPress(productName)}
      />

      <ButtonForm onPress={() => onPress(productName)}>
        <Plus name="plus" />
      </ButtonForm>
    </Container>
  );
}
