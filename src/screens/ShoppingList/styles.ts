import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
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

export const ProductList = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 0 4px;
`;
