import { TouchableOpacityProps } from 'react-native';

import { Button, Text, FilterStyleProps, Circle } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function YesOrNo({ type, isActive = false, title, ...rest }: Props) {

  const colorType = type == 'open' ? '#E5F0DB' : '#F4E6E7'
  const border = type == 'open' ? '#639339' : '#BF3B44'

  return (
    <Button {...rest} type={type} isActive={isActive}
      style={{
        backgroundColor: isActive ? colorType : '#EFF0F0',
        borderWidth: isActive ? 1.2 : 0,
        borderColor: border
      }}
    >
      <Circle style={{backgroundColor: type === 'open' ? '#639339' : '#BF3B44', marginRight:8}}></Circle>
      <Text>
        {title}
      </Text>
    </Button>
  )
}