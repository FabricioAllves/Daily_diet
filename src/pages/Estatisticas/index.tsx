
import { PorcentageCardEstatistica } from '@components/PorcentageCardEstatistica';
import React from 'react';
import { Text, View } from 'react-native';

import { Card, Title, CardSequence, CardSequenceNumber, CardSequenceTilte, CardDiet, CardDietN, CardDietY } from './styles';

export function Estatisticas() {
  return (

    <>
      <PorcentageCardEstatistica
        percentage='91,86%'
        title='das refeições dentro da dieta'
        type='SECUNDARY'
      />
      <Card>
        <Title>Estatísticas gerais</Title>

        <CardSequence>
          <CardSequenceNumber>
            22
          </CardSequenceNumber>

          <CardSequenceTilte>
            melhor sequência de pratos dentro da dieta
          </CardSequenceTilte>
        </CardSequence>


        <CardSequence>
          <CardSequenceNumber>
            109
          </CardSequenceNumber>

          <CardSequenceTilte>
            refeições registradas
          </CardSequenceTilte>
        </CardSequence>


        <CardDiet>
          <CardDietY>
            <CardSequenceNumber>
              99
            </CardSequenceNumber>

            <CardSequenceTilte>
            refeições dentro da dieta
            </CardSequenceTilte>
          </CardDietY>

          <CardDietN>
          <CardSequenceNumber>
              10
            </CardSequenceNumber>

            <CardSequenceTilte>
            refeições fora da {'\n'} dieta
            </CardSequenceTilte>
          </CardDietN>
        </CardDiet>

      </Card>


    </>
  )
}