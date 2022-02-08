import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { ProductsProps } from ".";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFPercentage(10)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 4px 12px;
`;

export const NoItemContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;

  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const NoItemMessage = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};

  font-size: ${RFValue(20)}px;
`;
export const Count = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const ListContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ProductList = styled(
  FlatList as new (
    props: FlatListProps<ProductsProps>
  ) => FlatList<ProductsProps>
)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 0 4px;
`;
