import React, { useState, useEffect, Fragment} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import ErrorMessage from '../components/ErrorMessage';

export default function IndexScreen(props) {

  function handleNextPress() {
    props.navigation.navigate('LandingTwo');
    console.log('ikop')
  }
  
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

  return (
    <ImageBackground source={require('../assets/images/tec-rectangle.png')} style={styles.container}>
      <ImageBackground source={require('../assets/images/tec-group.png')} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.top1}>
        <Image
            source={
              require('../assets/images/tech-subtract.png')
            }
          />
        </View>
        <View style={styles.bTextContainer}>
        <Text style={styles.whiteText}>
              Adventures in literature.
            </Text>
        </View>
        <View style={styles.top2}>
        <Text style={styles.whiteText1}>
              Join our community
            </Text>
        </View>

      </View>

      <View style={styles.bottomContainer}>
      <View>
        <Text style={styles.blackText}>
              Log in
            </Text>
        </View>

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
                placeholder="Email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#2c384a"
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
                iconColor="#2c384a"
                touched
                onBlur={formikProps.handleBlur('password')}
              />
              
              <ErrorMessage errorValue={formikProps.errors.password} />
              
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={formikProps.handleSubmit}
                  title="Sign in"
                  buttonColor='#fff'
                  backgroundColor="#000"
                  borderRadius={12}
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                  loading = { formikProps.isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <TouchableOpacity style={styles.bioImageContainer} onPress={handleNextPress}>
        <Image
            source={
              require('../assets/images/tec-x34hWkZU.png')
            }
            // style={styles.bioImage}handleNextPress
          />
        </TouchableOpacity>
        

      </View>
      </ImageBackground>
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
  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },
 

  // contentContainer: {
  //   paddingTop: 30,
  // },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
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
    paddingTop:40,
    // marginVertical:110,
      paddingHorizontal:40,
    // backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex:2,
    justifyContent:'center',
    // alignItems: 'center',
    // top:-10
  },
  // logoContainer:{
  //   flex:1,
  //   justifyContent:'center',
  //   marginBottom:40,
  // },
  // logoImage: {
  //   // width: 12,
  //   // height: 12,
  //   // resizeMode: 'contain',
  //   textAlign: 'center',
  // },
  bioImageContainer:{
    marginTop:20,
    marginHorizontal:100,
    // justifyContent:"center",
    // backgroundColor:"black",
    alignItems:"center"
  },
  // bioImage:{
  //   // width: 30,
  //   // height: 30,
  // },
  // messageImage: {
  //   width: 160,
  //   height: 160,
  //   resizeMode: 'contain',
  // },
  // circleContainer:{
  //   flex:1,
  //   justifyContent:'center',
  // },
  // textContainer:{
  //   marginTop:70,
  //   flex:1,
  //   justifyContent:'center',
  //   paddingHorizontal:30,
  // },
  // text: {
  //   color: '#0e861c',
  //   justifyContent:'center',
  //   textAlign:"center"
  // },
  // slideContainer:{
  //   height:30,
  //   marginTop:70,
  //   marginBottom:10,
  //   width:'40%',
  //   flexDirection:'row',
  //   justifyContent:"space-evenly"
  // },
  // activeSlide:{
  //   backgroundColor: '#0c9121',
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
  bottomContainer: {
    flex:1.2,
    // flexDirection:"row",
    // justifyContent:'space-around',
    // position: 'absolute',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
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
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal:30,
    backgroundColor:'white',
  },
  // skipButton: {
  //   justifyContent:'center',
  //   width:100,
  //   height:40
  // },
  // nextButton: {
  //   justifyContent:'center',
  //   width:100,
  //   height:40
  // },
  // skipButtonText: {
  //   fontSize: 14,
  //   color: '#fff',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  top1:{
    flex:1,
    marginVertical:50
  },
  top2:{
    flex:1
  },
  bTextContainer:{
    paddingRight:120,
    flex:1
  },
  whiteText: {
    fontSize: 28,
    color: '#fff'
  },
  whiteText1: {
    fontSize: 16,
    color: '#fff'
  },
  blackText: {
    fontSize: 16,
    fontWeight:'600',
    color: '#000',
  },
});
