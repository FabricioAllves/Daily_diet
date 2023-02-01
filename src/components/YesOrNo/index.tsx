import { TouchableOpacityProps } from 'react-native';
import theme from '../../theme'

import { Button, Text, FilterStyleProps, Circle } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function YesOrNo({ type, isActive = false, title, ...rest }: Props) {

  const colorType = type == 'open' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  const border = type == 'open' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK



  return (
    <Button {...rest} type={type} isActive={isActive}
      style={{
        backgroundColor: isActive ? colorType : theme.COLORS.GRAY_200,
        borderWidth: isActive ? 1.2 : 0,
        borderColor: border
      }}
    >
      <Circle
        style={{
          backgroundColor: type === 'open' ?
            theme.COLORS.GREEN_DARK
            : theme.COLORS.RED_DARK,
          marginRight: 8
        }}
      />
      <Text>
        {title}
      </Text>
    </Button>
  )
}