





import { TouchableOpacityProps } from 'react-native';

import { Button, Container, Text, FilterStyleProps } from './styles';




type Props =  TouchableOpacityProps  &  FilterStyleProps &{
  title: string
  
}


export function YesOrNo({isActive = false, type, title, ...rest}: Props) {



  const colorType = type === 'open' ? 'red' : 'green'

  return (
      <Button {...rest} type={type}>
        <Text>
          {title}
        </Text>
      </Button>
  )
}