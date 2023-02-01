





import { TouchableOpacityProps } from 'react-native';

import { Button, Container, Text, FilterStyleProps } from './styles';




type Props =  TouchableOpacityProps  & FilterStyleProps &{
  title: string
  
}


export function YesOrNo({type, isActive = false, title, ...rest}: Props) {

  const colorType = type == 'open' ? '#CBE4B4' : '#F3BABD'

  //const colorType = isActive ? 'red' : 'green'
  //isActive ? 'red' : 'green'

  return (
      <Button {...rest} type={type} isActive={isActive}
      style={{backgroundColor: isActive ?  colorType : '#EFF0F0'}}
      >
        <Text>
          {title}
        </Text>
      </Button>
  )
}