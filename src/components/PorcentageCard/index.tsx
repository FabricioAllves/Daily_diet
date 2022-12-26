import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, IconWraper, Percentage, TitleWraper, TextT, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  percentage: string;
  title: string;
  type?: ButtonTypeStyleProps
}

export function PorcentageCard({ title, percentage, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      type={type}
      {...rest}
    >
      <IconWraper>
        <Icon />
      </IconWraper>

      <TitleWraper>
        <Percentage>{percentage}</Percentage>
        <TextT>{title}</TextT>
      </TitleWraper>

    </Container>
  )
}