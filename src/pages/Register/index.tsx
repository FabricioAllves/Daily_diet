import { useState } from "react";
import { HeaderBackAndTitle } from "@components/HeaderBackAndTitle";
import { InputLabel } from "@components/InputLabel";
import { YesOrNo } from "@components/YesOrNo";
import { View } from "react-native";
import { Container, Wrapper, WrapperGroup, ContainerButton } from "./styles";


export function Register() {

  const [statusSelected, setStatuSelected] = useState<'open' | 'closed'>('open')

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
          multiline
          numberOfLines={5}
          text="Descrição"
          sizeH="big"
          style={{ textAlignVertical: 'top', paddingTop: 10 }}
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

        <ContainerButton>
          <YesOrNo
          title="Sim"
            type="open"
            onPress={() => setStatuSelected('open')}
            isActive={statusSelected === 'open'}
          />

          <YesOrNo
          title="Não"
            type="closed"
            onPress={() => setStatuSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </ContainerButton>


      </Container>
    </>
  )
}