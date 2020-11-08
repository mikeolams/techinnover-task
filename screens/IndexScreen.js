import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function IndexScreen(props) {

  function handleNextPress() {
    props.navigation.navigate('LandingTwo');
    console.log('ikop')
  }
  function handleSkipPress() {
    props.navigation.navigate('Auth')
  }

  return (
    <ImageBackground source={require('../assets/images/centavest-onboarding-1.png')} style={styles.container}>
      
      <View style={styles.topContainer}>

      <Image
            source={
              require('../assets/images/centavest-logo-sm.png')
            }
            style={styles.messageImage}
          />

      </View>

      <View style={styles.tabBarInfoContainer}>

<TouchableOpacity onPress={handleSkipPress} style={styles.skipButton}>
            <Text style={styles.helpLinkText}>
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
            <Text style={styles.helpLinkText}>
              Next
            </Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
);
//   );-------------------------------------------------------



}

IndexScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    top:-10
  },
  logoContainer:{
    flex:1,
    justifyContent:'center',
    marginBottom:40,
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  messageImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  circleContainer:{
    flex:1,
    justifyContent:'center',
  },
  textContainer:{
    marginTop:70,
    flex:1,
    justifyContent:'center',
    paddingHorizontal:30,
  },
  text: {
    color: '#0e861c',
    justifyContent:'center',
    textAlign:"center"
  },
  slideContainer:{
    height:30,
    marginTop:70,
    marginBottom:10,
    width:'40%',
    flexDirection:'row',
    justifyContent:"space-evenly"
  },
  activeSlide:{
    backgroundColor: '#0c9121',
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
    paddingVertical: 20,
  },
  skipButton: {
    justifyContent:'center',
    width:100,
    height:40
  },
  nextButton: {
    justifyContent:'center',
    width:100,
    height:40
  },
  skipButtonText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    textAlign: 'center',
  },
});
