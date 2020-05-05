import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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

export default function WalletScreen() {

  const loginCall= async (values)=> {
    return await fetch('https://farmcenta.com/api/v1/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json());
  },
  
  transactionsCall= (values)=> {
        loginCall(values)
          .then(login => {
            fetch('https://farmcenta.com/api/v1/wallet?token='+login.token,{
              method: 'POST'
            })
            .then(res => res.json())
            .then(transactions => {
  
              props.navigation.navigate('Home', {
                "name": login.details.name,
                "email": login.details.email,
                "avatar": login.details.avatar,
                "token": login.token,
                "transactions":transactions
              });
          })
          .catch(err=> {
            console.warn('issues fetching trans parameters '+err )
          })
          })
          .catch(err=> {
            console.warn('issues fetching login parameters '+err )
          });
  };


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
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.content1Container}>
                <View style={styles.rowContainer} >
                <Text style={styles.text}>Wallet Ballance</Text>
                </View>
                
                <View style={styles.rowContainer} >
                <Text style={styles.boldText}>#1000000000035</Text>
                </View>
            </View>
            <View style={styles.content2Container}>
            <View style={styles.rowContainer} >
                <Text style={styles.text2}>Wallet Transactions</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>S/N</Text>
                <Text style={styles.text2}>Dates</Text>
                <Text style={styles.text2}>Amount</Text>
                <Text style={styles.text2}>Status</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>2</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>3</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>4</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>5</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>5</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>7</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>8</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>9</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View><View style={styles.rowContainer} >
                <Text style={styles.text2}>10</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>11</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>12</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
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
    paddingTop:1,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  content1Container:{
    //   flex:1,
    height:120,
      justifyContent:'space-between',
    alignItems:'center',
      backgroundColor: '#1BBC2E',
      width:'90%',
      borderRadius:10,
      paddingTop:20,
      paddingVertical:30
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
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
        paddingTop:20,
        marginVertical:15,
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
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  logoImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
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
