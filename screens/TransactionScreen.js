import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  View,
} from 'react-native';

export default function TransactionScreen() {

  const [trans, setTrans] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [loading, setLoading] = useState(true);
  let sum=0;

  const fetchTrans =async (value) => {  
    await fetch('https://centavestng.com/api/v1/transactions?token='+value,{
      // await fetch('https://farmcenta.com/api/v1/transactions?token='+value,{
            method: 'POST'
          })  
   .then(resp=>resp.json())
   .then(json =>{
    setTrans(json);
    setLoading(false);
   } )
   .catch(err=> {
     console.log(err);
   });
 };

  const retrieveUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        fetchTrans(value)  
      };
      const name = await AsyncStorage.getItem("user"),
  avatar= await AsyncStorage.getItem("avatar");
  if (avatar !== null) {
    setUserInfo([name, avatar])
  }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    retrieveUserInfo();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.imageContainer} >
            <Image
            source={
              // require('../assets/images/centavestLogoMd.png')
              require('../assets/images/centavest-logo-sm.png')
            }
            style={styles.logoImage}
          />
            </View>
           <View style={styles.id}>
           </View>
            <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
              <View style={styles.rowHeadContainer} >
                <Text style={{...styles.textHead, ...styles.textSize}}>Transactions</Text>
                </View>
                {/* <View style={styles.rowHeadContainer} >
                <Text style={{...styles.textHead, ...styles.textSize}}>buttons</Text>
                </View> */}
            <View style={styles.content2Container}>
                <View style={styles.rowTitleContainer} >
                  <View style={styles.Title}>
                  <Text style={styles.textTitle}>Investment</Text>
                  </View >
                  <View style={styles.TitleB}>
                    <Text style={styles.textTitle}>Payout Date</Text>
                  </View>
                  <View style={styles.Title}>
                    <Text style={{...styles.textTitle, marginLeft:10}}>Amount</Text>
                  </View>
                  <View style={styles.Title}>
                    <Text style={{...styles.textTitle, marginLeft:30}}>Status</Text>
                  </View>
                
            
                
            </View>
            <View style={styles.transContent}>
              {/* </View> */}
                 {loading ? 
               
                null :
                trans.transactions.map(item=><View key={item.id} style={{...styles.rowMapContainer,backgroundColor: item.status==='running'?'#F7FAE9':'#FCECED',}} >
                <Text style={{fontSize:12, left:-25,color: item.status==='running'? "#7B9115":'#E8505B',}}>{item.quantity}</Text>
                <Text style={{fontSize:12, color: item.status==='running'? "#7B9115":'#E8505B',}}>{item.payback_date}</Text>
                <Text style={{fontSize:12, left:-15,color: item.status==='running'? "#7B9115":'#E8505B',}}>N{item.amount}</Text>
                <Text style={{fontSize:12, color: item.status==='running'? "#7B9115":'#E8505B',}}>{item.status}</Text>
                </View>)}
                </View>
            </View>
          
            </ScrollView>
            
        </View>
    </View>
  );
}

TransactionScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
      flex:1,
      },
      contentContainer:{
        flex:1,
      alignItems:'center'
    },
  imageContainer:{
    // paddingTop:1,
    // marginTop:20,
    marginVertical:15,
    alignItems:'center',
  },
  transContent:{
    flex:1,
    // backgroundColor:'#e1c'
  },
  rowContainer:{
    flex:0.5,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
  },
  rowTitleContainer:{
    flex:0.1,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    // paddingHorizontal:5,
  },
  rowHeadContainer:{
    flexDirection:"row",
    justifyContent:'center',
    width:'100%',
    // paddingHorizontal:15,
    borderBottomColor:"#eee",
    borderBottomWidth:2
  },
  rowMapContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginVertical:3,
    maxHeight:40,
    paddingLeft:50,
    backgroundColor:'yellow',
    borderRadius:8
  },
  textcontent:{
    flex:1,
    alignSelf:"center"
  },
  text: {
        color: 'white',
      },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    content2Container:{
        flex:1,
        marginVertical:2,
        justifyContent:'space-between',
        // backgroundColor: '#eee',
        width:'90%',
        borderRadius:10,
    },
    // text2: {
    //     // color: "#7B9115"
    //     // color: '#0E861C'"#ADCF29"
    //   },
      textHead: {
        fontWeight:"bold",
        color: "#7B9115",
      },
      textSize: {
        fontSize:20,
        // textAlign:"center"
      },
      Title:{
        flex:1,
        marginRight:5,
      },
      TitleB:{
        flex:1,
        // marginRight:2,
      },
      textTitle: {
        fontWeight:"bold",
        fontSize:12,
        left:6
        // color: "#7B9115",
      },
  content3Container:{
    flex:1,
    marginVertical:2,
    justifyContent:'space-between',
    width:'90%',
    borderRadius:10,
},
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  logoImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginTop:40
},

id:{
  paddingHorizontal:10,
  justifyContent:"center",
  marginLeft:18,
  width:'30%',
  zIndex:2,
  top:-50
},
picImage:{
  width: 30,
  height: 30,
  resizeMode: 'contain',
  marginLeft:10,
  borderRadius:20
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
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
