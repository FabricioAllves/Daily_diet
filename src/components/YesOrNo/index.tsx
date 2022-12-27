import React from 'react';
import { TouchableOpacityProps} from 'react-native'
import { Card, Container, TextDecision, FilterStyleProps } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  titleYes: string;
  titleNo: string;
}



export function YesOrNo({isActive = false, titleYes, titleNo, ...rest}: Props) {
  return (
    <Container>
      <Card {...rest}>
        <TextDecision>{titleYes}</TextDecision>
      </Card>
      <Card {...rest}>
        <TextDecision>{titleNo}</TextDecision> 
      </Card>
    </Container>
  )
}