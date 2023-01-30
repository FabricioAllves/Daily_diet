import React from 'react';
import { View, TextInputProps } from 'react-native';
import { Input, Label, Size } from './styles';

type Props = TextInputProps & {
  sizeH: Size
  text: string
}

export function InputLabel({ sizeH, text, ...rest }: Props) {
  return (
    <View>
      <Label>
        {text}
      </Label>

      <Input
        numberOfLines={4}
        sizeH={sizeH}
        {...rest}
      />
    </View>
  )
}