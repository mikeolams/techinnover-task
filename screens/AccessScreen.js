import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
          <View style={styles.body4Con}>
            
          <Image
            source={
              require('../assets/images/tec-vector1.png')
            }
          />
          <Text>Preview</Text>
         
          </View>
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
  },
  containerBody: {
    flex:6,
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
  fontWeight:'bold',
},
largeText: {
  fontSize: 23,
},
rText:{
  color:"#06070D",
},
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

});
