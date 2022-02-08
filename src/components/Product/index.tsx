import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  ProductInfo,
  Mark,
  MarkContent,
  DoneIcon,
  Name,
  InputEdit,
  Actions,
  Edit,
  Close,
  Save
} from "./styles";

interface ProductsProps {
  id: string;
  name: string;
  isSelected: boolean;
  onDelete: (id: string) => void;
  onSelected: (id: string) => void;
  onEdit:(id:string,newName:string)=>void;
}

export function Product({
  name,
  id,
  isSelected,
  onDelete,
  onSelected,
  onEdit
}: ProductsProps) {
  const [isEditing,setIsEditing] = useState(false);
  const [newProductName,setNewProductName] = useState(name);
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
  function handleSetEditingModeOn(){
    setIsEditing(true)
  }
  function handleSetEditingModeOff(){
    setIsEditing(false)
  }

  function handleEditProduct(id:string,newName:string){
    onEdit(id,newName)

    setIsEditing(false)
  
  }

  return (
    <Container isSelected={isSelected}>
      <ProductInfo>
        <Mark onPress={() => onSelected(id)}>
          <MarkContent isSelected={isSelected}>
            {isSelected && <DoneIcon name="check" />}{" "}
          </MarkContent>
        </Mark>
        {isEditing ? (
          <InputEdit value={newProductName} defaultValue={newProductName} onChangeText={setNewProductName} onSubmitEditing={()=>handleEditProduct(id,newProductName)} />
        ):(
          <Name isSelected={isSelected}>{name}</Name>
        )}
      </ProductInfo>

      <Actions>
        {isEditing ? (
          <>
          <Save name="checkmark-circle" onPress={()=>handleEditProduct(id,newProductName)}  />
          <Close
            name="close-circle-sharp"
            onPress={handleSetEditingModeOff}
          />
          </>
        ) : (
          <>
           <Edit name="edit-2" onPress={handleSetEditingModeOn} />
          <Close
            name="close-circle-sharp"
            onPress={() => handleRemoveProduct(id)}
            
          />
          
          </>
        )}
        
      </Actions>
    </Container>
  );
}
