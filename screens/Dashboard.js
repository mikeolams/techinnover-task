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
import TabBarImage from '../components/TabBarImage';

export default function Dashboard() {
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
                <Text style={styles.text}>Total Investment</Text>
                <Text style={styles.text}>Total Return</Text>
                <Text style={styles.text}>Total Farm Units</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text}>20</Text>
                <Text style={styles.text}>30</Text>
                <Text style={styles.text}>35</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.boldText}>Nest Payout Date:20123</Text>
                <Text style={styles.text}>30</Text>
                <Text style={styles.boldText}>Ammount: #35</Text>
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
                <Text style={styles.text2}>20 Carbon</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>20 Carbon</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View>
                <View style={{...styles.rowContainer,justifyContent:'flex-end'}} >
                <Text style={styles.text2}>More</Text>
                </View>
            </View>
            <View style={styles.content3Container}>
            <View style={styles.rowContainer} >
                <Text style={styles.text2}>Lastest Farm</Text>
                </View>
                <View style={styles.row3Container} >
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
    paddingTop:1,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  content1Container:{
      flex:1,
      justifyContent:'space-around',
    // alignItems:'center',
      backgroundColor: '#1BBC2E',
      width:'90%',
      borderRadius:10,
      paddingTop:20,
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
  content3Container:{
    flex:1,
    // flexDirection:'row',
    // paddingTop:20,
    marginVertical:15,
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
  logoImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
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
