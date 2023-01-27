import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import theme from './src/theme';

import { Loading } from '@components/Loading';
import { Home } from '@pages/Home';
import { Statistics } from '@pages/Statistics/Index';


import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}