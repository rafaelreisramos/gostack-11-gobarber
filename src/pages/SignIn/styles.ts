import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
`;
