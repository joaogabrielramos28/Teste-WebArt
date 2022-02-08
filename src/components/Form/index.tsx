import React from "react";
import { Container, InputForm, ButtonForm, Plus } from "./styles";
export function Form() {
  return (
    <Container>
      <InputForm placeholder="Novo item da lista" />

      <ButtonForm>
        <Plus name="plus" />
      </ButtonForm>
    </Container>
  );
}
