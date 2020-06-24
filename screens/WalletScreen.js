import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import { MonoText } from '../components/StyledText';

export default function WalletScreen(props) {

  const [wallets, setWallets] = useState('');
  const [userInfo, setUserInfo] = useState('');
  let sum=0;

  const fetchWallet =async (value) => {  
    await fetch('https://farmcenta.com/api/v1/wallet?token='+value,{
            method: 'POST'
          })  
   .then(resp=>resp.json())
   .then(json =>{
    //  console.log(json.wallet.length)
    //  console.log(JSON.stringify(json.wallet.id))
    setWallets(json);
   } )
   .catch(err=> {
     console.log(err);
   });
 };

  const retrieveUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        // You can access your data
        fetchWallet(value)
        // console.log(value);
  
      };
      const name = await AsyncStorage.getItem("user"),
  avatar= await AsyncStorage.getItem("avatar");
  if (avatar !== null) {
    // You can access your data
    setUserInfo([name, avatar])
    console.log(userInfo)

  }
    } catch (error) {
      console.log(error);
    }
  };

  

  // const retrieveToken1 = async () => {
  //   try {
  //      await  AsyncStorage.getAllKeys((err, keys) => {
  //       let paramSet=[]
  //       AsyncStorage.multiGet(keys, (err, stores) => {
  //         stores.map((result, i, store) => {
  //           // get at each store's key/value so you can work with it
  //           let key = store[i][0];
  //           let value = store[i][1];
  //           // paramSet.push({key,value})
  //           paramSet.push({key,value})
  //           // console.log(stores, err)
  //           // console.log(key, value)
  //           // return key, value
  //           // return stores
  //         });
  //         // console.log(paramSet);
  //         setUserInfo(paramSet);
  //         if(userInfo[3]!=null){console.log(userInfo[3]);
  //         console.log(userInfo[3].value);
  //         fetchWallet(userInfo[3].value)
  //       }
  //       })
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const loginCall= async (values)=> {
  //   return await fetch('https://farmcenta.com/api/v1/login',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(values)
  //   })
  //   .then(res => res.json());
  // };
  
  // transactionsCall= (values)=> {
  //       loginCall(values)
  //         .then(login => {
  //           fetch('https://farmcenta.com/api/v1/wallet?token='+login.token,{
  //             method: 'POST'
  //           })
  //           .then(res => res.json())
  //           .then(transactions => {
  
  //             props.navigation.navigate('Home', {
  //               "name": login.details.name,
  //               "email": login.details.email,
  //               "avatar": login.details.avatar,
  //               "token": login.token,
  //               "transactions":transactions
  //             });
  //         })
  //         .catch(err=> {
  //           console.warn('issues fetching trans parameters '+err )
  //         })
  //         })
  //         .catch(err=> {
  //           console.warn('issues fetching login parameters '+err )
  //         });
  // };

  useEffect(() => {
    retrieveUserInfo();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.imageContainer} >
            <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />
            </View>
            <View style={styles.id}>
           {/* <Image source={{uri:userInfo[1]}} style={styles.picImage}/>
           <Text>{userInfo[0]}</Text> */}
           </View>
           </View>
           <View style={styles.walletDashboard}>
                <View style={styles.rowContainer} >
                <Text style={styles.text}>Wallet Ballance</Text>
                </View>
                
                <View style={styles.rowContainer} >
                {wallets ==='' || wallets.wallet.length === 0?<Text>Nil</Text>:<Text style={styles.balanceText}>N{wallets.wallet.map((item,id)=>{
                  sum+=item.amount;
                  if (wallets.wallet.length===id+1){return sum}
                })}</Text>}
                </View>
            </View>
            <View style={styles.contentContainer}>
            {/* contentContainerStyle={styles.contentContainer}> */}
              {/* <View><Text style={styles.text21}>{userInfo.name}</Text></View> */}
            <View style={styles.content2Container}>
            <View style={styles.walletHeader} >
              <Text style={styles.walletHeaderText}>Wallet Transactions</Text>
              </View>
              <View style={styles.walletContainer} >
              <View style={styles.titleContainer} >
              <Text style={styles.text2}>Amount</Text>
              <Text style={styles.text2}>Dates</Text>
              <Text style={styles.text2}>Method</Text>
              <Text style={styles.text2}>Status</Text>
              </View>
                <View style={styles.walletContent}>
                {wallets ==='' || wallets.wallet.length === 0? null
              //   <Fragment>
              //   <View style={styles.rowContainer} >
              // <Text style={styles.text2}>Wallet Transactions</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>S/N</Text>
              // <Text style={styles.text2}>Dates</Text>
              // <Text style={styles.text2}>Amount</Text>
              // <Text style={styles.text2}>Status</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>1</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>2</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>3</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>4</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>5</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>5</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>7</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>8</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>9</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View><View style={styles.rowContainer} >
              // <Text style={styles.text2}>10</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>11</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // <View style={styles.rowContainer} >
              // <Text style={styles.text2}>12</Text>
              // <Text style={styles.text2}>27, Jan 2019</Text>
              // <Text style={styles.text2}>#3,000,000</Text>
              // <Text style={styles.text2}>Returning</Text>
              // </View>
              // </Fragment>
              :
              <ScrollView 
            style={styles.container}
            // contentContainerStyle={styles.contentContainer}
            >
              {/* <View style={styles.rowContainer} >
              <Text style={styles.text2}>Amount</Text>
              <Text style={styles.text2}>Dates</Text>
              <Text style={styles.text2}>Method</Text>
              <Text style={styles.text2}>Status</Text>
              </View> */}
              {wallets.wallet.map((item)=>
      //  console.log(item.id, item.amount,'imd:'+item.method,'imm:'+item.memo, 'iu:'+item.user,item.created_at)
       <View key={item.id} style={styles.walletItems} >
         <View style={styles.col}><Text style={styles.text2}>N{item.amount}</Text></View>
              <View style={styles.col}><Text style={styles.text2}>{item.created_at.split(' ')[0]}</Text></View>
              {/* <View style={styles.col}><Text style={styles.text2}>{Date(item.created_at.split(' ')[0])}{console.log(item.created_at.split(' ')[0])}</Text></View> */}
         <View style={styles.col}><Text style={styles.text2}>{item.method}</Text></View>
         <View style={{...styles.col}}><Text style={styles.text2}>{item.amount < 0?'(Dr)':'(Cr)'}</Text></View>
       
       {/* <Text style={styles.text2}>{item.created_at}</Text> */}
       {/* <Text style={styles.text2}>{item.created_at}</Text> */}
       {/* {console.log(Date(item.created_at))} */}
       {/* {console.log(new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()))} */}
       {/* new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()) */}
       </View>
     )}
               </ScrollView>
              }
                </View>

              </View>
              
            
            </View>
            
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

WalletScreen.navigationOptions = {
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
  },
  topContainer: {
      flex:0.3,
      marginBottom:7
        // alignItems:'center',
      },
  walletDashboard:{
          flex:0.2,
        // height:120,
          justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
          // backgroundColor: '#1BBC2E',
          backgroundColor:"#0E861C",
          width:'90%',
          borderRadius:10,
          // paddingTop:20,
          paddingVertical:20
      },
  contentContainer:{
        flex:1,
      alignItems:'center',
        // backgroundColor: '#fe2',
        // width:'90%'
        // paddingBottom:30
    },
    content2Container:{
      flex:1,
      // paddingTop:2,
      marginTop:10,
      justifyContent:'space-between',
  //   alignItems:'center',
      // backgroundColor: '#eee',
      width:'94%',
      borderRadius:10,
      // height:"20%"
  },
  walletHeader:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:"#0E861C33",
    // borderBottomColor:'#06360B' "#0E861C33",
    // minHeight:30,
    // paddingHorizontal:15,
    // backgroundColor:'blue'
  },
  walletContainer:{
    // justifyContent:'space-between',
    flex:1,
    // backgroundColor:'green'
  },
  titleContainer:{
    flex:0.08,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    // backgroundColor:'yellow'
  },
  
  walletContent:{
    flex:1,
    // justifyContent:'space-between',
    // alignItems:'center',
    
    // minHeight:30,
    // paddingHorizontal:15,
    // paddingTop:1,
    // backgroundColor:'blue'
  },
      rowContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:15,
      },
      walletItems:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-evenly',
        // paddingHorizontal:15,
        // textAlignVertical:"center",
        alignItems:"center",
        // minHeight:5,
        // backgroundColor:'#eef',"#0E861C33"
        backgroundColor:"#0E861C33",
        margin:4
      },
      col:{
        flex:1,
        // backgroundColor:'#32f',
        paddingHorizontal:1,
        height:30,
        justifyContent:"center"
        // marginHorizontal:2,
      },
  imageContainer:{
    // flex:1,
    paddingTop:1,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  // test:{
  //   // flex:2,
  //   // justifyContent:'center',
  //   // alignItems:'center',
  //   // borderBottomWidth:0.6,
  //   // borderBottomColor:'#06360B',
  //   minHeight:30,
  //   // // paddingHorizontal:15,
  //   backgroundColor:'blue'
  // },
  
  
  
  text: {
        color: 'white',
      },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    balanceText: {
      color: 'white',
      fontWeight:'bold',
      fontSize:30 
      },
    
    // row2Container:{
    //     flexDirection:"row",
    //     justifyContent:'space-between',
    //     paddingHorizontal:15,
    //   },
    text2: {
        color: '#0E861C',
        textAlign:"center"
      },
      text21: {
        // color: 'black'
      },
      id:{
        // flexDirection:"row",
        // backgroundColor:'blue',
        paddingHorizontal:20,
        // marginBottom:2,
        // alignItems:'center',
        // justifyContent:'flex-end'
        width:'30%'
      },
      picImage:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft:20,
        borderRadius:20
      },
      walletHeaderText: {
        // color: '#06360B'
        color: '#0E861C',
        fontWeight:'bold'
      },
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  // logoImage: {
  //       width: 120,
  //       height: 120,
  //       resizeMode: 'contain',
  //     },
  logoImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginTop:40
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
