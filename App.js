import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/screens/Home';
import Productinfo from './components/screens/Productinfo';
import MyCart from './components/screens/MyCart';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import Setting from './components/screens/Setting';
import { COLOURS } from './components/database/Database';
import {firebase} from './components/firebase/config';
import { useState } from 'react';
import { useEffect } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import theme from './components/darkmode/theme';
import themeContext from './components/darkmode/themeContext';
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
      <Tab.Navigator
      screenOptions={{
        
        tabBarStyle:{
        borderRadius:20,
        marginBottom:10,
        },
        tabBarShowLabel:false,
        headerShown:false
      }}
      >
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size}/>
              ),
            }} name='Home' component={Home}/>
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='heart' color={color} size={size}/>
              ),
            }} name="MyCart" component={MyCart} />
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='user' color={color} size={size}/>
              ),
            }} name="Profile" component={Profile} />
        <Tab.Screen options={{
              tabBarIcon: ({color,size}) => (
                <Icon name='cog' color={color} size={size}/>
              ),
            }} name="Setting" component={Setting} />
        
      </Tab.Navigator>
    );
  }
 function App() {
  
  const [initializing,setInitializing] = useState(true);
  const [user,setUser] = useState();


  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false)
  } 


  useEffect(() => {
    const subsciber = firebase?.auth()?.onAuthStateChanged(onAuthStateChanged);
    return subsciber;
  },[]);
  
  if (initializing) return null;

  if(!user){
    return (
       <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown:false,
      }}>     
        
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        
      </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}>
       
      <Stack.Screen name='MyTabs' component={MyTabs}/>
      <Stack.Screen name='Productinfo'component={Productinfo} />

    </Stack.Navigator>
  );
  }
  export default () => {
    const [darkMode,setDarkMode] = useState(false);
    useEffect(() => {
  const listener = EventRegister.addEventListener('ChangeTheme',(data) => {
    setDarkMode(data)
    console.log(data)
  })
  return () => {
    EventRegister.removeAllListeners(listener)
  }
},[darkMode])
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark: theme.light}>
    <NavigationContainer theme={darkMode === true ? DarkTheme: DefaultTheme}>
      
     <App/>

      
    </NavigationContainer>
    </themeContext.Provider>
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
