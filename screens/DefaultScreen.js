import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native'
import { COLORS, SIZES, icons, FONTS } from '../constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./Home";
import DefaultScreen from './DefaultScreen';

//import Searchbar from '../constants/SearchBar'
function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }
  
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function MyDrawer() {
    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="DefaultScreen" component={DefaultScreen} />
      </Drawer.Navigator>
    );
  }

const ItemDetail = ({ route, navigation }) => {
    // Render

    function renderHeader() {
        return (
            <MyDrawer />
        )
    }

    function renderInfo() {
        let { itemInfo } = route.params;

        if (itemInfo) {
            return (
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}
                >
                    {renderHeader()}

                    {/* Product Tag */}
                    <View
                        style={{
                            position: 'absolute',
                            top: '35%',
                            left: '15%',
                            borderRadius: 80,
                            backgroundColor: COLORS.transparent,
                            height: 40,
                            width: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: '32%',
                            left: '5%',
                            flexDirection: 'row',
                            padding: SIZES.radius * 1.5,
                            backgroundColor: COLORS.transparentLightGray1,
                            width: '50%',
                            borderRadius: 10
                        }}
                    >
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>
                                {itemInfo.productName}
                            </Text>
                        </View>

                        <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>
                                Rs {itemInfo.price.toFixed(2)}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: "20%",
                            left: SIZES.padding,
                            right: SIZES.padding
                        }}
                    >

                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: "20%",
                            left: SIZES.padding,
                            right: SIZES.padding
                        }}
                    >
                    <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.black, ...FONTS.h3,
                            padding: SIZES.radius * 1.5,
                            backgroundColor: COLORS.transparentLightGray1,
                            borderRadius: 10,
                            position: 'absolute',
                            left:'-1%',
                            //marginTop:'5',
                            
                            }}>
                            Looking for a captivating and enticing black dress that will make you shine? This magnificent black ‘Raw Silk’ three-piece suit is a must have. Embellishments feature embroidery on the neckline and sleeves. Pro tip to style: pair it with some black jhumka’s and some black dainty heels. Perfect for all seasons.                            </Text>
                    </View>   

                        <Text style={{ color: COLORS.lightGray2, ...FONTS.body2 }}>Presenting You</Text>
                        <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>{itemInfo.productName}</Text>
                    </View>
                </ImageBackground>
            )
        } else {
            <View></View>
        }

    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    flexDirection: 'row',
                    height: 70,
                    backgroundColor: COLORS.white,
                    borderRadius: 35
                }}
            >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.dashboard}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 10,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={() => console.log("Add on clicked")}
                    >
                        <Image
                            source={icons.plus}
                            style={{
                                tintColor: COLORS.white,
                                height: 20,
                                width: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => console.log("Profile on clicked")}
                    >
                        <Image
                            source={icons.user}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderInfo()}
            {renderFooter()}
        </View>
    )
}
export default ItemDetail;