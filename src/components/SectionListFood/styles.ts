import styled from 'styled-components/native';

export type CicleColor = 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: CicleColor
}


export const Row = styled.View`
  background-color: '#fff';
  padding: 11px;
  width: 100%;
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
  color: ${({theme}) => theme.COLORS.GRAY_600};
  flex: 1;
`;

export const TitleHour = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_700};
  margin-left: 5px;
`;

export const Circle = styled.View<Props>`
  height: 14px;
  width: 14px;
  border-radius: 50px;
  background-color: ${({ theme, type }) => type ==='PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

`;

export const Group = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  padding-left: 10px;
  padding-right: 5px;
  flex: 1;
  border-left-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_400}
`
