import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: ButtonTypeStyleProps
}


export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => type ==='PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_MID};
  height: 200px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 70px;
`;

export const IconButton = styled(ArrowLeft).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))`
margin-left: 24px;
margin-top: 40px;
`


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
export const Description = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
color: ${({theme}) => theme.COLORS.GRAY_600};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

`