import styled, { css } from 'styled-components/native';




export type FilterStyleProps = {
  type: 'open' | 'closed';
  isActive?: boolean;
}

//const colorType = type === 'open' ? 'red' : 'green'


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<FilterStyleProps>`

  
  width: 48%;
  height: 50px;
  background-color: blue;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
`;
