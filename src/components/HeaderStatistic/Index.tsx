import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacityProps} from 'react-native'

import { BackButton, Container, IconButton,TitleWraper,Percentage,Description, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  porcentage: string;
  description: string;
}


export function HeaderStatistic({type = 'PRIMARY', porcentage, description }: Props) {

  const navigation = useNavigation()

  return (
    <Container
    type={type}
    >

      <BackButton  onPress={() => navigation.goBack()}>
        <IconButton />
      </BackButton>

      <TitleWraper>
        <Percentage>{porcentage}</Percentage>
        <Description>{description}</Description>
      </TitleWraper>
    </Container>
  )
}