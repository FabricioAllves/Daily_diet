import React from 'react';

import { Container, ContainerCard, Icon, Title } from './styles';

type Props = {
  title?: string;
}

export function HeaderNew({title}: Props) {
  return (
    <Container>
      <ContainerCard>
        <Icon />
        <Title>{title}</Title>
      </ContainerCard>
    </Container>
  )
}