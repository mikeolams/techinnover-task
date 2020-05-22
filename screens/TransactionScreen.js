import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function TransactionScreen() {

  const [trans, setTrans] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [loading, setLoading] = useState(true);
  let sum=0;

  const fetchTrans =async (value) => {  
    await fetch('https://farmcenta.com/api/v1/transactions?token='+value,{
            method: 'POST'
          })  
   .then(resp=>resp.json())
   .then(json =>{
    //  console.log(json.wallet.length)
    //  console.log(JSON.stringify(json))
    setTrans(json);
    setLoading(false);
    // console.log(trans.transactions[0])
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
        fetchTrans(value)
        // console.log(value);
  
      };
      const name = await AsyncStorage.getItem("user"),
  avatar= await AsyncStorage.getItem("avatar");
  if (avatar !== null) {
    // You can access your data
    setUserInfo([name, avatar])
    // console.log(userInfo)

  }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    retrieveUserInfo();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
        {/* <View style={styles.titleContainer}> */}
            <View style={styles.imageContainer} >
            <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />
            </View>
           {/* </View> */}
           <View style={styles.id}>
           <Image source={{uri:userInfo[1]}} style={styles.picImage}/>
           <Text>{userInfo[0]}</Text>
           </View>
            <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
              <View style={styles.rowHeadContainer} >
                <Text style={{...styles.textHead, ...styles.textSize}}>Transactions</Text>
                </View>
            <View style={styles.content2Container}>
              {/* <View style={styles.header}> */}
            
                <View style={styles.rowTitleContainer} >
                {/* <Text style={styles.text2}>S/N</Text> */}
                <Text style={styles.textHead}>Farm Units</Text>
                <Text style={styles.textHead}>Payout Dates</Text>
                <Text style={styles.textHead}>Amount</Text>
                <Text style={styles.textHead}>Status</Text>
                </View>
                <View style={styles.transContent}>
              {/* </View> */}
                 {loading ? <Fragment>
                 <View style={styles.rowContainer} >
                <Text style={styles.text2}>2</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>3</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>4</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>5</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>5</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>7</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>8</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>9</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>10</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>11</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>12</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                 </Fragment>:
                trans.transactions.map(item=><View key={item.id} style={styles.rowMapContainer} >
                {/* <Text style={styles.text2}>1</Text> */}
                {/* <View style={styles.textcontent}> */}
                <Text style={styles.text2}>{item.quantity}</Text>
                {/* </View> */}
                {/* <View style={styles.textcontent}> */}
                <Text style={styles.text2}>{item.payback_date}</Text>
                {/* </View> */}
                {/* <View style={styles.textcontent}> */}
                <Text style={styles.text2}>N{item.amount}</Text>
                {/* </View> */}
                {/* <View style={styles.textcontent}> */}
                <Text style={styles.text2}>{item.status}</Text>
                {/* </View> */}
                </View>)}
                {/* <View style={{...styles.rowContainer,justifyContent:'flex-end'}} >
                <Text style={styles.text2}>More</Text>
                </View> */}
                </View>
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

TransactionScreen.navigationOptions = {
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
  innerContainer: {
      flex:1,
        // alignItems:'center',
      },
      contentContainer:{
        flex:1,
      alignItems:'center',
        // backgroundColor: '#fe2',
        // width:'90%'
        // paddingBottom:30
    },
    // titleContainer:{
    //   flexDirection:"row"
    // },
  imageContainer:{
    // flex:1,
    paddingTop:1,
    alignItems:'center',
    // backgroundColor: '#222','#fe2'
    // backgroundColor: '#fe2'
  },
  transContent:{
    flex:1
  },
  // rowHead:{
  //   borderBottomColor:"black",
  //   borderBottomWidth:2
  // },
  rowContainer:{
    flex:0.5,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
  },
  rowTitleContainer:{
    flex:0.1,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    // backgroundColor: '#e3e',
  },
  rowHeadContainer:{
    // flex:0.1,
    flexDirection:"row",
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:15,
    // backgroundColor: '#1ee',
    borderBottomColor:"#eee",
    borderBottomWidth:2
  },
  rowMapContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    // justifyContent:"center",
    // justifyContent:"space-evenly",
    // alignContent:"center",
    // alignItems:"center",
    paddingHorizontal:15,
    maxHeight:40,
    paddingLeft:50
    // backgroundColor: '#ee2',
  },
  textcontent:{
    flex:1,
    // justifyContent:"space-between",
    alignSelf:"center"
    // alignItems:"center",
  },
  text: {
        color: 'white',
      },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    content2Container:{
        flex:1,
        // paddingTop:2,
        marginVertical:2,
        justifyContent:'space-between',
    //   alignItems:'center',
        backgroundColor: '#eee',
        width:'90%',
        borderRadius:10,
        // height:"20%"
    },
    // row2Container:{
    //     flexDirection:"row",
    //     justifyContent:'space-between',
    //     paddingHorizontal:15,
    //   },
    text2: {
        color: '#0E861C'
      },
      textHead: {
        fontWeight:"bold",
        color: '#0E861C',
      },
      textSize: {
        fontSize:20
      },
  content3Container:{
    flex:1,
    // flexDirection:'row',
    // paddingTop:20,
    marginVertical:2,
    justifyContent:'space-between',
//   alignItems:'center',
    // backgroundColor: '#bec',
    width:'90%',
    borderRadius:10,
    // height:"20%"
},
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  // logoImage: {
  //   // flex:1,
  //       width: 120,
  //       height: 120,
  //       resizeMode: 'contain',
  //       left:0
  //     },
  logoImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginTop:40
},
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
id:{
  // flexDirection:"row",
  // backgroundColor:'blue',
  paddingHorizontal:10,
  // marginTop:25,
  // backgroundColor: '#eee',
  // alignItems:'center',
  justifyContent:"center",
  marginLeft:18,
  width:'30%',
  zIndex:2,
  top:-50
},
picImage:{
  width: 30,
  height: 30,
  resizeMode: 'contain',
  marginLeft:10,
  borderRadius:20
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
