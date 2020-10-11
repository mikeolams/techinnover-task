import React, { useState, useEffect, Fragment} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
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
 

  const handleSubmit = values => {
if(actionType==='login'){
  if (values.email.length > 0 && values.password.length > 0) {
    submitLogin(values);
  }
}else{
  submitSignUp(values);
}
    
  };

  const [actionType, setActionType] = useState('login');

const loginCall= async (values)=> {
  return await fetch('https://centavestng.com/api/v1/login',{
  // return await fetch('https://farmcenta.com/api/v1/login',{https://centavestng.com
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(res => res.json())
  .then(res => transactionsCall(res));
},

transactionsCall= (login)=> {

          fetch('https://centavestng.com/api/v1/transactions?token='+login.token,{
            // fetch('https://centavestng.com/api/v1/transactions?token='+login.token,{
            method: 'POST',
            header: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(transactions => {
          fetch('https://centavestng.com/api/v1/products')
          .then(resp=>resp.json())
          .then(farmProducts=>{         
            props.navigation.navigate('Home', {
              "name": login.details.name,
              "email": login.details.email,
              "avatar": login.details.avatar,
              "token": login.token,
              "transactions":transactions,
              "farmProducts": farmProducts
            });
          })
          .catch(err=> {
            console.warn('issues fetching farmparameters '+err )
          })
        })
        .catch(err=> {
          console.warn('issues fetching trans parameters '+err )
        })
};

const submitLogin =async (values) => {
  loginCall(values);
 }
//  Sign up logic
const submitSignUp =async (values) => {    
  await fetch('https://centavestng.com/api/v1/signup',{
    // await fetch('https://farmcenta.com/api/v1/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values) 
  })
  .then(resp=>resp.json())
  .then(
(resp)=>transactionsCall(resp)

  )
 .catch(err=> {
   console.warn('Wrong parameters or unreachable '+err )
 })
};

 
  const [toggle, setToggle] = useState(true);

  const loginHandler = () => {
    setActionType('login')
    setToggle(true)
  },
  signUpHandler = () => {
    setActionType('signup')
    setToggle(false)
  };
  return (
    <View style={styles.container}>
      
    
      {/* <View style={styles.innerContainer}> */}
      <ImageBackground source={require('../assets/images/log-in-bg.png')} style={styles.innerContainer}>
      <View style={styles.mainAuthContainer}>
      <Image
            source={
              require('../assets/images/centavestLogoMd.png')
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
             {/* log-in-bg.png */}
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
                style={styles.form}
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
                  backgroundColor="#ADCF29"
                  buttonColor = "#fff"
                  borderRadius={20}
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
        (<SafeAreaView style={{...styles.formContainer}}>
          <View>
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
                  backgroundColor="#ADCF29"
                  buttonColor = "#fff"
                  borderRadius={20}
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

      {/* </View> */}
      </ImageBackground>
      
    </View>
    
  );
}

AccessScreen.navigationOptions = {
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
    backgroundColor: '#FFFFFF',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  mainAuthContainer:{
    marginTop:90,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  optionContainer:{
    flexDirection:"row",
    justifyContent:'center',
  },
  textHead: {
    fontWeight:"bold",
    // color: '#0E861C',
    height:30,
  },
  text: {
    // color: '#0E861C',"#ccc"
    color:"#ccc",
  },
  dividerContainer:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    marginVertical:20
  },
  line:{
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    width:'40%',
    marginHorizontal:5
  },
  authButtonContainer:{
    justifyContent:'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: "row",
    width:'70%'
  },
  formContainer: {
    flex:5.4,
    paddingBottom:80,
    width:'86%'
  },
  buttonContainer: {
    margin: 25
  },
  logoImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginBottom:30
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
    paddingTop:70,
    paddingBottom:10,
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
