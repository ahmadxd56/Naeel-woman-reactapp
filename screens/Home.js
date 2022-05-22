import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
//import Cart from "../screens/Cart";

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>

            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate("ItemDetail", { "itemInfo": item })}
        >
            <View style={{ width: SIZES.width / 2 }}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: SIZES.radius * 2 }}
                />

                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                    <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Eid Collection</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
                </View>

                <View style={{ position: 'absolute', bottom: 20, left: 30, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                    <Text style={{ ...FONTS.h2 }}>Rs {item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => `${item.productId}`}
            />
        </View>
    )
}

const Home = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Featured",
            title: "EID-OUTFITS",
            productList: [
                {
                    productId: 1,
                    productName: 'Zinnia',
                    price: 2000.00,
                    image: images.dressTwo,
                },
                {
                    productId: 2,
                    productName: 'Amethyst',
                    price: 3000.00,
                    image: images.dressOne,
                },
                {
                    productId: 3,
                    productName: 'Sang-e-Marmar',
                    price: 9000.00,
                    image: images.dressThree,
                },
            ]
        },
        {
            id: 1,
            name: "One-Piece",
            title: 'One-Piece ',
            productList: [
                {
                    productId: 4,
                    productName: 'Shintel',
                    price: 6000.00,
                    image: images.dressFour,
                },
                {
                    productId: 5,
                    productName: 'Sigma',
                    price: 9000.00,
                    image: images.dressFive,
                },
                {
                    productId: 6,
                    productName: 'Azmir',
                    price: 3000.00,
                    image: images.dressSix,
                },

            ]
        },
        {
            id: 2,
            name: "Two-Piece",
            title: 'Two-Piece',
            productList: [
                {
                    productId: 7,
                    productName: 'Mikail',
                    price: 7000.00,
                    image: images.dressSeven,
                },
                {
                    productId: 8,
                    productName: 'Amber',
                    price: 4000.00,
                    image: images.dressEight,
                },
                {
                    productId: 9,
                    productName: 'Pastel',
                    price: 1200.00,
                    image: images.dressNine,
                },

            ]
        },
        {
            id: 3,
            name: "Extras",
            title: 'Add-Ons',
            productList: [
                {
                    productId: 10,
                    productName: 'Dupattas',
                    price: 2000.00,
                    image: images.dressEleven,
                },
                {
                    productId: 11,
                    productName: 'Shirts',
                    price: 4000.00,
                    image: images.dressTwelve,
                },
                {
                    productId: 12,
                    productName: 'Trousers',
                    price: 1000.00,
                    image: images.dressThirteen,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Outfits",
        title: 'Outfits',
        productList: [
            {
                productId: 1,
                productName: 'Pastel',
                price: 1200.00,
                image: images.dressNine,
            },
            {
                productId: 2,
                productName: 'Mikail',
                price: 7000.00,
                image: images.dressSeven,
            },
            {
                productId: 3,
                productName: 'Sigma',
                price: 9000.00,
                image: images.dressFive,
            },

        ]
    })

    // Render

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, backgroundColor: COLORS.black, top:'3%', height:'4%'}}>
                    <Text style={{ color:'white', textAlign:'center', fontSize:15 ,marginTop:5}}>FREE SHIPPING OVER 5000rs!</Text>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding ,top:'2%'}}>
                <Text style={{ color: COLORS.black, ...FONTS.bold}}>NAEEL WOMEN - PRESENTS YOU THEIR EXCLUSIVE</Text>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )
    }

    function renderPromotionCard() {
        return (
            <View
                style={[styles.shadow, {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 110,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }]}
            >
                <View
                    style={{
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: 20
                    }}
                >
                    <Image
                        source={images.sofa}
                        resizeMode="contain"
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                </View>

                {/* Wordings section */}
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2 }}>Proceed To Login</Text>
                    <Text style={{ ...FONTS.body3 }}>Click here</Text>
                </View>

                {/* Button */}
                <View style={{ marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70%',
                            width: 40,
                            borderRadius: 10
                        }}
                    //Cart to Be Added Here
                        onPress={() => { navigation.navigate(Cart) }}
                    >
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{
                                height: '50%',
                                width: '50%'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle(selectedTab.title)}

            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex: 1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            {/* Footer - Promotion Card */}
            <View style={{ height: "19%", justifyContent: 'flex-end' }}>
                {renderPromotionCard()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})
export default Home;