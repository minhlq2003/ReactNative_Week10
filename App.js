
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import Screen02 from './components/Screen02';
import Screen01 from './components/Screen01';
import Screen03 from './components/Screen03';
import Screen04 from './components/Screen04';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen name='Screen02' component={Screen02} />
        <Stack.Screen name='Screen03' component={<Provider store={store}>
      <Screen02 />
    </Provider>} />
        <Stack.Screen name='Screen04' component={Screen04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}