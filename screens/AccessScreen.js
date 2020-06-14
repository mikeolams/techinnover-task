import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, Fragment} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

import { MonoText } from '../components/StyledText';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import ErrorMessage from '../components/ErrorMessage';
// import UserToken from '../components/UserToken';
// import AsyncStorage from '@react-native-community/async-storage';

export default function AccessScreen(props) {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: Yup.string()
      .label('Password')
      .required()
      .min(4, 'Password must have at least 4 characters ')
  })
  // const handleOnLogin = async () => {
  //   const { email, password } = state
  //   try {
  //     if (email.length > 0 && password.length > 0) {
  //       props.navigation.navigate('App')
  //     }
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  const handleSubmit = values => {
      // console.log(actionType);
if(actionType==='login'){
  // console.log(actionType)
  if (values.email.length > 0 && values.password.length > 0) {
   
    console.log(JSON.stringify(values));
    submitLogin(values);
    // setTimeout(() => {https://farmcenta.com/api/v1/login/
    //   props.navigation.navigate('App')
    // }, 3000)ss
  }
}else{
  // console.log(actionType);
  console.log(JSON.stringify(values));
  console.log(values);
  submitSignUp(values);
}
// if(actionType==='signup'){
//   console.log(actionType);
//   console.log(JSON.stringify(values));
//   submitSignUp(values);
// }
    
  };

  const [actionType, setActionType] = useState('');

  // multiple api call
  // Created a function that returns a Promise.
