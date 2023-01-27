import React from 'react';
import { Text, View, TouchableOpacityProps } from 'react-native';

import { Container, Icon, TitleButton } from './styles';

type Props =  TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <View>
      <Container activeOpacity={0.8} {...rest}>
        <Icon />
        <TitleButton>
          {title}
        </TitleButton>
      </Container>
    </View>
  )
}