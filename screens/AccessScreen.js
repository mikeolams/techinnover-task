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
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AccessScreen(props) {


  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
      <View style={styles.returnB}>
      <TouchableOpacity onPress={() => props.navigation.navigate('LandingTwo')}>
        {console.log(props.navigation)}
        <Image
            source={
              require('../assets/images/tec-vector-3.png')
            }
            style={styles.topImage}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.labelIcons}>
        
        <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector5.png')
            }
            style={styles.topImage}
          />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector9.png')
            }
            style={styles.topImage}
          />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerBody}>
        <View style={styles.body1} >
        <Image
            source={
              require('../assets/images/tec-image16.png')
            }
            // style={styles.topImage}
          />
        </View>
        <View style={styles.body2}>
          <Text style={{...styles.largeText,...styles.boldText,...styles.rText}}>Yves Saint Laurent</Text>
          <Text style={styles.rText}>Suzy Menkes</Text>
          <View style={styles.rateContainer}>
          <Image
            source={
              require('../assets/images/tec-star2.png')
            }
          />
           <Image
            source={
              require('../assets/images/tec-star2.png')
            }
          />
           <Image
            source={
              require('../assets/images/tec-star2.png')
            }
          />
           <Image
            source={
              require('../assets/images/tec-star2.png')
            }
          />
          <Text style={{...styles.boldText,...styles.rText}}>4.5</Text>
          <Text style={styles.rText}>/</Text>
          <Text style={styles.rText}>5.0</Text>
          </View>
        </View>
        <View style={styles.body3}>
          <Text style={{...styles.rText,textAlign:"justify"}}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion</Text>
        </View>
        <View style={styles.body4}>
        {/* <TouchableOpacity style={styles.body4ConInner}> */}
          <View style={styles.body4Con}>
            
          <Image
            source={
              require('../assets/images/tec-vector1.png')
            }
          />
          <Text>Preview</Text>
         
          </View>
          {/* </TouchableOpacity> */}
          <View style={styles.body4Con}>
          <Image
            source={
              require('../assets/images/tec-vector3.png')
            }
          />
          <Text>Review</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerBottom}>
      <TouchableOpacity style={styles.bottomB}>
        <Text style={styles.bottomBText}>Buy Now for $46.99</Text>
      </TouchableOpacity>
      </View>
      
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

   containerTop: {
     flex:0.9,
     flexDirection:"row",
    // backgroundColor:"#a66"
  },
  containerBody: {
    flex:6,
    // justifyContent:"center",
    // alignItems:"center"
    // backgroundColor:"#f16"
  },
  containerBottom: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
    // backgroundColor:"#444"
  },
  returnB:{
    flex:1,
    justifyContent:"center",
    paddingLeft:30,
    paddingTop:50,
  },
  labelIcons:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingLeft:40,
    paddingTop:50,
    // backgroundColor:"#ddd"
  },
  topImage: {
      width: 16,
      height: 16,
      resizeMode: 'contain',
      // marginBottom:30
    },
    bottomB:{
      backgroundColor:"#444",
      borderRadius:12,
      width:300,
      height:50,
      justifyContent:"center",
      alignItems:"center"
    },
    bottomBText:{
      fontWeight:"bold",
      color:"#fff"
    },
body1:{
  flex:4,
  justifyContent:"center",
  alignItems:"center",
  marginVertical:20,
  // backgroundColor:"#33e",
},
body2:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  paddingVertical:10,
  // backgroundColor:"#eee",
},
body3:{
  flex:1,
  justifyContent:"center",
  paddingHorizontal:30,
  // alignItems:"center",
  // paddingVertical:10,
  // backgroundColor:"#e2a",
},
body4:{
  flex:1,
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
  // backgroundColor:"#121",
},
rateContainer:{
  flexDirection:"row",
  marginTop:20,
},
boldText: {
  // fontSize: 16,
  fontWeight:'bold',
  // color: '#000',
},
largeText: {
  fontSize: 23,
},
rText:{
  color:"#06070D",
  // color:"#eee",#06070D
},
// body4ConInner:{
//   flex:1,
//   // flexDirection:"row",
//   // alignItems:"center",
//   // justifyContent:"space-between",
// },
body4Con:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-evenly",
  alignItems:"center",
  paddingHorizontal:20,
  backgroundColor:"#eee",
  borderRadius:10,
  height:40,
  marginHorizontal:10
},


  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },
  // scrollContainer: {
  //   marginTop: 30,
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

  // innerContainer: {
  //   backgroundColor: '#ffffff',
  //   flex:1,
  //   justifyContent:'center',
  //   alignItems: 'center',
  // },
  // mainAuthContainer:{
  //   marginTop:90,
  //   flex:1,
  //   justifyContent:'center',
  //   alignItems: 'center',
  // },
  // optionContainer:{
  //   flexDirection:"row",
  //   justifyContent:'center',
  // },
  // textHead: {
  //   fontWeight:"bold",
  //   height:30,
  // },
  // text: {
  //   color:"#ccc",
  // },
  // dividerContainer:{
  //   flexDirection:"row",
  //   justifyContent:'center',
  //   alignItems:"center",
  //   marginVertical:20
  // },
  // line:{
  //   borderBottomWidth:1,
  //   borderBottomColor:'#ccc',
  //   width:'40%',
  //   marginHorizontal:5
  // },
  // authButtonContainer:{
  //   justifyContent:'space-around',
  //   alignItems: 'center',
  //   paddingVertical: 20,
  //   flexDirection: "row",
  //   width:'70%'
  // },
  // formContainer: {
  //   flex:5.4,
  //   paddingBottom:80,
  //   width:'86%'
  // },
  // buttonContainer: {
  //   margin: 25
  // },
  // logoImage: {
  //   width: 150,
  //   height: 120,
  //   resizeMode: 'contain',
  //   marginBottom:30
  // },
  // circleContainer:{
  //   flex:1,
  //   justifyContent:'center',
  //   backgroundColor: '#aca',
  // },
  // textContainer:{
  //   flex:1,
  //   justifyContent:'center',
  //   paddingHorizontal:30,
  //   backgroundColor: '#aaa',
  // },
  // slideContainer:{
  //   paddingTop:70,
  //   paddingBottom:10,
  // },


  // tabBarInfoContainer: {
  //   flexDirection:"row",
  //   justifyContent:'space-around',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   paddingVertical: 20,
  // },
  // skipButton: {
  //   justifyContent:'center',
  //   backgroundColor: '#0c9121',
  //   width:100,
  //   height:40
  // },
  // nextButton: {
  //   justifyContent:'center',
  //   backgroundColor: '#fff',
  //   width:100,
  //   height:40,
  //   borderColor:'#2e78b7',
  //   borderWidth:1
  // },
  // skipButtonText: {
  //   fontSize: 14,
  //   color: '#fff',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  //   textAlign: 'center',
  // },

});
