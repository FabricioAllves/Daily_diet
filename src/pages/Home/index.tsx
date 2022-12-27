import { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { PorcentageCard } from '@components/PorcentageCard';
import { SectionListFood } from '@components/SectionListFood';

import { SectionList, Text, StyleSheet, View } from 'react-native';

import { Container } from './styles';








export function Home() {
  const [data, setData] = useState([
    {
      title: "26.12.22",
      data: ["20:00 | Pizza", "16:00 | Burger", " 12:30 | Risotto"],
    },
    {
      title: "20.12.22",
      data: ["20:00 | French Fries", "20:00 | Onion Rings", "20:00 | Fried Shrimps"]
    },
    {
      title: "16.12.22",
      data: ["20:00 | Water", "20:00 | Coke", "20:00 | Beer"]
    },
    {
      title: "17.12.22",
      data: ["20:00 | Cheese Cake", "20:00 | Ice Cream"]
    }
  ])

  return (
    <Container>
      <Header />
      <PorcentageCard
        percentage='91,86%'
        title='das refeições dentro da dieta'
      />

      <Button
        title='Nova refeição'
        teste='Refeições'
      />


      <SectionList
        sections={data}
        keyExtractor={item => item}
        renderItem={({ item }) => <SectionListFood title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{fontSize: 18, backgroundColor: '#fff', paddingTop: 30, paddingBottom: 8}}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
      />

    </Container>
  )
}




const styles = StyleSheet.create({

  header: {
    fontSize: 25,
    backgroundColor: "#fff",
    marginTop: 20
  },

});