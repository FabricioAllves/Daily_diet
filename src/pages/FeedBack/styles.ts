import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleHeader = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GREEN_DARK};
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MG}px;
  margin-bottom: 8px;
`;

