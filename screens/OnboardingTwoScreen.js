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

export default function OnboardingTwoScreen(props) {

  function handleNextPress() {
    props.navigation.navigate('Auth')
  }
  function handleSkipPress() {
    props.navigation.navigate('Auth')
  }

  return (
    <ImageBackground source={require('../assets/images/centavest-onboarding-1.png')} style={styles.container}>
      
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
        <Image
            source={
              require('../assets/images/centavest-logo-sm.png')
            }
            style={styles.logoImage}
          />
        </View>
        <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textOne}>Let Your Money Work For You</Text>
          <Text style={styles.textTwo}>Your Parner In Sustainable Wealth Creation</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSkipPress} style={styles.regButton}>
            <Text style={styles.regButtonText}>
             Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress} style={styles.logButton}>
            <Text style={styles.logButtonText}>
             Login
            </Text>
          </TouchableOpacity>
        </View>
          
          </View>
         
        
      </View>
     
    </ImageBackground>
  );
}

OnboardingTwoScreen.navigationOptions = {
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
}

function handleHelpPress() {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:40
  },
  topContainer: {
    marginVertical:70,
    marginHorizontal:20,
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  logoContainer:{
    flex:1,
    paddingTop:10,
  },
  logoImage: {
    width: 150,
    height: 180,
    resizeMode: 'contain',
  },
  messageImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  bodyContainer:{
    flex:3,
    justifyContent:'center',
  },
  textContainer:{
    marginTop:10,
    flex:1,
    width:"100%",
    justifyContent:'space-evenly',
  },
  buttonContainer:{
    flex:2,
    paddingBottom:50,
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  textOne: {
   fontSize:22,
   fontWeight:"bold"
  },
  textTwo: {
    color: "#7b9115",
    fontSize:15,
    justifyContent:'center',
    textAlign:"center"
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
    paddingVertical: 20,
  },
  regButton: {
    justifyContent:'center',
    backgroundColor: '#adcf29',
    width:"100%",
    height:45,
    borderRadius:20
  },
  logButton: {
    justifyContent:'center',
    backgroundColor: '#fff',
    width:"100%",
    height:45,
    borderRadius:20,
    borderColor:"#000",
    borderWidth:1
  },
  regButtonText: {
    fontSize: 17,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  logButtonText: {
    fontSize: 17,
    textAlign: 'center',
  },
 
});
