import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import theme from './src/theme';

import { Loading } from '@components/Loading';
import { Home } from '@pages/Home';

import { Estatisticas } from '@pages/Estatisticas';
import { StatusBar } from 'react-native';
import { New } from '@pages/New';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Estatisticas /> : <Loading />}
    </ThemeProvider>
  );
}