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
import { ExpoConfigView } from '@expo/samples';
import Header from '../components/Header';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  // return <ExpoConfigView />;
  const [settingProfile, setSettingProfile] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const getProfile = (token)=> {

        fetch('https://farmcenta.com/api/v1/profile?token='+token,{
          method: 'POST',
          header: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(profile => {
          
        // console.log(profile);
        console.log(token);
        setSettingProfile(profile);
        setDataLoaded(true)
        console.log(settingProfile);
        // if(transactions.transactions.length!=0){
        //   console.log('yes');
        //   console.log(transactions.transactions.length);
        //   // setLoading(false)
        //  };
        /////
      //   fetch('https://farmcenta.com/api/v1/products')
      //   .then(resp=>resp.json())
      //   .then(farmProducts=>{

      //     // AsyncStorage.setItem('token', login.token);
      //     props.navigation.navigate('Home', {
      //       "name": login.details.name,
      //       "email": login.details.email,
      //       "avatar": login.details.avatar,
      //       "token": login.token,
      //       "transactions":transactions,
      //       "farmProducts": farmProducts
      //     });
      //   })
      //   .catch(err=> {
      //     console.warn('issues fetching farmparameters '+err )
      //   })
      // })
      // .catch(err=> {
      //   console.warn('issues fetching trans parameters '+err )
      // })
      })
      .catch(err=> {
        console.warn('issues fetching profile parameters '+err )
      });
};

const retrieveUserToken = async () => {
  try {
    const token= await AsyncStorage.getItem("token");
getProfile(token);
// if (avatar !== null) {
//   // You can access your data
//   setUserInfo([name, avatar])
//   console.log(userInfo)

// }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  retrieveUserToken();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.topContainer} >
              <TouchableOpacity style={styles.avatarImage}>
              <Image 
                    source={
                      require('../assets/images/avatar-logo.png')
                  }
                //   source={
                //     require('../assets/images/logo.png')
                // }
                    // style={styles.logoImage}
                    style={styles.image}
                />
              </TouchableOpacity>
            </View>
            {dataLoaded?<View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.text}>Name</Text><Text style={styles.text}>></Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.itemContainer}>
                <Text style={styles.text}>Mobile:</Text><Text style={styles.text}>{settingProfile.profile[0].mobile}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Date of Birth:</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].dob}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Gender:</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].gender}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>State of Origin:</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].state}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Bank</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].bank}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Account Number:</Text><Text style={styles.text1}>{settingProfile.profile[0].bank_number}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Other Bank Details:</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].other_details}></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Next of Kin Name:</Text><Text style={{...styles.text1,...styles.sign}}>{settingProfile.profile[0].next_kin}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Next of Kin's Number:</Text><Text style={{...styles.text1,...styles.sign}}>0{settingProfile.profile[0].next_kin_number}</Text></TouchableOpacity>
            </View>:null}
        </View>

    </View>
);
}

SettingsScreen.navigationOptions = {
  // title: 'app.json',
  // header: null,
  header: Header
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  innerContainer: {
      flex: 1,
      // backgroundColor: '#f0f',
      width:'95%',
      alignSelf:"center"
  },
  topContainer: {
    flex:1,
    // paddingTop: 1,
    justifyContent:"center",
    alignItems: 'center',
    // backgroundColor: '#2f2',#0E861C33
    // backgroundColor: '#0E861C33',
},
avatarImage:{
  width: 90,
      height: 90,
      resizeMode: 'contain',
      // marginTop:40
},
image:{
  flex:1
},
bottomContainer: {
  flex:3,
  // paddingTop: 1,
  alignItems: 'center',
  // backgroundColor: '#df2',
},
itemContainer:{
  flex:1,
  flexDirection: "row",
  // backgroundColor: '#03e',
  width:"90%",
  justifyContent:"space-between",
  alignItems:"center",
  borderBottomColor:"#0E861C33",
  borderBottomWidth:1,
  paddingHorizontal:20

},
text:{
  // textAlign:'center',
  fontWeight:'bold',
  color:"#0C9121"
},
// sign:{
//   fontSize:10
// },



  contentContainer: {
      alignItems: 'center',
  },
  productsContainer:{
      flex: 1,
      flexWrap:"wrap",
      flexDirection: 'row',
      // backgroundColor:'yellow',
      justifyContent:'center'
  },
  // itemContainer:{
  //     alignItems: 'center',
  //     width:'30%',
  //     margin:4,
  //     borderRadius:20
  // },
  buttonContainer:{
      // flex:1,
      justifyContent:'center',
      // alignItems: 'center',
      paddingVertical: 20,
      flexDirection: "row",
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
      textAlign: 'center',
    },
  itemTitle:{
      textAlign:'center',
      fontWeight:'bold'
  },
  itemTextBelow:{
      marginTop:15,
  },  
  rowContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
      // paddingHorizontal: 15,
  },
  closeButton: {
      // paddingVertical: 15,
      justifyContent:'center',
      backgroundColor: '#0C9121',
      width:"40%",
      height:20,
      borderBottomRightRadius:10,
      borderTopRightRadius:10,
    },
    sellingButton: {
      // paddingVertical: 15,
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,
      justifyContent:'center',
      backgroundColor: '#fff',
      width:'40%',
      height:20,
      borderColor:'#2e78b7',
      borderWidth:1,
      // borderRadius:10
    },
    closeButtonText: {
      fontSize: 14,
      color: '#fff',
      lineHeight: 24,
      textAlign: 'center',
    },
  // text: {
  //     color: 'white',
  // },
  boldText: {
      color: 'white',
      fontWeight: 'bold'
  },
  content2Container: {
      flex: 1,
      paddingTop:10,
      marginVertical: 15,
      justifyContent: 'space-between',
      width: '100%',
  },

  text2: {
      color: '#0E861C',
      fontWeight:'bold'
  },
  itemImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      margin:10,
      borderRadius:50
  },
  picImage:{
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginLeft:10,
      borderRadius:20
    },
    id:{
      paddingHorizontal:10,
      justifyContent:"center",
      marginLeft:18,
      width:'30%',
      zIndex:2,
      top:-3
    },
  tabBarInfoContainer: {
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
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
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
  sellingButtonText: {
      fontSize: 14,
      color: '#2e78b7',
      lineHeight: 24,
      textAlign: 'center',
  },
});
