import { HeaderBackAndTitle } from "@components/HeaderBackAndTitle";
import { InputLabel } from "@components/InputLabel";
import { View } from "react-native";
import { Container, Wrapper, WrapperGroup } from "./styles";


export function Register() {
  return (
    <>
      <HeaderBackAndTitle
        title="Nova refeição"
      />

      <Container>
        <InputLabel
          text="Nome"
          sizeH="small"
        />

        <InputLabel
          numberOfLines={5}
          multiline
          text="Descrição"
          sizeH="big"
        />

        <Wrapper>
          <WrapperGroup>
            <InputLabel
              text="Data"
              sizeH="small"
            />
          </WrapperGroup>

          <WrapperGroup>
            <InputLabel
              text="Hora"
              sizeH="small"
            />
          </WrapperGroup>
        </Wrapper>
      </Container>
    </>
  )
}