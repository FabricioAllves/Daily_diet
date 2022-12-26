import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: ButtonTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) => type ==='PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_MID};
  width: 100%;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const IconWraper = styled.View`
align-items: flex-end;
width: 100%;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24
}))`
margin-top: 8px;
margin-right: 8px;
`;

export const TitleWraper = styled.View`
align-items: center;
justify-content: center;
padding-bottom: 25px;
`

export const Percentage = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.XG}px;
color: ${({theme}) => theme.COLORS.GRAY_700};
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
export const TextT = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
color: ${({theme}) => theme.COLORS.GRAY_600};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

`