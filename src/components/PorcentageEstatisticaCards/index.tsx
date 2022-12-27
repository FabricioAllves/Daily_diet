import { TouchableOpacityProps } from 'react-native';
import { Card, CardDiet, CardDietN, CardDietY, CardSequence, CardSequenceNumber, CardSequenceTilte, Title } from './styles';

type Props = {
  bestSequence: string;
  allRegistre: string;
  onDiet: string;
  offDiet: string
}

export function PorcentageEstatisticaCards({ bestSequence, allRegistre, onDiet, offDiet }: Props) {
  return (
    <Card>
      <Title>Estatísticas gerais</Title>

      <CardSequence>
        <CardSequenceNumber>
          {bestSequence}
        </CardSequenceNumber>

        <CardSequenceTilte>
          melhor sequência de pratos dentro da dieta
        </CardSequenceTilte>
      </CardSequence>


      <CardSequence>
        <CardSequenceNumber>
          {allRegistre}
        </CardSequenceNumber>

        <CardSequenceTilte>
          refeições registradas
        </CardSequenceTilte>
      </CardSequence>


      <CardDiet>
        <CardDietY>
          <CardSequenceNumber>
            {onDiet}
          </CardSequenceNumber>

          <CardSequenceTilte>
            refeições dentro da dieta
          </CardSequenceTilte>
        </CardDietY>

        <CardDietN>
          <CardSequenceNumber>
            {offDiet}
          </CardSequenceNumber>

          <CardSequenceTilte>
            refeições fora da {'\n'} dieta
          </CardSequenceTilte>
        </CardDietN>
      </CardDiet>

    </Card>
  )
}