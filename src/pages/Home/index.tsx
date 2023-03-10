import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { PorcentageCard } from '@components/PorcentageCard';
import { SectionListFood } from '@components/SectionListFood';

import { SectionList, Text, StyleSheet, View } from 'react-native';

import { Container } from './styles';



export function Home() {

  const navigation = useNavigation()

  const [data, setData] = useState([
    {
      title: '26.12.22',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: '20.12.22',
      data: ['French Fries', 'Rings', 'Fried Shrimps'],
    },
    {
      title: '16.12.22',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: '17.12.22',
      data: ['Cheese Cake', 'Ice Cream'],
    }
  ])


  function handleViewStatistics(){
    navigation.navigate('statistics')
  }

  return (
    <Container>
      <Header />
      <PorcentageCard onPress={handleViewStatistics}
        percentage='91,86%'
        title='das refeições dentro da dieta'
      />

      <Text style={{ paddingBottom: 20, fontSize: 16 }}>Refeições</Text>

      <Button onPress={() => navigation.navigate('register')}
        title='Nova refeição'
      />


      <SectionList
        style={{ marginTop: 5 }}
        sections={data}
        keyExtractor={item => item}
        renderItem={({ item }) => <SectionListFood title={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 18, paddingBottom: 8, paddingTop: 15, backgroundColor: '#EFF0F0' }}>{section.title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        stickySectionHeadersEnabled={true}

      />

    </Container>
  )
}
