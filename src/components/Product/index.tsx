import React from "react";
import { Alert } from "react-native";
import {
  Container,
  ProductInfo,
  Mark,
  MarkContent,
  DoneIcon,
  Name,
  Actions,
  Edit,
  Close,
} from "./styles";

interface ProductsProps {
  id: string;
  name: string;
  isSelected: boolean;
  onDelete: (id: string) => void;
  onSelected: (id: string) => void;
}

export function Product({
  name,
  id,
  isSelected,
  onDelete,
  onSelected,
}: ProductsProps) {
  function handleRemoveProduct(id: string) {
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?",
      [
        {
          text: "Sim",
          onPress: () => onDelete(id),
          style: "default",
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <Container isSelected={isSelected}>
      <ProductInfo>
        <Mark onPress={() => onSelected(id)}>
          <MarkContent isSelected={isSelected}>
            {isSelected && <DoneIcon name="check" />}{" "}
          </MarkContent>
        </Mark>
        <Name isSelected={isSelected}>{name}</Name>
      </ProductInfo>

      <Actions>
        <Edit name="edit-2" />
        <Close
          name="close-circle-sharp"
          onPress={() => handleRemoveProduct(id)}
        />
      </Actions>
    </Container>
  );
}
