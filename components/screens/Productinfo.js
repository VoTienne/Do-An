import { View, Text, ScrollView, TouchableOpacity, FlatList, Dimensions,Image,Animated, ImageBackground, Linking, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOURS, Items } from '../database/Database';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
const Productinfo = ({route,navigation}) => {
  const {productID} = route.params;
  const [product, setProduct] = useState({});
  const width= Dimensions.get('window').width;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',()=>{
      getDatafromDB()
    });

    return unsubscribe;
  },[navigation]);

  const getDatafromDB = async() => {
    for (let index = 0; index < Items.length; index++){
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };
  
  const payment = () =>{
    Alert.alert('Thông báo', 'Hãy đến chi nhánh Vinfast gần nhất để tiếp tục thủ tục !', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Home'),
        style: 'Ok',
      },
     
  ])
};
  const favorite = () => {
    Alert.alert('Đã thêm vào danh sách yêu thích !','Xem danh sách yêu thích ?',[
      {
        text:'Có',
        onPress: () => navigation.navigate('MyCart'),
        style: 'Có',
      },
      {
        text:'Không',
        
        style: 'Không',
      },
    ])
  } ;

  const addToCart = async(id) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray)
    if (itemArray) {
      let array = itemArray
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems',JSON.stringify(array));
        favorite();
       
      } catch (error) {
        return error;
      }
    }
    else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems',JSON.stringify(array));
        favorite();
       
      } catch (error) {
        return error;
      }
    }
  }
  const renderProduct = ({item,index}) => {
    return(
      <View style={{
        width: width/2.5,
        height:250,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:5,
      }} >
        <Image source={item} style={{
          borderColor:COLOURS.black,
          borderWidth:1,
          borderRadius:10,
          width:'100%',
          height:'100%',
          resizeMode:'cover'
        }} />
        
      </View>
    )
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <ImageBackground  imageStyle={{resizeMode:'cover', width:'100%', height:'18%',marginBottom:50}}source={product.productImage}>   
      <View style={{
            padding:10,
            width:'100%',
            flexDirection:'row',
            paddingTop:16,
            paddingHorizontal:16,
            justifyContent:'space-between',
            alignItems:'center',
            }}>
        <TouchableOpacity 
        onPress={()=>navigation.goBack()}
        
        >
          <Icon name='chevron-left' 
          style={{fontSize:18,
            color:COLOURS.backgroundDark,
            padding:12,
            backgroundColor:COLOURS.backgroundLight,
            borderRadius:12,
            }}/>
        </TouchableOpacity>
        </View>
        <View style={{
          marginTop:200,
          paddingHorizontal: 16,
          backgroundColor:COLOURS.white,
          borderRadius:35,
          height:'100%',
          
          
         

        }} >
        
        <View style={{
          alignItems:'center',
          marginTop:10,
          height:'20%',
          justifyContent:'space-between',
          paddingBottom:0,
          borderBottomWidth:1,
          borderColor:COLOURS.backgroundMedium

          //justifyContent:'center',
          
          

        }}>
          <View style={{
            width:'100%',

            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <View></View>
            <View style={{
              marginLeft:50
            }}>
          <Text style={{           
            fontSize:40,
            fontWeight:'bold',
            letterSpacing:10,

            color:COLOURS.red
          }} >{product.productName}
          </Text></View>
          <TouchableOpacity
          onPress={()=> addToCart(product.id)}
          style={{
            borderColor:COLOURS.red,
            borderRadius:20,
            height:40,
            width:40,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1
          }}>
          <Icon name='heart' style={{
            fontSize:20,
            color:COLOURS.red,
          }} />
           </TouchableOpacity>
          </View>
           <Text style={{
            fontSize:15,
            fontWeight:'500',
            //letterSpacing:1,
            //opacity:0.6,
            lineHeight:20,
            //color:COLOURS.black,
            marginTop:-5,     
            marginBottom:10,
            
            
        }}>
          
          {product.description}
        </Text>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          height:'20%',
          width:'100%',
          
        }}>
          <View style={{
            height:'100%',
            width:'33%',           
            alignItems:'center'
          }}>
            <Text style={{
              fontWeight:'500'
            }}>{product.speed}</Text>
            <Text style={{
              fontSize:13
            }}>Tốc độ tối đa</Text>
          </View>
          <View style={{
            height:'100%',
            width:'33%',           
            alignItems:'center'
          }}>
            <Text style={{
              fontWeight:'500'
            }}>{product.road}</Text>
            <Text style={{
              fontSize:13
            }}>Quãng đường</Text>
            <Text>di chuyển</Text>
          </View>
          <View style={{
            height:'100%',
            width:'33%',
            alignItems:'center'
          }}>
            <Text style={{
              fontWeight:'500'
            }}>{product.cop}</Text>
            <Text style={{
              fontSize:13
            }}>Độ rộng cốp xe</Text>            
          </View>          
        </View>
        <View style={{
          alignItems:'center'
        }}>
        <View style={{
              flexDirection:'row',
              marginBottom:20,
            }}>
              <Text style={{
                fontSize:20,
                color:COLOURS.backgroundDark
              }}>Giá niêm yết </Text>
              <Text style={{
                fontWeight:'500',
                fontSize:20,
              }}>{product.ProductPrice} VNĐ</Text>

              </View>
              <Text style={{
                marginBottom:30,
                color:COLOURS.backgroundDark
              }}>(Đã bao gồm VAT và sạc)</Text>
              </View>
        </View> 
          <View style={{
            marginTop:10,
          marginBottom:10,
          height:480,
          width:'100%',          
          justifyContent:'space-between'
          
        }}>
          <View style={{
            width:'100%',
            height:90,        
            alignItems:'center',
            
          }}>
            <View style={{
              alignItems:'center',
              width:'80%',
              height:30,
             
              flexDirection:'row'
            }}>
            <Icon style={{
              marginTop:3,
              fontSize:25,
              color:COLOURS.backgroundDark
            }} name='shield' />
            <Text style={{
              fontSize:25,
              fontWeight:'400'
            }}>  AN TOÀN</Text>
            </View>
            <View style={{
              marginTop:5,
              width:'100%',            
              //justifyContent:'center'
            }}>
              <Text style={{
                color:COLOURS.backgroundDark,
                marginTop:10,
                fontSize:15,
                fontWeight:'500'
              }}>{product.dis1}</Text>
            </View>
          </View>
          <View style={{
            width:'100%',
            height:90,
            alignItems:'center'
          }}>
            <View style={{
              alignItems:'center',
              width:'80%',
              height:30,
              flexDirection:'row'
            }}>
            <Icon style={{
              marginTop:3,
              fontSize:25,
              color:COLOURS.backgroundDark
            }} name='battery' />
            <Text style={{
              fontSize:25,
              fontWeight:'400'
            }}> Pin</Text>
            </View>
            <View style={{
              marginTop:5,
              width:'100%',
              //justifyContent:'center'
            }}>
              <Text style={{
                color:COLOURS.backgroundDark,
                fontSize:15,
                marginTop:10,
                fontWeight:'500'}}>{product.dis2}</Text>
            </View>
          </View>
          <View style={{
            width:'100%',
            height:90,
            alignItems:'center'
          }}>
            <View style={{
              alignItems:'center',
              width:'80%',
              height:30,
              flexDirection:'row'
            }}>
            <Icon style={{
              marginTop:3,
              fontSize:25,
              color:COLOURS.backgroundDark
            }} name='superpowers' />
            <Text style={{
              fontSize:25,
              fontWeight:'400'
            }}>  ĐỘNG CƠ</Text>
            </View>
            <View style={{
              marginTop:5,
              width:'100%',
              //justifyContent:'center'
            }}>
              <Text style={{
                color:COLOURS.backgroundDark,
                fontSize:15,
                marginTop:10,
                fontWeight:'500'}}>{product.dis3}</Text>
            </View>
          </View>
          <View style={{
            width:'100%',
            height:90,
            alignItems:'center'
          }}>
            <View style={{
              alignItems:'center',
              width:'80%',
              height:30,
              flexDirection:'row'
            }}>
            <Icon style={{
              marginTop:3,
              fontSize:25,
              color:COLOURS.backgroundDark
            }} name='microchip' />
            <Text style={{
              fontSize:25,
              fontWeight:'400'
            }}>  CÔNG NGHỆ</Text>
            </View>
            <View style={{
              marginTop:5,
              width:'100%',
              //justifyContent:'center'
            }}>
              <Text style={{
                color:COLOURS.backgroundDark,
                fontSize:15,
                marginTop:10,
                
                fontWeight:'500'}}>{product.dis4}</Text>
            </View>
          </View>
          
                
        </View> 
           <View style={{
            borderTopWidth:1,
            borderTopColor:COLOURS.backgroundMedium,
            marginTop:25,
          paddingHorizontal:16,
          paddingBottom:10
        }}>
          <Text style={{
            fontSize:18,
            fontWeight:'500',
            maxWidth:'85%',
            marginTop:5,
          }}>
            Một số hình ảnh
          </Text>         
        </View>
       <FlatList
       style={{
        paddingBottom:200
       }}
       data={product.productImageList ? product.productImageList : null}
       horizontal
       renderItem={renderProduct}
       >

       </FlatList>
       
        </View>
      </ImageBackground>
      </ScrollView>
      <View style={{
        position:'absolute',
        
        bottom:10,
        height:'8%',
        width:'95%',
        justifyContent:'center',
        alignItems:'center',
        
      }}>
        <TouchableOpacity
        onPress={() => payment()}
        style={{
          width:'80%',
          height:'90%',
          backgroundColor:COLOURS.blue,
          borderRadius:20,          
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text style={{
            color:COLOURS.white,
            fontSize:15,
            fontWeight:'bold'
          }}>MUA NGAY</Text> 
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  )
}

export default Productinfo