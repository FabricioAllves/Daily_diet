import styled from 'styled-components/native';

export const Item = styled.View`
  background-color: #fff;
  padding: 11px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  flex: 1;
`;

export const Circle = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLORS.RED_MID};

`;


