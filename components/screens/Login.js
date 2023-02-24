import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image,Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { COLOURS } from '../database/Database';
import { firebase } from '../firebase/config';
const windowHeight = Dimensions.get('window').height;
export default Login = ({navigation}) => {
  const isValidationOK = () => Email.length > 0 && Password.length > 0
                            && IsValidEmail == true
                            && IsValidPassword == true
  const [Email,onchangeEmail] = useState('');
  const [IsValidEmail,setValidEmail] = useState('true');
  const [Password,onchangePassword] = useState('');
  const [IsValidPassword,SetValidPassword] = useState('true');
  loginUser = async ( Email,Password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(Email,Password)
    }catch (error ){
      alert('Tài khoản không hợp lệ')
    }
  }
 
  const forgetPassword = () => {
    firebase.auth().sendPasswordResetEmail(Email)
    .then (() => {
      alert('Đã gửi email đổi mật khẩu !')
    }).catch((error) => {
      alert('Hãy nhập Email !')
    })
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
    <SafeAreaView  > 
      <KeyboardAvoidingView>
    <ImageBackground 
    source={require('../database/images/products/background.jpg')}
    imageStyle={{
      resizeMode:'cover'
    }}
    style={{
    
       height:'100%',
        //width:'100%',
        backgroundColor:COLOURS.white,
        //justifyContent:'center',
        alignItems:'center'
    }}>
        <View style={{
          //borderWidth:1,
            width:'45%',
            height:'15%',
            marginTop:15
        }}>
     <Image 
     style={{
        resizeMode:'contain',
        height:'100%',
        width:'100%'}}  
    source={require('../database/images/products/logov.png')}>

    </Image>     
</View>
 <View style={{
       // borderWidth:1,
        height:'7%',
        width:'80%',
        justifyContent:'center',
        marginTop:40
      }}>
      <Text style={{
        fontSize:30,
        fontWeight:'bold'
      }}>Đăng nhập</Text>
      </View>
     
       <View style={{
        //borderWidth:1,
        width:'80%',
        height:'25%',
        justifyContent:'center'
      }}>
       
        <View style={styles.textinput}>
       <View style={styles.icon}>
  <Icon name='envelope' style={{fontSize:20,color:COLOURS.backgroundDark}}/>
       </View> 
 <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
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
  style={styles.placeholder}/>
  </TouchableWithoutFeedback>
   </View>
   
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
     marginTop:10
     //top:40
     }}>
<TouchableOpacity 
  onPress={() => {
    loginUser(Email,Password)
}} 
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
     }}> Đăng nhập
     </Text>
</TouchableOpacity>
 <View style={{width:'100%',height:30,top:30,flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity 
onPress={() => {
  navigation.navigate('Signup');
}}

style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'black',}}>Đăng kí</Text>
</TouchableOpacity>
<TouchableOpacity 
onPress={() => {forgetPassword()}}
style={{height:'100%',width:'35%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:COLOURS.black,}}>Quên mật khẩu ?</Text>
</TouchableOpacity>
</View> 

</View>
      <StatusBar style="dark" />
     </ImageBackground>
     </KeyboardAvoidingView>
    </SafeAreaView>
  );
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