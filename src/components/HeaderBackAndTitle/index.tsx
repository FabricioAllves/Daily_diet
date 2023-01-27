import { ButtonComeBack, Container, IconArrowLeft, Title } from "./styles";
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string;
}

export function HeaderBackAndTitle({title}: Props) {
  const navigation = useNavigation()

  return (
    <Container>
      <ButtonComeBack onPress={() => navigation.goBack()}>
        <IconArrowLeft />
      </ButtonComeBack>

      <Title>
        {title}
      </Title>
    </Container>
  )
}