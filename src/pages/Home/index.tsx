import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { PorcentageCard } from '@components/PorcentageCard';
import { SectionList, Text, StyleSheet, View } from 'react-native';

import { Container } from './styles';

type Item = string

interface Section {
  title: string;
  data?: Item[]
}


const DATA = [
  {
    title: "26.12.22",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "20.12.22",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "16.12.22",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "17.12.22",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }: Section) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export function Home() {
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
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />

    </Container>
  )
}




const styles = StyleSheet.create({

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 25,
    backgroundColor: "#fff",
    marginTop: 20
  },
  title: {
    fontSize: 24
  }
});