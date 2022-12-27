import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.SafeAreaView`
  width: 100%;
  height: auto;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  padding: 24px;
`;

export const ContainerCard = styled.View`
  padding-top: 10px;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family:  ${({theme}) => theme.FONT_FAMILY.BOLD};
  padding-top: 5px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 24
}))`
position: absolute;
top: 15px;
left:24px
`;
