import { Container, Logo, Profile } from './styles';

import logoImg from '@assets/logo.png'
import logoImg1 from '@assets/profile.png'
import { Text } from 'react-native';


export function Header(){
  return(
    <Container>
      <Logo source={logoImg} />
      <Profile source={logoImg1} />
    </Container>
  )
}