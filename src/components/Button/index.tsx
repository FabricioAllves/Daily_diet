import React from 'react';
import { Text, View } from 'react-native';


import { Container, Icon, TitleButton } from './styles';

type Props = {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <View>
      <Container activeOpacity={0.8}>
        <Icon />
        <TitleButton>
          {title}
        </TitleButton>
      </Container>
    </View>
  )
}