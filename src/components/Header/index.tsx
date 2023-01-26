import { Container, Logo, Profile } from './styles';

import logoImg from '@assets/logo.png'
import logoImg1 from '@assets/profile.png'
import { Text } from 'react-native';


export function Header(){
  return(
    <Container>
      <Logo source={logoImg} />
      <Profile source={{uri:'https://th.bing.com/th/id/R.b130081a878b03072283e095fe415181?rik=dihvkogXO8Yf8w&pid=ImgRaw&r=0'}} />
    </Container>
  )
}