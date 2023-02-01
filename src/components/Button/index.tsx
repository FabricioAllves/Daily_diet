import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacityProps } from 'react-native';

import { Container, Icon, TitleButton } from './styles';

type Props =  TouchableOpacityProps & {
  title: string;
  viewIcon?: boolean
}

export function Button({ title, viewIcon = true, ...rest }: Props) {
  return (
    <View>
      <Container activeOpacity={0.8} {...rest}>
        {viewIcon && 
          <Icon />
        }
        <TitleButton>
          {title}
        </TitleButton>
      </Container>
    </View>
  )
}