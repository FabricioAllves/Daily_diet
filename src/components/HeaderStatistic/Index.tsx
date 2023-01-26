import React from 'react';
import {TouchableOpacityProps} from 'react-native'

import { BackButton, Container, IconButton,TitleWraper,Percentage,Description, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  porcentage: string;
  description: string;
}


export function HeaderStatistic({type = 'PRIMARY', porcentage, description }: Props) {
  return (
    <Container
    type={type}
    >

      <BackButton>
        <IconButton />
      </BackButton>

      <TitleWraper>
        <Percentage>{porcentage}</Percentage>
        <Description>{description}</Description>
      </TitleWraper>
    </Container>
  )
}