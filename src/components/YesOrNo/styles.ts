import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 10px;
`;

export const Card = styled(TouchableOpacity)<FilterStyleProps>`
${({ theme, isActive }) => isActive && css`
    border: 10px solid ${theme.COLORS.RED_DARK}
  `}
height: 50px;
width: 48%;
border-radius: 6px;
border-width: 1px;
border-color: ${({ theme }) => theme.COLORS.GRAY_400};
justify-content: center;
align-items: center;
`;

export const TextDecision = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
