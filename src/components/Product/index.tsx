import React from "react";
import {
  Container,
  ProductInfo,
  Mark,
  MarkContent,
  Name,
  Actions,
  Edit,
  Close,
} from "./styles";
export function Product() {
  return (
    <Container>
      <ProductInfo>
        <Mark>
          <MarkContent>{/* <DoneIcon name="check" /> */}</MarkContent>
        </Mark>
        <Name>Arroz - Pacote 5kg</Name>
      </ProductInfo>

      <Actions>
        <Edit name="edit-2" />
        <Close name="close-circle-sharp" />
      </Actions>
    </Container>
  );
}
