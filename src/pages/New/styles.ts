import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: white;
  margin-top: -20px;
`;

export const Title = styled.Text`
  padding-top: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme }) => theme.FONT_SIZE.MD}px;
`;

export const Input = styled(TextInput)`
  height: 48px;
  width: 100%;
  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 20px;
  
`;

export const Card = styled.View`
  flex-direction: column;
  height: 48px;
  width: 48%;
`;

export const Card2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;


