import { View, Text,TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOURS, Items } from '../database/Database'
import { useState, useContext } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../darkmode/themeContext';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const Setting = ({navigation}) => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={{
      height:'100%',
      width:'100%',
      //justifyContent:'center',
      alignItems:'center',
      backgroundColor:theme.background
  }}>
    <View style={{
          padding:10,
          borderBottomColor:COLOURS.backgroundMedium,
          borderBottomWidth:1,
          width:'100%',
          flexDirection:'row',
          paddingTop:16,
          paddingHorizontal:16,
          justifyContent:'space-between',
          alignItems:'center',
          }}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <Icon name='chevron-left' 
            style={{
            fontSize:18,
            color:COLOURS.backgroundDark,
            padding:12,
            backgroundColor:COLOURS.backgroundLight,
            borderRadius:12,
            }}/>
          </TouchableOpacity>
          <Text style={{
            fontSize:20,
            color:theme.color,
            fontWeight:'400'
          }}>Cài Đặt</Text>
          <View></View>
        </View>
        <View style={{
          height:'10%',
          width:'80%',
          //borderWidth:1,
          justifyContent:'space-between',
          flexDirection:'row'
        }}>
          <View style={{
            width:'40%',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text style={{fontSize:20,fontWeight:'500',color:theme.color}}>Chế độ tối</Text>
          </View>
        <Switch    
        value={darkMode}
        onValueChange={(value) => { 
          setDarkMode(value);
          EventRegister.emit('ChangeTheme', value)
        }}
        />
        </View>
    </SafeAreaView>
  )
}

export default Setting