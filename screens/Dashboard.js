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

import { MonoText } from '../components/StyledText';
import TabBarImage from '../components/TabBarImage';
import { Avatar } from 'react-native-elements';
// import UserToken from '../components/UserToken';
// import AsyncStorage from '@react-native-community/async-storage';

export default function Dashboard(props) {

  const [transaction, setTransaction] = useState('');
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [transaction, setTransaction] = useState({
  //   "id":'',
  //           "amount":'',
  //           "quantity":'',
  //           "payback":'',
  //           "paybackDate":"",
  //           "method":"",
  //           // "payment_details": "{\"system\":\"Mozilla\\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/78.0.3904.97 Safari\\/537.36\",\"previous_link\":\"https:\\/\\/farmcenta.com\\/investors\\/view-details\\/410\\/investresponse\\/11565\",\"ip\":\"154.120.108.239\",\"adminstrator\":\"1\",\"confirmation_note\":\"Payment confirmed.\"}",
  //           "product":'',
  //           "return": '',
  //           "period":'',
  //           "status": "",
  //           // "user": 410,
  //           "createdAt": "",
  //           "updatedAt": ""
  // })
  const { navigation } = props;  
        const userName = navigation.getParam('name', 'NO-Username');  
        const userEmail = navigation.getParam('email', 'NO-email');  
        const userAvatar = navigation.getParam('avatar', 'NO-User');  
        const token = navigation.getParam('token', 'some default value');
        const farmProducts = navigation.getParam('farmProducts', 'default');
        const transactions = navigation.getParam('transactions', 'some default value');
//TESTING
        // console.log(navigation)
        // console.log(farmProducts.products)
        // console.log(UserToken(token))
        // await AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('token1', 'oopp');
        AsyncStorage.setItem('token', token);

      const latestFarm=()=>{
        let date=[]
        farmProducts.products.map(product=>{
            date.push(product.created_at)
            date.sort()
            // console.log(date)
            // console.log(date.length)
        })
        let farmArray=[];
        farmProducts.products.map(product=>{
          if(product.created_at===date[date.length-1] ||product.created_at===date[date.length-2] || product.created_at===date[date.length-3]){
            // console.log(product.id);
            farmArray.push(product);
            setFarms(farmArray)
            // console.log(farms)
         }
      })
       } 



        // console.log(JSON.stringify(token))
        // console.log(transactions.transactions);
        // console.log(userAvatar,userEmail)
        const getUserTransaction = () => {
          setTransaction(transactions);
                 if(transactions.transactions.length!=0){
                  // console.log('yes')
                  setLoading(false)
                 };
         };

      //   const getUserTransaction =async () => {    
      //     await fetch('https://farmcenta.com/api/v1/transactions?token='+token,{
      //       method: 'POST'
      //     })
      //   //  .then(resp=>console.log(JSON.parse(resp)))
      //     .then(resp=>resp.json())
      //     // .then(resp=>resp.text())
      //     // .then(resp=>console.log(resp.json()))
      //     .then(json=>{
      //       setTransaction(json)
      //       // console.log(json)
      //       console.log(transaction)
      //       console.log(transaction.transactions[0].amount)
      //       if(transaction.transactions[0]){
      //         setLoading(false)
      //       }

      //     })
      //   //  .then(resp=>resp.json())JSON.stringify
      //   //  .then(resp=>console.log(resp.json().stringify))
      //    .catch(err=> {
      //      console.warn('Error is: '+err )
      //    })
      //  };

       useEffect(() => {
        getUserTransaction();
        latestFarm();
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
          <View style={styles.id}>
           <Image source={{uri:userAvatar}} style={styles.picImage}/>
           <Text>{userName}</Text>
           </View>
            <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.content1Container}>
                <View style={styles.rowHeadContainer} >
                  <View style={styles.colHeadings}>
                    <Text style={styles.colText}>Total Investment:</Text>
                  </View>
                  <View style={styles.colHeadings}>
                    <Text style={styles.colText}>Total Return:</Text>
                  </View>
                  <View style={styles.colHeadings}>
                   <Text style={styles.colText}>Total Farm Units:</Text>
                  </View>
                </View>
                <View style={styles.rowContent} >
                {/* {loading?null: <Fragment> */}
                  <View style={styles.colHeadings}>
                  <Text style={styles.text}>#{loading?0:transaction.transactions[0].amount}</Text>
                  {/* <Text style={styles.text}>{transaction.transactions[0].product}</Text> */}
                  </View>
                  <View style={styles.colHeadings}>
                  <Text style={styles.text}>#{loading?0:transaction.transactions[0].payback}</Text>
                  {/* <Text style={styles.text}>{transaction.transactions[0].return}</Text> */}
                  </View>
                  <View style={styles.colHeadings}>
                  <Text style={styles.text}>{loading?0:transaction.transactions[0].quantity}</Text>
                  </View>
                {/* </Fragment>
                } */}
                </View>
                {/* <View style={styles.rowContainer} >
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                </View> */}
                <View style={styles.rowHeadContainer} >
                <View>
                <Text style={styles.boldText}>Pay Back Date:</Text>
                {loading?null:<Text style={styles.payBackText}>{transaction.transactions[0].payback_date}</Text>}
                </View>
                {loading?null:<Text style={styles.boldText}>Amount: #{transaction.transactions[0].amount}</Text>}
                </View>
            </View>
            <View style={styles.content2Container}>
            <View style={styles.rowContainer} >
                <Text style={styles.text2}>Lastest Transaction</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>Farm Units</Text>
                <Text style={styles.text2}>Payout Dates</Text>
                <Text style={styles.text2}>Amount</Text>
                <Text style={styles.text2}>Status</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].quantity}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].payback_date}</Text>
                <Text style={styles.text2}>{loading?0:'#'+transaction.transactions[0].amount}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].status}</Text>
                </View>
                {/* <View style={styles.rowContainer} >
                <Text style={styles.text2}>20 Carbon</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View> */}
                <View style={{...styles.rowContainer,justifyContent:'flex-end'}} >
                <TouchableOpacity 
                // onPress={()=>
                //   props.navigation.navigate('Store', {
                //     "name": 'resp.details.name',
                //     "email": 'resp.details.email'
                //   })
                // }
                ><Text style={styles.text2}>More</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.content3Container}>
            <View style={styles.rowContainer} >
                <Text style={styles.text2}>Lastest Farm</Text>
                </View>
                <View style={styles.row3Container} >
                {/* {farms.map(farm =>console.log(farm.location))} */}
                {/* {Object.values(farms).map(value =>console.log(value))} */}
                {farms.map(farm =><Image
                key={farm.id}
            source={
              {uri:"https://farmcenta.com"+farm.photo}
              // require('../assets/images/cattle-farm3x.png')
            }
            style={styles.logoImage}
          />)}
          {/* <Image
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
          /> */}
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

