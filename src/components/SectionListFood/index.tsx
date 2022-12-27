import {Circle, Item, Title } from './styles';

type Item = string

interface Props {
  title: string;
  data?: Item[];
}

export function SectionListFood({title, data}: Props){
  return(
    <Item>
      <Title>{title}</Title>
      <Circle></Circle>
    </Item>
  )
}