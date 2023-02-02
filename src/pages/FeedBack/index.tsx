import { Container, ContainerCenter, SubTitle, TitleHeader } from "./styles";
import { useNavigation } from "@react-navigation/native";

import img from '@assets/Illustration.png'
import { Image } from "react-native";
import { Button } from "@components/Button";


export function FeedBack() {

  const navigation = useNavigation()

  return (
    <Container>

      <TitleHeader>
        Continue assim!
      </TitleHeader>
      <SubTitle>
        Você continua dentro da dieta. Muito bem!
      </SubTitle>


      <ContainerCenter>
        <Image source={img} style={{marginBottom: 50}} />
        <Button
          viewIcon={false}
          title="Ir para página inicial"
          onPress={() => navigation.navigate('home')}
        />

      </ContainerCenter>

    </Container>
  )
}