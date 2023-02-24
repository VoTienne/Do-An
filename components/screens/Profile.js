import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOURS, Items } from '../database/Database';
import {firebase} from '../firebase/config';
import * as ImagePicker from 'expo-image-picker';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import themeContext from '../darkmode/themeContext';
import theme from '../darkmode/theme';
const Profile = ({navigation}) => {
    const theme = useContext(themeContext);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [ image , setImage ] = useState(null);
    const [name,onchangeName] = useState('');
    const [Email,onchangeEmail] = useState('');
     useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) =>{
            if(snapshot.exists){
                onchangeName(snapshot.data()),
                onchangeEmail(snapshot.data())
            }
            else {
                console.log('user does not exist')
            }
        })
     },[])
     const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
        .then (() => {
          alert('Đã gửi email đổi mật khẩu !')
        }).catch((error) => {
          alert(error)
        })
      }

      useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
      },[]);
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        console.log(result);

        if(!result.cancelled){
            setImage(result.uri);
        }
      };

      if(hasGalleryPermission === false) {
        return <Text>No acces to Internet Storage</Text>
      }

  return (
    <SafeAreaView style={{
        height:'100%',
        width:'100%',
        //justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.background,
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
            }}>Hồ sơ</Text>
            <View></View>
          </View>
          <View style={{
            //borderWidth:1,
            height:'20%',
            width:'80%',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <View style={{
                height:100,
                width:100,
                borderWidth:1,
                borderRadius:50,
                marginTop:30,
                borderColor:theme.color
            }}>
               {image && <Image source={{uri: image}} style={{height:'100%',width:'100%',borderRadius:50,}} />} 
            </View>
            <View style={{
                bottom:20,
                left:22,
                //borderWidth:1,
                borderRadius:20,
                padding:10,
                zIndex:1,
                backgroundColor:COLOURS.backgroundLight
            }}>
                <TouchableOpacity onPress={() => pickImage()}>
                    <Icon name='camera' style={{fontSize:20}}/>
                </TouchableOpacity>
                
            </View>

          </View>
          <View style={{
                marginTop:10,
                //borderWidth:1,
                height:'60%',
                width:'90%',
                alignItems:'center'
            }}>
                <View style={styles.section}>
                    <View style={{
                        height:'100%',
                        width:'15%',
                        borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLOURS.backgroundDark
                    }}>
                        <Icon style={{fontSize:20}} name='user'/>
                    </View>
                    <View style={{
                        width:'70%',
                        height:'100%',
                        //borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                        marginRight:50
                    }}>
                        <Text style={{fontSize:15,fontWeight:'500'}}>{name.Name}</Text>
                    </View>
                    <View></View>
                </View>
                <View style={styles.section}>
                    <View style={{
                        height:'100%',
                        width:'15%',
                        borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLOURS.backgroundDark
                    }}>
                        <Icon style={{fontSize:20}} name='envelope'/>
                    </View>
                    <View style={{
                        width:'70%',
                        height:'100%',
                        //borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{fontSize:15,fontWeight:'500'}}>{name.Email}</Text>
                        
                    </View>
                    <View></View>
                </View>
                <View style={{
                    borderTopWidth:1,
                    borderColor:COLOURS.backgroundMedium,
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'70%',
                    height:100,
                    marginTop:30,
                    padding:10,
                }}>
                    <TouchableOpacity 
                    onPress={() =>{changePassword()}}
                    >
                        <Text style={{
                            fontSize:20,
                            fontWeight:'500',
                            color:theme.blue
                        }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => firebase.auth().signOut()}
                    >
                        <Text style={{
                            fontSize:20,
                            fontWeight:'500',
                            color:theme.blue
                        }}>Đăng xuất</Text>
                    </TouchableOpacity>

                </View>
                </View>
            
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    icon:{
        //borderWidth:1,
        height:'100%',
        width:'10%',
        justifyContent:'center',
        alignItems:'center' 
    },
    section:{
        marginTop:10,
        borderRadius:20,
        //borderWidth:1,
        height:'12%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLOURS.backgroundMedium
    }
})
export default Profile