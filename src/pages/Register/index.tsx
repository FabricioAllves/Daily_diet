import { useState } from "react";
import { HeaderBackAndTitle } from "@components/HeaderBackAndTitle";
import { InputLabel } from "@components/InputLabel";
import { YesOrNo } from "@components/YesOrNo";
import { Container, Wrapper, WrapperGroup, ContainerButton, TextLabel } from "./styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";


export function Register() {

  const [statusSelected, setStatuSelected] = useState('')

  const navigation = useNavigation()

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

        <TextLabel>
          Está dentro da dieta?
        </TextLabel>

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

        <Button
          viewIcon={false}
          title="Cadastrar refeição"
          onPress={() => navigation.navigate('feedback')}
        />




      </Container>
    </>
  )
}