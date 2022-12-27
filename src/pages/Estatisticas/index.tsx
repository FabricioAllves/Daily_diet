
import { PorcentageCardEstatistica } from '@components/PorcentageCardEstatistica';
import { PorcentageEstatisticaCards } from '@components/PorcentageEstatisticaCards';
import React from 'react';

import { } from './styles';

export function Estatisticas() {
  return (

    <>
      <PorcentageCardEstatistica
        percentage='91,86%'
        title='das refeições dentro da dieta'
      />

      <PorcentageEstatisticaCards
        bestSequence='22'
        allRegistre='109'
        onDiet='99'
        offDiet='10'
      />
    </>
  )
}