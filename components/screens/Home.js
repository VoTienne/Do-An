import { View, Text, ScrollView, TouchableOpacity,Image, FlatList  } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOURS, Items } from '../database/Database'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [products,setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect (() => {
    const unsubscribe = navigation.addListener('focus',()=>{
      getDatafromDB()
    });
    return unsubscribe;
  },[navigation])

  const getDatafromDB = () => {
      let protductList=[]
      let accessoryList=[]
      for (let index = 0; index < Items.length; index++) {
          if(Items[index].category == 'product'){
            protductList.push(Items[index]);
          }else if(Items[index].category == 'accessory') {
            accessoryList.push(Items[index]);
          }
      }
    setProducts(protductList);
    setAccessory(accessoryList);    
  };

  const ProductCard =({data}) => {
    return(    
      <TouchableOpacity
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
        <Text style={{
          fontWeight:'500',
          color:COLOURS.blue
        }}> {data.ProductPrice} VNĐ</Text>
        </View>       
            <View style={{
              padding:3,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }} > 
              <Text style={{
                fontSize:10,
                fontWeight:'500'
              }}>Tốc độ</Text>
              <Text style={{
                fontSize:10,
                fontWeight:'500'
              }} >
                lên tới {data.speed}
              </Text>
            </View>
            <View style={{
              padding:3,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }} > 
              <Text style={{
                fontSize:10,
                fontWeight:'500'
              }}>Quãng đường</Text>
              <Text style={{
                fontSize:10,
                fontWeight:'500'
                
              }} >
                {data.road}
              </Text>
            </View>
            
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView>
      <View style={{
        width:'100%',
        height:'100%',
        backgroundColor: COLOURS.white,
      }} >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"  />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:16,
        }}>
            <TouchableOpacity>
                <Icon name='user'style={{
                    fontSize:18,
                    borderWidth:1,
                    color: COLOURS.backgroundMedium,
                    padding:12,
                    borderRadius:10,
                    backgroundColor: COLOURS.backgroundLight,
                }} />
            </TouchableOpacity>
           <View style={{
            height:50,
            width:50
           }}>
            <Image style={{
              height:50,
              width:50
            }} source={require('../database/images/products/logo.png')} ></Image>
           </View>
            <TouchableOpacity
            onPress={() =>navigation.navigate('MyCart')}
            >
                <Icon name='heart'style={{
                    fontSize:18,
                    color: COLOURS.backgroundMedium,
                    padding:12,
                    borderRadius:10,
                    borderWidth:1,
                    backgroundColor: COLOURS.backgroundLight,
                }} />
            </TouchableOpacity>             
        </View>
        <View style={{
          alignItems:'center',
          padding:12,
        }}>
          <Text style={{
            fontSize:26,
            color: COLOURS.black,
            fontWeight:'bold',
            letterSpacing:1,
            marginBottom:10,
          }}>
            Chào mừng đến với VINFAST
          </Text>
          <Text style={{
            fontSize:14,
            color: COLOURS.black,
            fontWeight:'500',
            letterSpacing:1,
            
            lineHeight:20,
          }}>
            Cùng bạn bứt phá mọi giới hạn

          </Text></View>
        <View style={{padding:15}} >
        
        <View style={{
          flexDirection:'row',
          padding:5, 
          alignItems:'center',       
  
        }}>
          <Text style={{
            fontSize:18,
            color: COLOURS.black,
            fontWeight:'500',
            letterSpacing:1,
          }}> SẢN PHẨM MỚI</Text>
        </View>
        <View style={{
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:"space-between"
        }}>
            {
              products.map(data => {
                return <ProductCard data={data} key={data.id} />;
              })
            }
        </View>
        </View>

      
        <View style={{padding:15}} >
        
        <View style={{
          flexDirection:'row',
          padding:5, 
          alignItems:'center',       
  
        }}>
          <Text style={{
            fontSize:18,
            color: COLOURS.black,
            fontWeight:'500',
            letterSpacing:1,
          }}>TẤT CẢ SẢN PHẨM</Text>
        </View>
        <View style={{
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:"space-between"
        }}>
            {
              accessory.map(data => {
                return <ProductCard data={data} key={data.id} />;
              })
            }
        </View>
        </View>
      </ScrollView>
      </View>
      
    </SafeAreaView>
  )
}

export default Home