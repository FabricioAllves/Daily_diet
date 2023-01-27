import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@pages/Home'
import { Statistics } from '@pages/Statistics'
import { Register } from '@pages/Register'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='home' component={Home}/>
      <Screen name='statistics' component={Statistics}/>
      <Screen name='register' component={Register}/>
    </Navigator>
  )
}