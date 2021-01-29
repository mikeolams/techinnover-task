import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function OnboardingTwoScreen(props) {

  return (
      <View style={styles.container}>
      <View style={styles.container1}>
      <View style={styles.content1}>
        <Image
            source={
              require('../assets/images/tec-rectangle4.png')
            }
            style={styles.image2}
          />
          <Text> Hi Dustin!</Text>
          </View>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector-6.png')
            }
            style={styles.image2}
          />
          </TouchableOpacity>

      </View>


      <View style={styles.container2}>
      <View>
          <Text style={styles.boldText}>
            Popular Books
            </Text>
          </View>
        <View style={styles.content3}>
        <View>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-image-15.png')
            }
            style={styles.image2}
          />
          </TouchableOpacity>
          <Text style={styles.boldText}>
             Fashionopolis
            </Text>
            <Text style={styles.smallText}>
             Dana Thomas
            </Text>
          </View>
          <View>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-image-14.png')
            }
            style={styles.image2}
          />
          </TouchableOpacity>
          <Text style={styles.boldText}>
             Chanel
            </Text>
            <Text style={styles.smallText}>
             Patrick Mauries
            </Text>
          </View>
         
          </View>
        </View>


        <View style={styles.container3}>
          <View>
          <Text style={styles.boldText}>
             Newest
            </Text>
          </View>
        <View style={styles.content3}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
        <Image
            source={
              require('../assets/images/tec-image16.png')
            }
            style={styles.image3}
          />
          </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.boldText}>
             Yves Saint Laurent
            </Text>
            <Text style={styles.smallText}>
             Suzy Monkas
            </Text>
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
            </View>
          </View>
          <View>
          <Image
            source={
              require('../assets/images/tec-vector5.png')
            }
          />
          </View>
          <View>
          <Image
            source={
              require('../assets/images/tec-star5.png')
            }
          />
          </View>
          </View>


        </View>
        <View style={styles.container4}>
          <View>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-image17.png')
            }
          />
          </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.boldText}>
             The Book of Signs
            </Text>
            <Text style={styles.smallText}>
             Rudolf Koch
            </Text>
          </View>
          <View>
          <Image
            source={
              require('../assets/images/tec-vector5.png')
            }
          />
          </View>
          
        </View>
        <View style={styles.container5}>

        <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vectpor.png')
            }
            // style={styles.logoImage}
          />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector.png')
            }
          />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector-buy.png')
            }
          />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image
            source={
              require('../assets/images/tec-vector-set.png')
            }
          />
          </TouchableOpacity>
          
        </View>
        
    </View>
  );
}

OnboardingTwoScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:40,
    paddingHorizontal:35,
    backgroundColor:"#FDFDFD"
  },
  container1:{
    flex:0.6,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
    // backgroundColor:"#116"
  },
  container2:{
    flex:2.3,
  },
  container3:{
    flex:1.3,
  },
  container4:{
    flex:0.8,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   // backgroundColor:"#133"
  },
  container5:{
    flex:0.5,
    zIndex:2,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:15,
    backgroundColor:"#fff",
    bottom:30
  },
  boldText:{
    fontSize: 17,
    textAlign: 'left',
    fontWeight:"bold"
  },
  smallText:{
    fontSize: 11,
    textAlign: 'left',
  },
  image3: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  content3:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  rateContainer:{
    flexDirection:"row",
    marginTop:20,
  },
  content1:{
    alignItems:"center",
    flexDirection:"row",
  },


  topContainer: {
    marginVertical:70,
    marginHorizontal:20,
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  logoContainer:{
    flex:1,
    paddingTop:10,
  },
  logoImage: {
    width: 150,
    height: 180,
    resizeMode: 'contain',
  },
  messageImage: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  bodyContainer:{
    flex:3,
    justifyContent:'center',
  },
  textContainer:{
    marginTop:10,
    flex:1,
    width:"100%",
    justifyContent:'space-evenly',
  },
  buttonContainer:{
    flex:2,
    paddingBottom:50,
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  textOne: {
   fontSize:22,
   fontWeight:"bold"
  },
  textTwo: {
    color: "#7b9115",
    fontSize:15,
    justifyContent:'center',
    textAlign:"center"
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
  regButton: {
    justifyContent:'center',
    backgroundColor: '#adcf29',
    width:"100%",
    height:45,
    borderRadius:20
  },
  logButton: {
    justifyContent:'center',
    backgroundColor: '#fff',
    width:"100%",
    height:45,
    borderRadius:20,
    borderColor:"#000",
    borderWidth:1
  },
  regButtonText: {
    fontSize: 17,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  logButtonText: {
    fontSize: 17,
    textAlign: 'center',
  },
 
});
