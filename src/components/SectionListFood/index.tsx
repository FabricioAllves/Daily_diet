import { Text } from 'react-native';
import { CicleColor, Circle, Row, Group, Title, TitleHour, } from './styles';

interface Props {
  title: string;
  type?: CicleColor
}

export function SectionListFood({ title, type = 'PRIMARY' }: Props) {
  return (
    <Row>
        <TitleHour>20:00 </TitleHour>
      <Group>
        <Title>{title}</Title>
        <Circle
          type={type}
        ></Circle>
      </Group>
    </Row>
  )
}