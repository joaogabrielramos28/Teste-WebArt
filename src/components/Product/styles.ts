import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  border-width:1px;
  border-color: ${({ theme }) => theme.colors.text_light}
  flex-direction: row;
  align-items: center;
 justify-content: space-between;
  padding:16px 8px;
  margin:4px 0;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const Mark = styled.TouchableOpacity`
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;
export const MarkContent = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border-width: 1.6px;
  border-color: ${({ theme }) => theme.colors.text};
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

export const DoneIcon = styled(Feather)``;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Edit = styled(Feather)`
  font-size: ${RFValue(16)}px;
  margin-right: 8px;
`;
export const Close = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.failure};
  font-size: ${RFValue(16)}px;
`;
