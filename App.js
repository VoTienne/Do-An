import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/screens/Home';
import Productinfo from './components/screens/Productinfo';
import MyCart from './components/screens/MyCart';
import Login from './components/screens/Login';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown:false,
      }
      }
        
      
      >
        <Stack.Screen name='Home'component={Home} />
        <Stack.Screen name='MyCart'component={MyCart} />
        <Stack.Screen name='Productinfo'component={Productinfo} />
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
