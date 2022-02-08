import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: flex-end;

  flex-direction: row;
  padding: 14px 6px;
  align-items: center;
`;

export const InputForm = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 4px;
  flex: 1;
  padding:${RFValue(8)}px; 8px;
  font-size: ${RFValue(14)}px;
`;

export const ButtonForm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-left: 10px;
  padding: 10px 14px;
  border-radius: 4px;
`;

export const Plus = styled(Feather)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
