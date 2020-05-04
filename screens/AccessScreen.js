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
} from 'react-native';
import { Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import ErrorMessage from '../components/ErrorMessage';

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
  .then(res => res.json());
},

transactionsCall= (values)=> {
      loginCall(values)
        .then(login => {
          fetch('https://farmcenta.com/api/v1/transactions?token='+login.token,{
            method: 'POST'
          })
          .then(res => res.json())
          .then(transactions => {
            // console.log('token - '+login.token);
          // console.log(login, transactions);
          // if(transactions.transactions.length!=0){
          //   console.log('yes');
          //   console.log(transactions.transactions.length);
          //   // setLoading(false)
          //  };
           
          props.navigation.navigate('Home', {
            "name": login.details.name,
            "email": login.details.email,
            "avatar": login.details.avatar,
            "token": login.token,
            "transactions":transactions
          });
        })
        .catch(err=> {
          console.warn('Wrong parameters '+err )
        })
        });
};

const submitLogin =async (values) => {
  transactionsCall(values);
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
    body: values // body data type must match "Content-Type" header
    // body: JSON.stringify(values) // body data type must match "Content-Type" header
  })
  .then(resp=>resp.json())
  .then(resp=>console.log(JSON.parse(resp)))
//   .then(resp=>{
// console.log(resp)
//   })
 .catch(err=> {
   console.warn('Wrong parameters '+err )
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

  // useEffect(() => {
  //   console.log('test')
  // }, [loginState]);

  return (
    <View style={styles.container}>
      
      <View style={styles.innerContainer}>
      <View style={styles.mainAuthContainer}>
      <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />

<View style={styles.authButtonContainer}>
      <TouchableOpacity onPress={signUpHandler} style={styles.nextButton}>
      {/* <TouchableOpacity onPress={toggleHandler} style={styles.nextButton}> */}
            <Text style={styles.helpLinkText}>
              Sign Up
            </Text>
          </TouchableOpacity>
{/* <TouchableOpacity style={styles.skipButton}> */}
{/* <TouchableOpacity onPress={()=>props.navigation.navigate('Main')} style={styles.skipButton}> */}
<TouchableOpacity onPress={loginHandler} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Login
            </Text>
          </TouchableOpacity>
      
      </View>
      </View>


{/* <View style={{...styles.authButtonContainer, width:'50%', height:50}}>
  
        <FormButton
                  buttonType="outline"
                  title="SignUp"
                  // backgroundColor="#0C9121"
                  buttonColor = "#0C9121"
                  borderRadius= {0}
                  // width={400}
                  // flex={1}
                />
        <FormButton
                  buttonType="outline"
                  title="Login"
                  backgroundColor="#0C9121"
                  buttonColor = "#fff"
                  borderRadius= {0}
                  // width={20}
                />
      
      </View> */}

        {/* <View style={styles.circleContainer}>
        <Text>Form</Text>
          </View> */}

{toggle? ( <SafeAreaView style={styles.formContainer}>
          <Formik
          initialValues={{ email: '', password: '' }}
          // onSubmit={values => {}}
          // onSubmit={values => { alert(JSON.stringify(values))}}
          onSubmit={values => {handleSubmit(values)}}
          validationSchema={validationSchema}
        >
          {/* {({ handleChange, values, handleSubmit }) => ( */}
          {formikProps => (
            <Fragment>
              {/* {console.log(formikProps)} */}
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
              {/* <Text style={{ color: 'red' }}>{formikProps.errors.email}</Text> */}
              <ErrorMessage errorValue={formikProps.errors.email} />
              {/* <ErrorMessage errorValue={formikProps.touched.email && formikProps.errors.email} /> */}
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
              {/* <Text style={{ color: 'red' }}>{formikProps.errors.password}</Text> */}
              <ErrorMessage errorValue={formikProps.errors.password} />
              {/* <ErrorMessage errorValue={formikProps.touched.password && formikProps.errors.password} /> */}
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={formikProps.handleSubmit}
                  title="Enter"
                  // buttonColor="#039BE5"'#0C9121'
                  backgroundColor="#0C9121"
                  buttonColor = "#fff"
                  // borderRadius= {20}
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                  loading = { formikProps.isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          // title="Don't have an account? Sign Up"Forget password?
          title="Forget password?"
          onPress={goToSignup}
          titleStyle={{
            color: '#F57C00'
          }}
          type="clear"
        />
        {/* <View style={styles.textContainer}>
          <Text>Empowering rural farmers in Africa through simple technology and mechanisation</Text>
        </View> */}
        {/* <View style={styles.slideContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>
              Enter
            </Text>
          </TouchableOpacity>
        <Text>Forget password?</Text>
        </View> */}
        </SafeAreaView>):
        (<SafeAreaView style={{...styles.formContainer,...styles.signUpContainer}}>
          <ScrollView
           style={styles.container}
          //  style={{...styles.container,...styles.scrollContainer}}
           contentContainerStyle={styles.contentContainer}>
          <Formik
          initialValues={{ name: '', email: '', password: '',password_confirmation: '' }}
          onSubmit={values => {handleSubmit(values)}}
          validationSchema={validationSchema}
        >
          {/* {({ handleChange, values, handleSubmit }) => ( */}
          {formikProps => (
            <Fragment>
              {/* {console.log(formikProps)} */}
              <FormInput
                name="name"
                value={formikProps.values.name}
                onChangeText={formikProps.handleChange('name')}
                placeholder="Enter Full Name"
                // autoCapitalize="none"
                // iconName="ios-mail"
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
                  title="Submit"
                  backgroundColor="#0C9121"
                  buttonColor = "#fff"
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                  loading = { formikProps.isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          title="Forget password?"
          onPress={goToSignup}
          titleStyle={{
            color: '#F57C00'
          }}
          type="clear"
        />
        </ScrollView>
        </SafeAreaView>
      )}

      </View>

    

      {/* <View style={styles.tabBarInfoContainer}>
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
      
      </View> */}
     
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
  mainAuthContainer:{
    marginVertical:30,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    top:0,
    // position:'relative'
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
    flex: 1,
    // backgroundColor: '#fff'
    width:'80%'
  },
  signUpContainer: {
    marginTop:30,
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
