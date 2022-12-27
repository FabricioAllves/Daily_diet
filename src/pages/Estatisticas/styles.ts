
import styled from 'styled-components/native';




export const Card = styled.View`
background-color: #fff;
flex: 1;
align-items: center;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
margin-top: -10px;
padding: 24px;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
padding-top: 20px;
padding-bottom: 20px;
`;

export const CardSequence = styled.View`
height: 89px;
width: 100%;
border-radius: 8px;
background-color: ${({ theme }) => theme.COLORS.GRAY_200};
justify-content: center;
align-items: center;
margin-bottom: 10px;
`;

export const CardSequenceNumber = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
text-align: center;
`;

export const CardSequenceTilte = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
color: ${({ theme }) => theme.COLORS.GRAY_600};
text-align: center;
`;

export const CardDiet = styled.View`
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 5px;
`;


export const CardDietY = styled.View`
font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
width: 48%;
height: 157px;
border-radius: 8px;
align-items: center;
justify-content: center;

`;

export const CardDietN = styled.View`
font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
width: 48%;
height: 157px;
border-radius: 8px;
align-items: center;
justify-content: center;
`;


