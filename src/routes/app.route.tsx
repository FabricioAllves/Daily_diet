import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@pages/Home'
import { Statistics } from '@pages/Statistics/Index'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='home' component={Home}/>
      <Screen name='statistics' component={Statistics}/>
    </Navigator>
  )
}