import styled from 'styled-components/native';

export type Size = 'big' | 'small';

type Props = {
  sizeH: Size
}

export const Label = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_600};
  padding-bottom: 4px;
`;

export const Input = styled.TextInput<Props>`
  width: 100%;
  height: ${({ sizeH }) => sizeH === 'big' ? 120 : 48}px;
  border-color: ${({theme}) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  border-width: 0.5px;
  margin-bottom: 20px;
  padding-left: 10px;
`;
