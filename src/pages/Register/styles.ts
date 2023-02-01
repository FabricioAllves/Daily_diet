import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  padding: 24px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const WrapperGroup = styled.View`
  width: 48%;
`;

export const TextLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 12px;
`;


export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
`;
