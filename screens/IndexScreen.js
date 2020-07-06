import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';


export default function IndexScreen(props) {

  function handleNextPress() {
    // console.log('clicked')
    props.navigation.navigate('LandingTwo')
  }
  function handleSkipPress() {
    props.navigation.navigate('Auth')
  }

  return (
    // <View style={styles.container}>
    <ImageBackground source={require('../assets/images/farmcenta-8.png')} style={styles.container}>
      {/* <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
        <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />
        </View>
        <View style={styles.circleContainer}>
        <Image
            source={
              require('../assets/images/unique_one.png')
            }
            style={styles.messageImage}
          />
          </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>We work with small-scale farmers by providing what they need to scale their farming activities from improved inputs, training, weather information and access to premium market.</Text>
        </View> 
        <View style={styles.slideContainer}>
          <TouchableOpacity style={{...styles.activeSlide,...styles.slideButton}}><Text style={styles.slideText}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingTwo')}><Text>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingThree')}><Text>.</Text></TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>props.navigation.navigate('LandingFour')}><Text>4</Text></TouchableOpacity> */}
        </View>
      </View>

      <View style={styles.tabBarInfoContainer}>
        {/* <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text> */}

<TouchableOpacity onPress={handleSkipPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
            <Text style={styles.helpLinkText}>
              Next
            </Text>
          </TouchableOpacity>

        {/* <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View> */}
      </View>
       {/* </View> */}
    </ImageBackground>
);
//   );-------------------------------------------------------






}

IndexScreen.navigationOptions = {
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
  // WebBrowser.openBrowserAsync(
  //   'https://docs.expo.io/versions/latest/workflow/development-mode/'
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
 

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    // backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

  topContainer: {
    marginVertical:110,
    marginHorizontal:40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    top:-10
    // opacity:280
  },
  logoContainer:{
    flex:1,
    justifyContent:'center',
    marginBottom:40,
    // backgroundColor: '#fca',
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    // marginTop: 3,
    // marginLeft: -10,
  },
  messageImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    // zIndex:-2,
  },
  circleContainer:{
    flex:1,
    justifyContent:'center',
    // backgroundColor: '#aca',
    // borderRadius: 160,
    // borderColor: '#0C9121',
    // borderWidth: 1,
    // zIndex:7,
    // height: 130
  },
  textContainer:{
    marginTop:70,
    flex:1,
    justifyContent:'center',
    paddingHorizontal:30,
    // backgroundColor: '#aaa',
  },
  text: {
    color: '#0E861C',
    justifyContent:'center',
    textAlign:"center"
  },
  slideContainer:{
    // flex:1,
    // paddingTop:70,
    height:30,
    marginTop:70,
    // paddingBottom:10,
    marginBottom:10,
    // backgroundColor: '#2ca',
    width:'40%',
    flexDirection:'row',
    justifyContent:"space-evenly"
  },
  activeSlide:{
    backgroundColor: '#0C9121',
    borderRadius:20,
    width:20,
    alignItems:'center'
  },
  slideText:{
    fontWeight:'bold',
    color:'white'
  },
  slideButton:{
    flex:1,
    margin:6
  },
  tabBarInfoContainer: {
    flexDirection:"row",
    justifyContent:'space-around',
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
    // backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  skipButton: {
    // paddingVertical: 15,
    justifyContent:'center',
    backgroundColor: '#0C9121',
    width:100,
    height:40
  },
  nextButton: {
    // paddingVertical: 15,
    justifyContent:'center',
    backgroundColor: '#fff',
    width:100,
    height:40
  },
  skipButtonText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
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
    textAlign: 'center',
  },
});
