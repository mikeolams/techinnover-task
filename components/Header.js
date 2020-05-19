import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function Header() {
    return(<View style={styles.itemContainer}>
        <Text style={{...styles.text,...styles.sign}}>Settings</Text>
        <Image 
                      source={
                        require('../assets/images/logo.png')
                    }
                        style={styles.logoImage}
                    />
        <View style={styles.container}></View>
      </View>)
};


const styles = StyleSheet.create({
  itemContainer:{
    flex:0.15,
    marginTop:30,
    flexDirection: "row",
    backgroundColor: "#0E861C33",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomColor:"#0E861C33",
    borderBottomWidth:2,
    paddingHorizontal:20
  
  },
  text:{
    // textAlign:'center',
    fontWeight:'bold',
    color:"#0C9121"
  },
  sign:{
    fontSize:20
  },
  logoImage: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
    // marginTop:40
},
container:{
    width:"10%"
}
})