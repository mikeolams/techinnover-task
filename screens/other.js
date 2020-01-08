import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect} from 'react';
import { Formik } from 'formik'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

export default function AccessScreen(props) {

  const [state, setState] =useState({
    email: '',
    password: ''
  })

 const handleEmailChange = email => {
    // console.log(email)
    setState({email })
  }

  const handlePasswordChange = password => {
    // console.log(password)
    setState({password })
    // console.log(state)
  }

  const handleOnLogin = async () => {
    const { email, password } = state
    try {
      if (email.length > 0 && password.length > 0) {
        props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }

  const goToSignup = () => props.navigation.navigate('Signup')

  return (
    <View style={styles.container}>
      
      <View style={styles.innerContainer}>

      <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />

<View style={styles.authButtonContainer}>
      <TouchableOpacity onPress={handleHelpPress} style={styles.nextButton}>
            <Text style={styles.helpLinkText}>
              Sign Up
            </Text>
          </TouchableOpacity>
<TouchableOpacity onPress={handleHelpPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Login
            </Text>
          </TouchableOpacity>
      
      </View>

        <View style={styles.circleContainer}>
        <Text>Form</Text>
          </View>

          <SafeAreaView style={styles.formContainer}>
        <FormInput
          name="email"
          value={state.email}
          placeholder="Enter email"
          autoCapitalize="none"
          onChangeText={handleEmailChange}
          iconName="ios-mail"
          iconColor="#2C384A"
        />
        <FormInput
          name="password"
          value={state.password}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={handlePasswordChange}
          iconName="ios-lock"
          iconColor="#2C384A"
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType="outline"
            onPress={handleOnLogin}
            title="LOGIN"
            buttonColor="#039BE5"
          />
        </View>
        <Button
          title="Don't have an account? Sign Up"
          onPress={goToSignup}
          titleStyle={{
            color: '#F57C00'
          }}
          type="clear"
        />
      </SafeAreaView>

        {/* <View style={styles.textContainer}>
          <Text>Empowering rural farmers in Africa through simple technology and mechanisation</Text>
        </View> */}
        <View style={styles.slideContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Enter
            </Text>
          </TouchableOpacity>
        <Text>Forget password?</Text>
        </View>
      </View>

      <View style={styles.tabBarInfoContainer}>
      <TouchableOpacity onPress={handleHelpPress} style={styles.nextButton}>
            <Text style={styles.helpLinkText}>
              Sign Up
            </Text>
          </TouchableOpacity>
<TouchableOpacity onPress={handleHelpPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Login
            </Text>
          </TouchableOpacity>
      
      </View>
     
    </View>
  );
}

AccessScreen.navigationOptions = {
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

function handleHelpPress() {
  // WebBrowser.openBrowserAsync(
  //   'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
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

  innerContainer: {
    // margin: 60,
    marginVertical:30,
    backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    // top:-10
    // opacity:280
    paddingBottom: 100
  },
  authButtonContainer:{
    // flex:1,
    justifyContent:'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: "row",
    // backgroundColor: '#234',
    width:'70%'
  },
  formContainer: {
    // flex: 1,
    // backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    // marginTop: 3,
    // marginLeft: -10,
  },
  circleContainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#aca',
  },
  textContainer:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:30,
    backgroundColor: '#aaa',
  },
  slideContainer:{
    // flex:1,
    paddingTop:70,
    paddingBottom:10,
    // backgroundColor: '#2ca',
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
    height:40,
    borderColor:'#2e78b7',
    borderWidth:1
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










// import React from 'react';
// import {
//   ActivityIndicator,
//   AsyncStorage,
//   Button,
//   StatusBar,
//   StyleSheet,
//   View,
// } from 'react-native';
// import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

// class SignInScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Please sign in',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Sign in!" onPress={this._signInAsync} />
//       </View>
//     );
//   }

//   _signInAsync = async () => {
//     await AsyncStorage.setItem('userToken', 'abc');
//     this.props.navigation.navigate('App');
//   };
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome to the app!',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Show me more of the app" onPress={this._showMoreApp} />
//         <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//       </View>
//     );
//   }

//   _showMoreApp = () => {
//     this.props.navigation.navigate('Other');
//   };

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }

// class OtherScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Lots of features here',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }

// class AuthLoadingScreen extends React.Component {
//   constructor() {
//     super();
//     this._bootstrapAsync();
//   }

//   // Fetch the token from storage then navigate to our appropriate place
//   _bootstrapAsync = async () => {
//     const userToken = await AsyncStorage.getItem('userToken');

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//   };

//   // Render any loading content that you like here
//   render() {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator />
//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));
