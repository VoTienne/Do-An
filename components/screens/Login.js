import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image,Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { COLOURS } from '../database/Database';
const windowHeight = Dimensions.get('window').height;
export default Login = ({navigation}) => {
  const isValidationOK = () => Email.length > 0 && Password.length > 0
                            && IsValidEmail == true
                            && IsValidPassword == true
  const [Email,onchangeEmail]=useState('');
  const [IsValidEmail,setValidEmail] = useState('true');
  const [Password,onchangePassword] = useState('');
  const [IsValidPassword,SetValidPassword] = useState('true');
  const verifyEmail = (Email) => {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(regex.test(Email)) {
    return true;
  }
  return false;

  }
  const verifyPassword = (Password) => {
    let regex = new RegExp(/(?=.{5,})/);
    if(regex.test(Password)) {
    return true;
  }
  return false;
  }

  return (
    <SafeAreaView style={{
        height:'100%',
        width:'100%',
        backgroundColor:COLOURS.white
    }} > 
        <View style={{       
                justifyContent:'center',
                alignItems:'center'
        }}>
        <View style={{
            width:'45%',
            height:'45%',
            
        }}>
     <Image 
     style={{
        resizeMode:'cover',
        height:'100%',
        width:'100%'}}  
    source={require('../database/images/products/logov.png')}>

    </Image>
     
</View>

</View>
<View style={{flex:1}}>
  <View style={{
    height:'30%',
    width:'100%',
    marginTop: windowHeight/30,
    justifyContent:'center',
    alignItems:'center',
    }}>
  <TextInput 
  onChangeText={(text)=>{
    onchangeEmail(text);
    const isvalid = verifyEmail(text);
    isvalid? setValidEmail(true): setValidEmail(false);
  }}
  value={Email}
  placeholderTextColor='black' 
  autoCapitalize='none' 
  placeholder='Email' 
  style={{
    height:50,width:'70%',
    borderBottomColor:'black',
    borderBottomWidth:2,
    bottom:10
    }}/>
  <Text style={{
    color:'red',
    right:75,
    fontSize:15,
    fontWeight:'bold'
    }}>{IsValidEmail? '': 'Email không hợp lệ!'}
    </Text>
  <TextInput 
  onChangeText={(text)=>{
    onchangePassword(text);
    const isvalid = verifyPassword(text);
    isvalid? SetValidPassword(true): SetValidPassword(false);
  }}
  value={Password}
  keyboardType='numeric' 
  secureTextEntry={true} 
  placeholderTextColor='black'
    autoCapitalize='none' 
   placeholder='Mật khẩu' 
   style={{
    height:50,
    width:'70%',
    borderBottomColor:'black',
    borderBottomWidth:2,
    marginTop:10
    }}/>
  <Text style={{
    color:'red',
    marginTop:10,
    marginRight:80,
    fontSize:15,
    fontWeight:'bold'
    }}>{IsValidPassword?'': 'Mật khẩu phải có ít nhất 5 số !'}
    </Text>
  <View style={{
    alignItems:'center',
     width:'90%',
     height:60,
     top:40
     }}>
<TouchableOpacity 
  onPress={() => {
navigation.navigate('Home');
}} 
disabled = {isValidationOK () == false}
  style={{
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 2,
},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 6, borderRadius:30, width:'60%',height:'100%', backgroundColor:isValidationOK()==true?COLOURS.blue:'#1e90ff',justifyContent:'center',alignItems:'center'}}>
<Text style={{
    fontWeight:'bold',
    fontSize:15,
     color:'white',
     }}> Đăng nhập
     </Text>
</TouchableOpacity>
{/* <View style={{width:'100%',height:30,top:30,flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity 
onPress={() => {
  navigation.navigate('Signup');
}}

style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'black',}}>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'white',}}>Forgot Password ?</Text>
</TouchableOpacity>
</View> */}


  </View>
  </View>
  </View>
  
  


      <StatusBar style="light" />
     
    </SafeAreaView>
  );
}