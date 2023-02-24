import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS, Items } from '../database/Database';
import { id } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const MyCart = ({navigation}) => {
  const [product,setProduct] = useState()
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',()=>{
      getDatafromDB()
    });

    return unsubscribe;
  },[navigation]);

  const getDatafromDB = async() => {
    let items = await AsyncStorage.getItem('cartItems')
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if(items.includes(data.id)){
          productData.push(data)
          return
        }
      })
      setProduct(productData)
    }else {
     setProduct(productData) 
    }
    
  }

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray)
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if(array[index] == id) {
          array.splice(index,1);
        }

        await AsyncStorage.setItem('cartItems',JSON.stringify(array));
        getDatafromDB();
      }
    }
  }

  const renderProducts =(data,index) => {
    return(    
      <TouchableOpacity
      key={data.id}
      onPress={()=>{
        navigation.navigate('Productinfo',{productID: data.id})
      }}
      style={{
        width:'49%',
        marginVertical:14,
        borderRadius:10,
        borderWidth:1,
        borderColor:COLOURS.backgroundMedium
      }} >
        <View style={{
        width:'100%',
        height:140,
        borderRadius:20,
        backgroundColor: COLOURS.backgroundLight,
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:8,
      }}>
          {data.isOff ? (
            <View style={{
              zIndex: 1,
              position:'absolute',
              width:'30%',
              height:'19%',
              backgroundColor: COLOURS.red,
              top:-1,
              left:-1,
              borderBottomRightRadius:10,
              borderTopLeftRadius:10,
              alignItems:'center',
              justifyContent:'center'
            }} >
              <Text style={{
                fontSize:12,
                color: COLOURS.white,
                fontWeight:'bold',
                letterSpacing:1.
              }} >{data.offPercentage}</Text>
              </View>
          ): null
                  }
          <Image style={{
            borderRadius:10,
            width:'100%',
            height:'100%',
            resizeMode:'cover'
          }} source={data.productImage} />
        </View>
        <View style={{
          alignItems:'center'
        }}>
        <Text style={{
          fontSize:18,
          color:COLOURS.black,
          fontWeight:'600',
          marginBottom:2,
        }} >
          {data.productName}
        </Text>       
        
             </View>  
            <View style={{
              
              marginBottom:5,
              height:35,
              padding:3,
              justifyContent:'center',
              alignItems:'center'
            }} > 
            <TouchableOpacity
            onPress={() => removeItemFromCart(data.id) }
            style={{
              backgroundColor:COLOURS.backgroundLight,
              borderRadius:10,
              height:'100%',
              width:'100%',
              borderWidth:1,
              opacity:0.7,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Icon style={{
                fontSize:20,
              }} name='trash'/>             
           </TouchableOpacity>
              </View> 
            
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          height:'100%',
          backgroundColor:COLOURS.white,
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
              color:COLOURS.black,
              fontWeight:'400'
            }}>Danh sách yêu thích</Text>
            <View></View>
          </View>
      <View style={{
          width:'90%',
          marginTop:10,
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:"space-between"
        }}>
        {
           product? product.map(renderProducts):null
            
        }
     </View>
     </View>
     </ScrollView> 
    </SafeAreaView>
  )
}

export default MyCart