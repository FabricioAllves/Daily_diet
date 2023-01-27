import styled from 'styled-components/native';

export type CardsColorRedOrGreen = 'GREEN' | 'RED';

type Props = {
  type: CardsColorRedOrGreen;
}


export const Title = styled.Text`
  margin-bottom: 25px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  text-align: center;
`

export const WraperStatistic = styled.View`
  height: 100%;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  top: -12px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #fff;
`

export const GroupColumns = styled.View`
  height: 89px;
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const TitleNumber = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  padding-bottom: 7px;
`

export const TitleDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color:${({theme}) => theme.COLORS.GRAY_600};
  text-align: center;
`

export const GroupRowAll = styled.View`
  justify-content: space-between;
  flex-direction: row;
`


export const GroupRow = styled.View<Props>`
  height: 107px;
  width: 48%;
  background-color: ${({theme, type}) =>  type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`


