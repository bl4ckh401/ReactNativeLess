import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import ScreenA from './Components/ScreenA';
import ScreenB from './Components/ScreenB';


export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Screen_A'
          component={ScreenA}
        />
        <Stack.Screen 
          name='Screen_B'
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:"center"
  },
})
