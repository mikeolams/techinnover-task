import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

export default function WalletScreen(props) {

  const [wallets, setWallets] = useState('');
  const [userInfo, setUserInfo] = useState('');
  let sum=0;

  const fetchWallet =async (value) => {  
    await fetch('https://centavestng.com/api/v1/wallet?token='+value,{
            method: 'POST'
          })  
   .then(resp=>resp.json())
   .then(json =>{
    setWallets(json);
   } )
   .catch(err=> {
     console.log(err);
   });
 };

  const retrieveUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        fetchWallet(value) 
      };
      const name = await AsyncStorage.getItem("user"),
  avatar= await AsyncStorage.getItem("avatar");
  if (avatar !== null) {
    setUserInfo([name, avatar])
    console.log(userInfo)

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
        <View style={styles.topContainer}>
            <View style={styles.imageContainer} >
            <Image
            source={
              require('../assets/images/centavestLogoMd.png')
            }
            style={styles.logoImage}
          />
            </View>
            <View style={styles.id}>
           </View>
           </View>
           <View style={styles.walletDashboard}>
                <View style={styles.rowContainer} >
                <Text style={styles.text}>Wallet Ballance</Text>
                </View>
                {/* (wallets.error || wallets.wallet.length === 0) */}
                <View style={styles.rowContainer} >
                {wallets ==='' || (wallets.error || wallets.wallet.length === 0)?<Text>Nil{console.log(wallets)}</Text>:<Text style={styles.balanceText}>N{
                wallets.wallet.map((item,id)=>{
                  sum+=item.amount;
                  // console.log(wallets)
                  if (wallets.wallet.length===id+1){return sum}
                })
                }</Text>}
                </View>
            </View>
            <View style={styles.contentContainer}>
            <View style={styles.content2Container}>
            <View style={styles.walletHeader} >
              <Text style={styles.walletHeaderText}>Wallet Transactions</Text>
              </View>
              <View style={styles.walletContainer} >
              <View style={styles.titleContainer} >
              <Text style={{...styles.text2,color:"#000",fontWeight:'bold'}}>Amount</Text>
              <Text style={{...styles.text2,color:"#000",fontWeight:'bold'}}>Dates</Text>
              <Text style={{...styles.text2,color:"#000",fontWeight:'bold'}}>Method</Text>
              <Text style={{...styles.text2,color:"#000",fontWeight:'bold'}}>Status</Text>
              </View>
                <View style={styles.walletContent}>
                {wallets ==='' || (wallets.error || wallets.wallet.length === 0)? null 
              :
              <ScrollView style={styles.container}>
            {/* {console.log(wallets.error)} */}
              {
              wallets.wallet.map((item)=>
       <View key={item.id} style={styles.walletItems} >
         <View style={styles.col}><Text style={styles.text2}>N{item.amount}</Text></View>
              <View style={styles.col}><Text style={styles.text2}>{item.created_at.split(' ')[0]}</Text></View>
         <View style={styles.col}><Text style={styles.text2}>{item.method}</Text></View>
         <View style={{...styles.col}}><Text style={styles.text2}>{item.amount < 0?'(Dr)':'(Cr)'}</Text></View>
       
       
       </View>
     )
     }
               </ScrollView>
              }
                </View>

              </View>
              
            
            </View>
            
            </View>
    
    </View>
  );
}

WalletScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
      flex:0.3,
      marginBottom:7
      },
  walletDashboard:{
          flex:0.2,
          justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
          // backgroundColor:"#0E861C","#ADCF29",
          backgroundColor:"#ADCF29",
          width:'90%',
          borderRadius:10,
          paddingVertical:20
      },
  contentContainer:{
        flex:1,
      alignItems:'center',
    },
    content2Container:{
      flex:1,
      marginTop:10,
      justifyContent:'space-between',
      width:'94%',
      borderRadius:10,
  },
  walletHeader:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:3,
    borderBottomColor:"#F7FAE9",
    marginBottom:10
    // borderBottomColor:"#0E861C33","#F7FAE9"
  },
  walletContainer:{
    flex:1,
  },
  titleContainer:{
    flex:0.08,
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
  },
  
  walletContent:{
    flex:1,
  },
      rowContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:15,
      },
      walletItems:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:"center",
        // backgroundColor:"#0E861C33",'#F7FAE9'
        backgroundColor:"#F7FAE9",
        margin:4
      },
      col:{
        flex:1,
        paddingHorizontal:1,
        height:30,
        justifyContent:"center"
      },
  imageContainer:{
    paddingTop:1,
    alignItems:'center',
  },  
  text: {
        color: '#7B9115',
        fontWeight:'700'
        // color: 'white','#7B9115'
      },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    balanceText: {
      color: 'white',
      fontWeight:'bold',
      fontSize:30 
      },
    text2: {
        color: "#7B9115",
        // color: '#0E861C',"#7B9115"
        textAlign:"center"
      },
      id:{
        paddingHorizontal:20,
        width:'30%'
      },
      picImage:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft:20,
        borderRadius:20
      },
      walletHeaderText: {
        // color: '#06360B'
        color: '#7B9115',
        // color: '#0E861C',#7B9115
        fontWeight:'bold',
        fontSize:18
      },
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  logoImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginTop:60
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
