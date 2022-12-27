import { Button } from '@components/Button';
import { HeaderNew } from '@components/HeaderNew';
import { PorcentageCardEstatistica } from '@components/PorcentageCardEstatistica';
import { YesOrNo } from '@components/YesOrNo';
import React from 'react';
import { TextInput, View } from 'react-native';

import { Container, Input, Title, Card, Card2 } from './styles';

export function New() {
  return (
    <>
      <HeaderNew
        title='Nova Refeição'
      />

      <Container>
        <Title>Nome</Title>
        <Input />

        <Title>Descrição</Title>
        <Input style={{ height: 100 }}
          multiline numberOfLines={10}
        />


        <Card2>
          <Card>
            <Title>Data</Title>
            <Input />
          </Card>

          <Card>
            <Title>Hora</Title>
            <Input />
          </Card>
        </Card2>

        <Title>Está dentro da dieta?</Title>
        <YesOrNo 
        titleYes="Sim"
        titleNo='Não'
        isActive={true}
        />

        <Button
        title='Cadastrar refeição'
        />

      </Container>


    </>
  )
}