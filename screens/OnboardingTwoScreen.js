import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';

export default function OnboardingTwoScreen(props) {

  function handleNextPress() {
    props.navigation.navigate('Auth')
  }
  // function handleSkipPress() {
  //   props.navigation.navigate('Auth')
  // }
  function handlePreviousPress() {
    console.log('remove skip')
    props.navigation.navigate('LandingOne')
  }

  return (
    <ImageBackground source={require('../assets/images/centavest-onboarding-1.png')} style={styles.container}>
      
      <View style={styles.topContainer}>

      <Image
            source={
              require('../assets/images/centavestLogoMd.png')
            }
            style={styles.logoImage}
          />

        <View style={styles.textContainer}>

        <View style={styles.heading}>
        <Text style={styles.boldText}>Let Your Money Work For You</Text>
        </View>

        <View style={styles.heading}>
        <Text style={styles.text}>Your Partner In Sustainable Wealth Creation</Text>
        </View>

        </View>

        <View style={styles.buttonContainer}>
                {/* <FormButton
                  buttonType="outline"
                  // onPress={formikProps.handleSubmit}
                  title="Register"
                  backgroundColor="#ADCF29"
                  buttonColor = "#fff"
                  // size={165}
                /> */}
                <TouchableOpacity style={styles.activebutton} activeOpacity={0.3} onPress={()=>console.log('check')}>
          <Text style={{...styles.functionText,color:'white'}}>Register</Text>
          </TouchableOpacity>
             
               
                <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={handleNextPress}>
          <Text style={styles.functionText}>Login</Text>
          </TouchableOpacity>

              </View>

        {/* <View style={styles.circleContainer}>
       
          </View> */}
        {/* <View style={styles.textContainer}>
          <Text style={styles.text}>Farm subscribers’ participation in food production is critical to achieving food security and improved nutrition in Sub-Sahara Africa.</Text>
        </View>
        <View style={styles.slideContainer}>
        <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingOne')}><Text>.</Text></TouchableOpacity>
          <TouchableOpacity style={{...styles.slideButton,...styles.activeSlide}} ><Text style={styles.slideText}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.slideButton} onPress={()=>props.navigation.navigate('LandingThree')}><Text>.</Text></TouchableOpacity>
        </View> */}
      </View>

      {/* <View style={styles.tabBarInfoContainer}>

<TouchableOpacity onPress={handlePreviousPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
            <Text style={styles.skipButtonText}>
              Next
            </Text>
          </TouchableOpacity>

      
      </View> */}
     
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
  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },
  // getStartedContainer: {
  //   alignItems: 'center',
  //   marginHorizontal: 50,
  // },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },

  topContainer: {
    marginVertical:110,
    marginHorizontal:3,
    // backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    // top:-10
  },
  // logoContainer:{
  //   flex:1,
  //   justifyContent:'center',
  //   marginBottom:40,
  // },
  logoImage: {
    width: 180,
    height: 150,
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
    // marginTop:0,
    flex:1,
    justifyContent:'center',
    paddingHorizontal:30,
    marginBottom:30
  },
  text: {
    // color: '#0E861C',"#ADCF29"
    color: "#ADCF29",
    fontWeight:"bold",
    justifyContent:'center',
    textAlign:"center"
  },

  boldText: {
    fontWeight:"bold",
    // color: '#0E861C',
    // height:30,
    fontSize:21,
    textAlign:"center",
    // alignItems:'center'
  },

  functionText: {
    // justifyContent:'center',
    textAlign:"center",
    fontSize:15
  },
  heading:{
    marginVertical:7
  },
  // slideContainer:{
  //   height:30,
  //   marginTop:70,
  //   marginBottom:10,
  //   width:'40%',
  //   flexDirection:'row',
  //   justifyContent:"space-evenly"
  // },
  // activeSlide:{
  //   backgroundColor: '#0C9121',
  //   borderRadius:20,
  //   width:20,
  //   alignItems:'center'
  // },
  // slideText:{
  //   fontWeight:'bold',
  //   color:'white'
  // },
  // slideButton:{
  //   flex:1,
  //   margin:6
  // },
  buttonContainer: {
    // marginVertical: 25
    marginBottom:100
  },
  button:{
    borderRadius:20, 
    borderWidth:2,
    borderColor:"#ccc",
    minHeight:45, 
    width:280,
    marginVertical:30,
    justifyContent:"center"
  },
  activebutton:{
    backgroundColor:"#ADCF29", 
    borderRadius:20, 
    minHeight:45, 
    width:280,
    justifyContent:"center"
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
    // backgroundColor: '#0C9121',
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
    // color: '#fff',
    color: '#2e78b7',
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
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  //   textAlign: 'center',
  // },
});
