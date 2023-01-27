import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  height: 132px;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  flex-direction: row;
  justify-content: center;
`;

export const ButtonComeBack = styled.TouchableOpacity`
  width: 60px;
  height: 70px;
  position: absolute;
  left: 1px;
  z-index: 99;
`

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 32
}))`
  margin-left: 24px;
  margin-top: 40px;
`

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`

