import React from 'react';
import { Text, View } from 'react-native';


import { Container, Icon, TitleButton } from './styles';

type Props = {
  title: string;
  teste?: string;
}

export function Button({ title, teste }: Props) {
  return (
    <View>
      <Text style={{paddingBottom: 20, fontSize: 16}}>{teste}</Text>
      <Container>
        <Icon />
        <TitleButton>
          {title}
        </TitleButton>
      </Container>
    </View>
  )
}