import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons, Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

interface ProductStyleProps {
  isSelected: boolean;
}

export const Container = styled.View<ProductStyleProps>`
  width: 100%;
  border-width:1px;
  border-color: ${({ theme }) => theme.colors.text_light}
  flex-direction: row;
  align-items: center;
 justify-content: space-between;
  padding:16px 8px;
  margin:4px 0;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.success_light : theme.colors.shape};
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const Mark = styled.TouchableOpacity`
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const MarkContent = styled.Text<ProductStyleProps>`
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border-width: 1.2px;
  border-color: ${({ theme }) => theme.colors.text};
  margin-right: 5px;
  align-items: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.success : theme.colors.shape}

  justify-content: center;
  padding:1px 2px;
`;

export const DoneIcon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Name = styled.Text<ProductStyleProps>`
  font-size: ${RFValue(16)}px;
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  ${({  isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.success};
      text-decoration: line-through;
      text-decoration-color: ${({ theme }) => theme.colors.success};
    `}
`;
export const InputEdit = styled.TextInput`
font-size: ${RFValue(16)}px;
width: ${RFPercentage(40)}px;
color: ${({ theme }) => theme.colors.text};
margin-left: 8px;
border-bottom-width: 1px;
border-bottom-color: ${({ theme }) => theme.colors.text_light};
`
export const Actions = styled.View`
  flex-direction: row;
`;

export const Edit = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 8px;
`;
export const Close = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.failure};
  font-size: ${RFValue(20)}px;
`;
export const Save = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(20)}px;
  margin-right: 8px;
`