const loginCall= async (values)=> {
  return await fetch('https://farmcenta.com/api/v1/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(res => res.json())
  // .then(res => console.log(res));
  .then(res => transactionsCall(res));
},

transactionsCall= (login)=> {
      // loginCall(values)
      //   .then(login => {
          fetch('https://farmcenta.com/api/v1/transactions?token='+login.token,{
            method: 'POST',
            header: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(transactions => {
            // console.log('token - '+login.token);
          // console.log(login, transactions);
          console.log(login);
          // if(transactions.transactions.length!=0){
          //   console.log('yes');
          //   console.log(transactions.transactions.length);
          //   // setLoading(false)
          //  };
          fetch('https://farmcenta.com/api/v1/products')
          .then(resp=>resp.json())
          .then(farmProducts=>{

            // AsyncStorage.setItem('token', login.token);
            props.navigation.navigate('Home', {
              "name": login.details.name,
              "email": login.details.email,
              "avatar": login.details.avatar,
              "token": login.token,
              "transactions":transactions,
              // "farmProducts": farmProducts
            });
          })
          .catch(err=> {
            console.warn('issues fetching farmparameters '+err )
          })
        })
        .catch(err=> {
          console.warn('issues fetching trans parameters '+err )
        })
        // })
        // .catch(err=> {
        //   console.warn('issues fetching login parameters '+err )
        // });
};

const submitLogin =async (values) => {
  // transactionsCall(values);
  loginCall(values);
 }
//   const submitLogin =async (values) => {    
//     await fetch('https://farmcenta.com/api/v1/login',{
//       method: 'POST',
//       // mode: 'cors', // no-cors, *cors, same-origin
//       // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       // credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         // 'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       // redirect: 'follow', // manual, *follow, error
//       // referrerPolicy: 'no-referrer', // no-referrer, *client
//       // body: values // body data type must match "Content-Type" header
//       body: JSON.stringify(values) // body data type must match "Content-Type" header
//     })
//   //  .then(resp=>console.log(JSON.parse(resp)))
//     .then(resp=>resp.json())
//     // .then(resp=>resp.text())
//     // .then(resp=>JSON.parse(resp))
//     .then(resp=>{
//       // console.log(resp);
//       // console.log('name -'+resp.details.name);
//       // console.log('email -'+resp.details.email);
//       // console.log('pic -'+resp.details.avatar);
//       console.log('token - '+resp.token);
//       // let transaction=[];
//       // transactionCall;
//       // let transactionCall =async()=> await fetch('https://farmcenta.com/api/v1/transactions?token='+resp.token,{
//       //   method: 'POST'
//       // }).then(resp=>resp.json()).then(resp=>transaction.push(resp));
//       // console.log(transaction);
      
//       // const data={
//       //   "name": resp.details.name,
//       //   "email": resp.details.email,
//       //   "avatar": resp.details.avatar,
//       //   "token": resp.token,
//       // }
//       // props.navigation.actions.setParams(data)
//       // props.navigation.setParams(data)
//       // console.log(props.screenProps)
//       // console.log(props)
      
//       // props.navigation.getParam()
//       // props.navigation.navigate('Main',{data});
//       // props.navigation.navigate('Main', {
//       //   screen: 'Home',
//       //   params:{
//       //   "name": resp.details.name,
//       //   "email": resp.details.email,
//       //   "avatar": resp.details.avatar,
//       //   "token": resp.token
//       // }});
// console.log(resp.details.name)
//       props.navigation.navigate('Home', {
//         "name": resp.details.name,
//         "email": resp.details.email,
//         "avatar": resp.details.avatar,
//         "token": resp.token
//       });

//       // props.navigation.setParams({
//       //   "name": resp.details.name,
//       //   "email": resp.details.email,
//       //   "avatar": resp.details.avatar,
//       //   "token": resp.token,
//       // });
//       // props.navigation.navigate('Main');
//     })
//   //  .then(resp=>resp.json())JSON.stringify
//   //  .then(resp=>console.log(resp.json().stringify))
//    .catch(err=> {
//     //  console.log(err);
//      console.warn('Wrong password '+err )
//     //  setLoginState(fasle)
//    })
//  };

//  Sign up logic
const submitSignUp =async (values) => {    
  await fetch('https://farmcenta.com/api/v1/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: values // body data type must match "Content-Type" header
    body: JSON.stringify(values) // body data type must match "Content-Type" header
  })
  .then(resp=>resp.json())
  // .then(resp=>console.log(JSON.parse(resp)))
  .then(
(resp)=>transactionsCall(resp)
// (resp)=>console.log(resp)

  )
 .catch(err=> {
   console.warn('Wrong parameters or unreachable '+err )
 })
};

//  async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

  const goToSignup = () => {
    console.log('Signup')
    // props.navigation.navigate('Signup')
  };

  const [toggle, setToggle] = useState(true);
  // const [loginState, setLoginState] = useState(false);

  const toggleHandler = () => {
    console.log('Signup')
    // props.navigation.navigate('Signup')
    setToggle(!toggle)
  },
  loginHandler = () => {
    // props.navigation.navigate('Signup')
    setActionType('login')
    setToggle(true)
  },
  signUpHandler = () => {
    // props.navigation.navigate('Signup')
    setActionType('signup')
    setToggle(false)
  };
// const loginToApp = (newState)=>{
//   const { url } = newState;
//   const { title } = newState;
//   console.log(title)
//   if (!url) return;

//   if (url.includes('?message=success')) {
//     this.webview.stopLoading();
//     maybe close this view?
//     console.log('yes')
//   }
// }
  // useEffect(() => {
  //   console.log('test')
  // }, [loginState]);

  return (
    <View style={styles.container}>

{/* <WebView originWhitelist={['*']} 
    style={styles.webPostion}
    ref={ref => (webview = ref)}
    // source={{html: newsItems}}/>
    onNavigationStateChange={loginToApp}
    source={{uri:'https://farmcenta.com/mobile/login'}}/> */}

      
      <View style={styles.innerContainer}>
      <View style={styles.mainAuthContainer}>
      <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />
      </View>




{toggle? ( <SafeAreaView style={styles.formContainer}>
          <Formik
          initialValues={{ email: '', password: '' }}
          
          onSubmit={values => {handleSubmit(values)}}
          validationSchema={validationSchema}
        >
          {formikProps => (
            <Fragment>
             
              <FormInput
                name="email"
                value={formikProps.values.email}
                onChangeText={formikProps.handleChange('email')}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('email')}
              />
             
              <ErrorMessage errorValue={formikProps.errors.email} />
             
              <FormInput
                name="password"
                value={formikProps.values.password}
                onChangeText={formikProps.handleChange('password')}
                placeholder="Enter password"
                secureTextEntry
                iconName="ios-lock"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('password')}
              />
              
              <ErrorMessage errorValue={formikProps.errors.password} />
              
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={formikProps.handleSubmit}
                  title="Log in"
                  backgroundColor="#0C9121"
                  buttonColor = "#fff"
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                  loading = { formikProps.isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
         
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Forgotten your log in details?</Text>
          <TouchableHighlight style={{paddingLeft:8}} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
          <Text style={styles.textHead}>Get help.</Text>
          </TouchableHighlight>
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.line}></View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.line}></View>
          </View>
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Don't have an acoount?</Text>
        <TouchableHighlight style={{paddingLeft:8}} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={signUpHandler}>
          <Text style={styles.textHead}>Register Now.</Text>
          </TouchableHighlight>
        </View>
       
        </SafeAreaView>):
        (<SafeAreaView style={{...styles.formContainer,...styles.signUpContainer}}>
          <View
           style={styles.inContainer}
           >
          <Formik
          initialValues={{ name: '', email: '', password: '',password_confirmation: '' }}
          onSubmit={values => {handleSubmit(values)}}
          validationSchema={validationSchema}
        >
          {formikProps => (
            <Fragment>
              <FormInput
                name="name"
                value={formikProps.values.name}
                onChangeText={formikProps.handleChange('name')}
                placeholder="Enter Full Name"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('name')}
              />
              <ErrorMessage errorValue={formikProps.errors.name} />
               <FormInput
                name="email"
                value={formikProps.values.email}
                onChangeText={formikProps.handleChange('email')}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('email')}
              />
              <ErrorMessage errorValue={formikProps.errors.email} />
              <FormInput
                name="password"
                value={formikProps.values.password}
                onChangeText={formikProps.handleChange('password')}
                placeholder="Enter password"
                secureTextEntry
                iconName="ios-lock"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('password')}
              />
              <ErrorMessage errorValue={formikProps.errors.password} />

              <FormInput
                name="password_confirmation"
                value={formikProps.values.password_confirmation}
                onChangeText={formikProps.handleChange('password_confirmation')}
                placeholder="confirm password"
                secureTextEntry
                iconName="ios-lock"
                iconColor="#2C384A"
                touched
                onBlur={formikProps.handleBlur('password_confirmation')}
              />
              <ErrorMessage errorValue={formikProps.errors.password} />
              
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={formikProps.handleSubmit}
                  title="Register"
                  backgroundColor="#0C9121"
                  buttonColor = "#fff"
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                  loading = { formikProps.isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
       
          <View style={styles.dividerContainer}>
            <View style={styles.line}></View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.line}></View>
          </View>
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Already have an acoount?</Text>
        <TouchableHighlight style={{paddingLeft:8}} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={loginHandler}>
          <Text style={styles.textHead}>Log in</Text>
          </TouchableHighlight>
        </View>
        </View> 
        </SafeAreaView>
      )}

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
console.log(AccessScreen.data)
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
  // signUpContainer:{
  //   paddingTop:100
  // },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  scrollContainer: {
    marginTop: 30,
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
    // marginVertical:30,
    // marginBottom:50,
    backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    // top:-10
    // opacity:280
    paddingBottom: 140
  },
  mainAuthContainer:{
    // marginVertical:30,
    // flex:1,
    height:150,
    justifyContent:'center',
    alignItems: 'center',
    // top:0,
    // position:'relative'
  },
  optionContainer:{
    flexDirection:"row",
    justifyContent:'center',
    // marginBottom:80
  },
  textHead: {
    fontWeight:"bold",
    color: '#0E861C',
    height:30,
  },
  text: {
    color: '#0E861C',
  },
  dividerContainer:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    marginVertical:20
  },
  line:{
    borderBottomWidth:1,
    borderBottomColor:'#0E861C',
    width:'40%',
    marginHorizontal:5
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
    // flex:1,
    // backgroundColor: '#fff'
    height:'80%',
    width:'86%'
  },
  // signUpContainer: {
  //   // marginTop:3,
  //   // flex: 1,
  //   // backgroundColor: '#fff'
  // },
  // inContainer: {
  //   marginBottom:50,
  //   // backgroundColor: '#FFFFFF',
  //   flex:1,
  //   paddingBottom: 140
  // },
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

  // webPostion:{
  //   top:-90,
  //   zIndex:-1
  // },

});
