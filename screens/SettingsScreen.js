import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function SettingsScreen(props) {

    const [userInfo, setUserInfo] = useState(''),
     [token, setToken] = useState('');
    //  [userSetting, setUserSetting] = useState(navigation.getParam('setting'));
    //  [userSetting, setUserSetting] = useState(false);
    //  console.log(props.navigation.getParam('setting')) const userSetting = navigation.getParam('setting', 'NO-set');
    //  const userSetting = navigation.getParam('setting', 'NO-set');
    // let sum=0;
    // let sum = await AsyncStorage.getItem("setting");
    // console.log('sum: ' +sum);
    // console.log(props.navigation.state.params.screenToggle);
    // console.log(props.navigation.state);
  
    const loadPrivateInvest = ()=>{
        return <WebView originWhitelist={['*']} 
        style={styles.webPostion}
        onNavigationStateChange={handleWebView}
        source={{uri:'https://centavestng.com/mobile/private?token='+token}}/>
    };
    const loadSetting = ()=>{
        return <WebView originWhitelist={['*']} 
        style={styles.webPostion}
        onNavigationStateChange={handleWebView}
        source={{uri:'https://centavestng.com/api/v1/profile?token='+token}}/>
        // source={{uri:'https://farmcenta.com/api/v1/profile?token='+token}}/>
    };
    // const loadFunction =()=>props.navigation.setParams({'screenToggle':'false'});
    const loadFunction =()=>props.navigation.setParams({'Page': togglePage});
       
        const togglePage = ()=>{
            // setUserSetting(false);
            props.navigation.setParams({'screenToggle':'false'});   
        };
        
    
    const retrieveUserInfo = async () => {
      try {
        const name = await AsyncStorage.getItem("user"),
    tokenKey= await AsyncStorage.getItem("token"),
    // settings= await AsyncStorage.getItem("setting"),
    avatar= await AsyncStorage.getItem("avatar");
    setToken(tokenKey);
    // setUserSetting(settings);
    if (avatar !== null) {
      // You can access your data
      setUserInfo([name, avatar]);
    //   console.log(userInfo,settings);
    //   console.log('fun: '+settings);
    //   setUserSetting(settings);
    //   console.log(userSetting);
    }
      } catch (error) {
        console.log(error);
      }
    };

     useEffect(() => {
           retrieveUserInfo();
           loadFunction();
        }, []);
        

         const  handleWebView = (newNavState) => {    
        // console.log(newNavState);
            const { canGoBack } = newNavState;
            if (!canGoBack) return;
            // console.log(canGoBack)
            }

    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
            
            {/* <View> */}
                <View style={styles.imageContainer} >
                    <Image
                        source={
                            require('../assets/images/centavestLogoMd.png')
                        }
                        style={styles.logoImage}
                    />
                </View>
                {/* <View style={styles.id}>
           </View> */}
           {/* </View> */}
           {/* {settings? loadSetting():loadPrivateInvest()} */}
           {
            props.navigation.state.params===undefined?null:
           props.navigation.state.params.screenToggle==='true'? loadSetting():loadPrivateInvest()
           }
           {/* {userSetting? loadSetting():loadPrivateInvest()} */}
           {/* {false? loadSetting():loadPrivateInvest()} */}
           {/* {console.log('us ' +userSetting)} */}
           {/* {console.log('nav: '+props.navigation.getParam('setting'))} */}
            </View> 
        </View>
    );
}

SettingsScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop:80
    },
    innerContainer: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
    },
    productsContainer:{
        flex: 1,
        flexWrap:"wrap",
        flexDirection: 'row',
        justifyContent:'center'
    },
    itemContainer:{
        alignItems: 'center',
        width:'30%',
        margin:4,
        borderRadius:20
    },
    buttonContainer:{
        justifyContent:'center',
        paddingVertical: 20,
        flexDirection: "row",
      },
      helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
        textAlign: 'center',
      },
    itemTitle:{
        textAlign:'center',
        fontWeight:'bold'
    },
    itemTextBelow:{
        marginTop:15,
    },
    imageContainer: {
        flex:0.2,
        paddingTop: 1,
        marginTop:10,
        alignItems: 'center',
    },
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        // paddingHorizontal: 15,
    },
      leftButton:{
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
      },
      rightButton:{
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
      },
      buttonSet: {
        justifyContent:'center',
        // backgroundColor: '#0C9121',
        width:"40%",
        height:20,
        borderColor:'#2e78b7',
        borderWidth:1,
      },
      buttonText: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
      },
    text: {
        color: 'white',
    },
    boldText: {
        color: 'white',
        fontWeight: 'bold'
    },
    mouText: {
        color: 'red',
        fontSize:10
    },
    mouTick:{
        backgroundColor:'#0E861C',
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4
    },
    content2Container: {
        flex: 1,
        paddingTop:10,
        marginVertical: 15,
        justifyContent: 'space-between',
        width: '100%',
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
        margin:10,
        borderRadius:50
    },
    picImage:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft:10,
        borderRadius:20
      },
      id:{
        paddingHorizontal:10,
        justifyContent:"center",
        marginLeft:18,
        width:'30%',
        zIndex:2,
        top:-3
      },
      backButton:{
          alignItems:"flex-end",
          marginLeft:'80%',
          marginRight:10
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
    productTop:{
        flexDirection:"row",
        // flex:1,
        justifyContent:"center",
        borderTopColor:"#0E861C33",
        borderTopWidth:2,
        height:180,
        paddingTop:20,
        paddingHorizontal:20,
    },
    productHead:{
        flex:1,
        justifyContent:"center",
    },
    productDetails:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        paddingVertical:30
    },
    productBelow:{
        paddingTop:20,
        justifyContent:"center"
    },
    productTitle:{
        paddingHorizontal:30,
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
    },
    productData:{
        justifyContent:'space-between',
        flexDirection:"row",
        paddingHorizontal:30,
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
        alignItems:"center",
        minHeight:45
    },
    select:{
        justifyContent:'space-between',
        flexDirection:"row",
        paddingHorizontal:5,
        borderWidth:1,
        borderRadius:5,
        alignItems:"center",
        minHeight:30,
        width:70
    },
    productButton:{
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:'#0E861C',
        minHeight:35,
        margin:30,
        flexDirection:"row",
    },
    payButtons:{
        flexDirection:"row",
        justifyContent:"center",
    },
    productClear:{
        backgroundColor:'red',
        alignSelf:"flex-end",
        marginRight:30,
        marginVertical:10,
        minHeight:25,
        width:80,
        justifyContent:"center"
    },
    list:{
        flexDirection:"row",
        flex:1
    },
    listImage:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginVertical:10
    },
    listText: {
        color: '#0E861C',
    },
    listAmount:{
        fontSize:38,
        fontWeight:"bold"
    },
    listName:{
        fontSize:25,
        color: '#0E861C',
    }
});




