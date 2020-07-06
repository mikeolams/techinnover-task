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

export default function OnboardingTwoScreen(props) {

  function handleNextPress() {
    props.navigation.navigate('LandingThree')
  }
  function handleSkipPress() {
    props.navigation.navigate('Auth')
  }

  return (
    <ImageBackground source={require('../assets/images/farmcent-3.png')} style={styles.container}>
      
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
              require('../assets/images/unique_two.png')
            }
            style={styles.messageImage}
          />
          </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Farm subscribers’ participation in food production is critical to achieving food security and improved nutrition in Sub-Sahara Africa.</Text>
        </View>
        <View style={styles.slideContainer}>
        <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingOne')}><Text>.</Text></TouchableOpacity>
          <TouchableOpacity style={{...styles.slideButton,...styles.activeSlide}} ><Text style={styles.slideText}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingThree')}><Text>.</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabBarInfoContainer}>

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

      
      </View>
     
    </ImageBackground>
  );
}

OnboardingTwoScreen.navigationOptions = {
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
    backgroundColor: '#FFFFFF',
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
    marginTop:60,
    flex:1,
    justifyContent:'center',
    paddingHorizontal:30,
  },
  text: {
    color: '#0E861C',
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
    paddingVertical: 20,
  },
  skipButton: {
    justifyContent:'center',
    backgroundColor: '#0C9121',
    width:100,
    height:40
  },
  nextButton: {
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
