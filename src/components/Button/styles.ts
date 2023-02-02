import styled from 'styled-components/native';
import { Plus } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  height: 50px;
  width:100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
padding-left: 30px;
`