Dashboard.navigationOptions = {
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
  imageContainer:{
    // flex:1,
    paddingTop:6,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  content1Container:{
      flex:1,
      justifyContent:'space-around',
    // alignItems:'center',
    backgroundColor:"#0E861C",
      width:'95%',
      borderRadius:10,
      paddingVertical:4,
  },
  rowHeadContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    backgroundColor:"#0E861C",
    marginHorizontal:2
    // flex:1
  },
  rowContent:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    // backgroundColor: '#1BBC2E',
    backgroundColor: '#eee',
    flex:1,
    paddingTop:5
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15
  },
  colHeadings:{
    flex:1,
    // justifyContent: "center",
    // alignItems: 'center',
    // alignContent:'center',
    // alignSelf: 'center'
  },
  text: {
        color: "#0E861C",
        // backgroundColor:"#0E861C",
        textAlign:"center"
      },
      payBackText: {
        color: "white",
        textAlign:"center"
      },
  colText: {
    color: 'white',
    fontWeight:'bold',
    textAlign:"center"
  },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    content2Container:{
        flex:1,
        paddingTop:20,
        marginVertical:15,
        justifyContent:'space-between',
    //   alignItems:'center',
        backgroundColor: '#eee',
        width:'95%',
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
  content3Container:{
    flex:1,
    // flexDirection:'row',
    // paddingTop:20,
    marginVertical:15,
    justifyContent:'space-between',
//   alignItems:'center',
    // backgroundColor: '#bec',
    width:'95%',
    borderRadius:10,
    // height:"20%"
},
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  logoImage: {
        width: 120,
        height: 80,
        resizeMode: 'contain',
      },
      id:{
        // flexDirection:"row",
        // backgroundColor:'blue',
        paddingHorizontal:10,
        marginBottom:2,
        // alignItems:'center',
        // justifyContent:'flex-end'
        width:'30%'
      },
      picImage:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft:10,
        borderRadius:20
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
