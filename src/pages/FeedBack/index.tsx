import { Container, ContainerCenter, SubTitle, TitleHeader } from "./styles";

import img from '@assets/Illustration.png'
import { Image } from "react-native";
import { Button } from "@components/Button";


export function FeedBack() {
  return (
    <Container>
      <ContainerCenter>
        <TitleHeader>
          Continue assim!
        </TitleHeader>
        <SubTitle>
          Você continua dentro da dieta. Muito bem!
        </SubTitle>
      </ContainerCenter>

      <ContainerCenter style={{backgroundColor: 'red', justifyContent:'center', alignItems: 'center'}}>
        <Image source={img} />
        <Button 
          viewIcon={false}
          title="Ir para página inicial"
        />

      </ContainerCenter>
     
    </Container>
  )
}