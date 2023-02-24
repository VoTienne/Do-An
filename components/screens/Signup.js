import { View, Text, ImageBackground,StyleSheet,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOURS } from '../database/Database'
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '../firebase/config';

const Signup = ({navigation}) => {
  const isValidationOK = () => Email.length > 0 && Password.length > 0
  && IsValidEmail == true
  && IsValidPassword == true
const [Name,onchangeName] = useState('');
const [IsValidName,setValidName] = useState('true');
const [Email,onchangeEmail]=useState('');
const [IsValidEmail,setValidEmail] = useState('true');
const [Password,onchangePassword] = useState('');
const [IsValidPassword,SetValidPassword] = useState('true');

registerUser = async (Email,Password,Name) => {
  await firebase.auth().createUserWithEmailAndPassword(Email,Password)
  .then(() => {
    firebase.auth().currentUser.sendEmailVerification({
      handleCodeInApp: true,
      url:'https://doan-99ce2.firebaseapp.com',
    })
    .then(() => {
      alert('Hãy xác minh Email')
    }).catch((error) => {
      alert(error.message)
    })
    .then(() => {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({
        Name,
        Email,
      })
    })
    .catch((error) => {
      alert(error.message)
    })
  })
  .catch ((error => {
      alert(error.message)
  }))
}
const verifyName = (Name) => {
  let regex = new RegExp(/^[a-zA-Z]{2,40}$/);
  if (regex.test(Name)){
    return true;
  }
  return false;
}

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
    <SafeAreaView>
      <ImageBackground 
      style={{
        borderWidth:1,
        height:'100%',
        width:'100%',
        alignItems:'center'
      }}
      imageStyle={{resizeMode:'cover'}}
      source={require('../database/images/products/background.jpg')}>
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
              color:COLOURS.black,
              fontWeight:'bold'
            }}>Đăng kí</Text>
            <View></View>
            </View>
      <View style={{
        //borderWidth:1,
        height:50,
        width:'80%',
        marginTop:20,
        justifyContent:'center',
        //alignItems:'center'
      }}>
        <Text style={{
          fontSize:20,
          fontWeight:'500'
        }}>Nhập thông tin của bạn</Text>
      </View>
      <View style={{
        //borderWidth:1,
        width:'80%',
        height:'25%',
        justifyContent:'center',
        marginTop:70
      }}>
        <View style={styles.textinput}>
       <View style={styles.icon}>
  <Icon name='user' style={{fontSize:20,color:COLOURS.backgroundDark}}/>
       </View>  
  <TextInput 
  onChangeText={(Name)=>{
    onchangeName(Name);
    const isvalid = verifyName(Name);
    isvalid? setValidName(true): setValidName(false);
  }}
  value={Name}
  placeholderTextColor='black' 
  autoCapitalize='none' 
  placeholder='Tên' 
  style={styles.placeholder}/>
  </View>
  <Text style={styles.textwarn}>
    {IsValidName?'': 'Tên không hợp lệ'}
    </Text>
      <View style={styles.textinput}>
       <View style={styles.icon}>
  <Icon name='envelope' style={{fontSize:20,color:COLOURS.backgroundDark}}/>
       </View>  
  <TextInput 
  onChangeText={(Email)=>{
    onchangeEmail(Email);
    const isvalid = verifyEmail(Email);
    isvalid? setValidEmail(true): setValidEmail(false);
  }}
  value={Email}
  placeholderTextColor='black' 
  autoCapitalize='none' 
  placeholder='Email' 
  style={styles.placeholder}/></View>
  <Text style={styles.textwarn}>{IsValidEmail? '': 'Email không hợp lệ!'}
    </Text>
    
    <View style={styles.textinput}>
       <View style={styles.icon}>
  <Icon name='lock' style={{fontSize:20,color:COLOURS.backgroundDark}}/>
       </View>  
  <TextInput 
  onChangeText={(Password)=>{
    onchangePassword(Password);
    const isvalid = verifyPassword(Password);
    isvalid? SetValidPassword(true): SetValidPassword(false);
  }}
  value={Password}
  keyboardType='numeric' 
  secureTextEntry={true} 
  placeholderTextColor='black'
    autoCapitalize='none' 
   placeholder='Mật khẩu' 
   style={styles.placeholder}/>
    </View>
  <Text style={styles.textwarn}>
    {IsValidPassword?'': 'Mật khẩu phải có ít nhất 5 số !'}
    </Text>
    </View>
    <View style={{
    alignItems:'center',
     width:'90%',
     height:60,
     marginTop:70
     //top:40
     }}>
<TouchableOpacity 
  onPress={() => 
registerUser(Email,Password,Name)
} 
//disabled = {isValidationOK () == false}
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
     }}> Đăng kí
     </Text>
</TouchableOpacity>
</View>
      </ImageBackground>      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  placeholder:{
    height:'100%',
    padding:5,
    width:'90%',
  },
  textinput:{
    height:'25%',
    width:'100%',
    flexDirection:'row',
    borderWidth:1,
    marginTop:10,
    borderRadius:10,
    backgroundColor:COLOURS.backgroundLight,
    borderColor:COLOURS.backgroundDark
  },
  icon:{
    height:'100%',
    width:'10%',
    justifyContent:'center',
    alignItems:'center',
  },
  textwarn:{
    color:'red',
    marginTop:10,
    marginRight:80,
    fontSize:15,
    fontWeight:'bold'
  }
  })

export default Signup