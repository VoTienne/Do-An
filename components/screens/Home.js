import { View, Text, ScrollView, TouchableOpacity,Image, FlatList  } from 'react-native'
import { useEffect, useState, useContext } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOURS, Items } from '../database/Database'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome';
import themeContext from '../darkmode/themeContext'

const Home = ({navigation}) => {
  const theme = useContext(themeContext);
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
          color:theme.color,
          fontWeight:'600',
          marginBottom:2,
        }} >
          {data.productName}
        </Text>
        <Text style={{
          fontWeight:'500',
          color:theme.blue,
        }}> {data.ProductPrice} VN??</Text>
        </View>       
            <View style={{
              padding:3,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }} > 
              <Text style={{
                color:theme.color,
                fontSize:10,
                fontWeight:'500'
              }}>T???c ?????</Text>
              <Text style={{
                color:theme.color,
                fontSize:10,
                fontWeight:'500'
              }} >
                l??n t???i {data.speed}
              </Text>
            </View>
            <View style={{
              padding:3,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }} > 
              <Text style={{
                color:theme.color,
                fontSize:10,
                fontWeight:'500'
              }}>Qu??ng ???????ng</Text>
              <Text style={{
                fontSize:10,
                fontWeight:'500',
                color:theme.color,
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
        backgroundColor: theme.background,
      }} >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"  />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'center',
            padding:16,
        }}>
            
           <View style={{
            height:50,
            width:50
           }}>
            <Image style={{
              height:50,
              width:50
            }} source={require('../database/images/products/logov.png')} ></Image>
           </View>                      
        </View>
        <View style={{
          alignItems:'center',
          padding:12,
        }}>
          <Text style={{
            fontSize:20,
            color: theme.color,
            fontWeight:'bold',
            letterSpacing:1,
            marginBottom:10,
            maxWidth:'100%'
          }}>
            Ch??o m???ng ?????n v???i VINFAST
          </Text>
          <Text style={{
            fontSize:14,
            color: theme.color,
            fontWeight:'500',
            letterSpacing:1,
            
            lineHeight:20,
          }}>
            C??ng b???n b???t ph?? m???i gi???i h???n

          </Text></View>
        <View style={{padding:15}} >
        
        <View style={{
          flexDirection:'row',
          padding:5, 
          alignItems:'center',       
  
        }}>
          <Text style={{
            fontSize:18,
            color: theme.color,
            fontWeight:'500',
            letterSpacing:1,
          }}> S???N PH???M M???I</Text>
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
            color: theme.color,
            fontWeight:'500',
            letterSpacing:1,
          }}>T???T C??? S???N PH???M</Text>
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