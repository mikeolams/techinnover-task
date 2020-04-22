import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function StoreScreen() {

    const [productsArray, setProductsArray] = useState([]);
    const [productsReceived, setProductsReceived] = useState(false);

    const fetchProducts =async () => {    
        await fetch('https://farmcenta.com/api/v1/products')
       .then(resp=>resp.json())
       .then(json =>{
    //      json.map((item)=> {
    //     //  if(item.categories[0]===124){
    //     //    // console.log(item.categories[0])
    //     // //    setNewArray(newArray.push(item))
    //     //  }
    //    })
    setProductsArray(json)
    setProductsReceived(true)
    // console.log(productsArray.products[0].category)
    // console.log(productsArray.products[10])
    // console.log(productsArray)
    // console.log(productsReceived)
    // console.log(productsArray) photo,category,amount,status, name,location,id,desc,

        //  save(JSON.stringify(newArray));
 
       } )
       .catch(err=> {
         console.log(err);
         setProductsArray(err)
         console.log(productsArray)
        //  setNewsItems(newsItems.push(err.message));
       });
     };

     useEffect(() => {
        fetchProducts();
           // retrieveData();
        }, []);


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer} >
                    <Image
                        source={
                            require('../assets/images/logo.png')
                        }
                        style={styles.logoImage}
                    />
                </View>
                <ScrollView
                    // style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <View style={styles.content2Container}>
                        <View style={{...styles.rowContainer, justifyContent:'center'}} >
                            <Text style={styles.text2}>Farm Store</Text>
                        </View>
                        <View style={styles.productsContainer} >
                        {productsReceived? productsArray.products.map((item)=>
                            <TouchableOpacity key={item.id}style={styles.itemContainer}>
                                <Image
                                source={
                                    {uri:'https://farmcenta.com'+item.photo}
                                }
                                style={styles.itemImage}
                            />
                            {/* {productsArray.products.map((item)=>{console.log(item.photo)})} */}
                             <Text style={styles.itemTitle}>{item.name}</Text>
                            {/* <Text>{productsArray.products[0].category}</Text> */}
                            <View style={styles.itemTextBelow}>
                                {/* <View><Text>N{item.amount}</Text></View> */}
                                <View><Text>{item.location}</Text></View>
                            </View>
                            </TouchableOpacity>):null}
                            </View>
                        
                        {/* <View style={styles.rowContainer} > */}
                            
                            {/* <Text>{productsArray.products[0].category}</Text> */}
                            {/* <Image
                                source={
                                    {uri:'https://farmcenta.com'+productsArray.products[0].photo}
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View> */}

                        {/* <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View> */}
                        
                    </View>
                </ScrollView>

            </View>


            {/* <View style={styles.tabBarInfoContainer}>
                <Text style={styles.tabBarInfoText}>
                    This is a tab bar. You can edit it in:
        </Text>

                <View
                    style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                    <MonoText style={styles.codeHighlightText}>
                        navigation/MainTabNavigator.js
          </MonoText>
                </View>
            </View> */}
        </View>
    );
}

StoreScreen.navigationOptions = {
    header: null,
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
            <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
                Learn more
      </Text>
        );

        return (
            <Text style={styles.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
            </Text>
        );
    } else {
        return (
            <Text style={styles.developmentModeText}>
                You are not in development mode: your app will run at full speed.
      </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/development-mode/'
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop:80
    },
    innerContainer: {
        flex: 1,
        // paddingBottom:50
        // alignItems:'center',
    },
    contentContainer: {
        // flex: 1,
        alignItems: 'center',
        // paddingBottom:200
    },
    productsContainer:{
        flex: 1,
        flexWrap:"wrap",
        flexDirection: 'row',
        // backgroundColor:'yellow',
        justifyContent:'center'
    },
    itemContainer:{
        // flex:1,
        alignItems: 'center',
        // textAlign: 'center',
        // backgroundColor:'yellow'
        width:'30%',
        margin:4,
        borderWidth:.7,
        borderColor:'black',
        borderRadius:20
    },
    itemTitle:{
        textAlign:'center',
        fontWeight:'bold'
    },
    itemTextBelow:{
        // width:'100%',
        // flex:2,
        // backgroundColor:'white',
        marginTop:15,
        // flexDirection: 'row',
        // justifyContent:'space-between',
        // marginHorizontal:6
        // alignContent:'space-between'
    },
    imageContainer: {
        // flex:1,
        paddingTop: 1,
        alignItems: 'center',
        // backgroundColor: '#222',
    },
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        // paddingHorizontal: 15,
    },
    text: {
        color: 'white',
    },
    boldText: {
        color: 'white',
        fontWeight: 'bold'
    },
    content2Container: {
        flex: 1,
        paddingTop:10,
        marginVertical: 15,
        justifyContent: 'space-between',
        //   alignItems:'center',
        // backgroundColor: '#eee',
        width: '100%',
        // borderRadius: 10,
        // height:"20%"
        // paddingBottom:50
    },

    text2: {
        color: '#0E861C',
        fontWeight:'bold'
    },
    logoImage: {
        width: 180,
        height: 50,
        resizeMode: 'contain',
        marginTop:40
    },
    itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        margin:10
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
