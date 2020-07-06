import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, Fragment} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Linking
} from 'react-native';

import { MonoText } from '../components/StyledText';
import TabBarImage from '../components/TabBarImage';
import { Avatar } from 'react-native-elements';
// import UserToken from '../components/UserToken';
// import AsyncStorage from '@react-native-community/async-storage';

export default function Dashboard(props) {

  const [transaction, setTransaction] = useState('');
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hold, setHold] = useState([]);
  const [menuOn, setMenuOn] = useState(true);
  const [notifyOn, setNotifyOn] = useState(true);
  const [receivedNote, setReceivedNote] = useState('');
  const [read, setRead] = useState(false);

  // const [transaction, setTransaction] = useState({ 
  //   "id":'',
  //           "amount":'',
  //           "quantity":'',
  //           "payback":'',
  //           "paybackDate":"",
  //           "method":"",
  //           // "payment_details": "{\"system\":\"Mozilla\\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/78.0.3904.97 Safari\\/537.36\",\"previous_link\":\"https:\\/\\/farmcenta.com\\/investors\\/view-details\\/410\\/investresponse\\/11565\",\"ip\":\"154.120.108.239\",\"adminstrator\":\"1\",\"confirmation_note\":\"Payment confirmed.\"}",
  //           "product":'',
  //           "return": '',
  //           "period":'',
  //           "status": "",
  //           // "user": 410,
  //           "createdAt": "",
  //           "updatedAt": ""
  // })
  const { navigation } = props;  
        const userName = navigation.getParam('name', 'NO-Username');  
        const userEmail = navigation.getParam('email', 'NO-email');  
        const userAvatar = navigation.getParam('avatar', 'NO-User');  
        const token = navigation.getParam('token', 'some default value');
        const farmProducts = navigation.getParam('farmProducts', 'default');
        const transactions = navigation.getParam('transactions', 'some default value');
        // let hold=[];
//TESTING
        // console.log(navigation.actions)
        // console.log(navigation.actions.setParams({9:'you'}))
        // console.log(navigation.addListener)
        // console.log(farmProducts.products)
        // console.log(UserToken(token))
        // await AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('avatar',userAvatar);
        AsyncStorage.setItem('user', userName);
        AsyncStorage.setItem('token', token);
        const loadFunction =()=>navigation.setParams({'Menu': toggleMenu});
        // AsyncStorage.multiSet([['tokena', token],['user', userName], ['avatar',userAvatar]]);
        const menuFly =(e)=>{
          e.preventDefault();
          setMenuOn(true);
          // navigation.setParams({'toggleMenu':menuOn});
          // console.log( navigation);
        },
         toggleMenu = ()=>{
          // {menuList?(// menuOn? setMenuOn(false):setMenuOn(true);
          setMenuOn(false)   
        //   ):null
        // }
          // navigation.setParams({'toggleMenu':menuOn})
          console.log( menuOn);
          // console.log( navigation.getParam('toggleMenu'));
        };
        
        

      const latestFarm=()=>{
        let date=[]
        farmProducts.products.map(product=>{
            date.push(product.created_at)
            date.sort()
            // console.log(date)
            // console.log(date.length)
        })
        let farmArray=[];
        farmProducts.products.map(product=>{
          if(product.created_at===date[date.length-1] ||product.created_at===date[date.length-2] || product.created_at===date[date.length-3]){
            // console.log(product.id);
            farmArray.push(product);
            setFarms(farmArray)
            // console.log(farms)
         }
      })
       } 



        // console.log(JSON.stringify(token))
        // console.log(transactions.transactions);
        // console.log(userAvatar,userEmail)
        const getUserTransaction = () => {
          setTransaction(transactions);
          fetch('https://farmcenta.com/api/v1/notification?token='+token,{
            method: 'POST',
            header: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(res => setReceivedNote(res))
          .catch(err=> {
            console.warn('issues fetching notifications '+err )
          });
          // setHolsd([])
                 if(transactions.transactions.length!=0){
                  // console.log('yes')
                  setLoading(false);
                   
                  // console.log(hold)
                  // hold=[],
                  transactions.transactions.map((transaction,i)=>{
                    // if(hold.includes(transaction)){
                      console.log(':+'+i,)
                      if(i>=transactions.transactions.length-2 && hold.length<2){
                      hold.push(transaction)
                      // console.log(hold.length,i,transactions.transactions.length)
                    }
                    // console.log(transaction.created_at);
                    });
                    // hold.sort();
                 };
         };

        //  transaction.transactions.map(transaction=>{
        //   hold.push(transaction.created_at)
      
        //   console.log(hold.sort());
        //   })

      //   const getUserTransaction =async () => {    
      //     await fetch('https://farmcenta.com/api/v1/transactions?token='+token,{
      //       method: 'POST'
      //     })
      //   //  .then(resp=>console.log(JSON.parse(resp)))
      //     .then(resp=>resp.json())
      //     // .then(resp=>resp.text())
      //     // .then(resp=>console.log(resp.json()))
      //     .then(json=>{
      //       setTransaction(json)
      //       // console.log(json)
      //       console.log(transaction)
      //       console.log(transaction.transactions[0].amount)
      //       if(transaction.transactions[0]){
      //         setLoading(false)
      //       }

      //     })
      //   //  .then(resp=>resp.json())JSON.stringify
      //   //  .then(resp=>console.log(resp.json().stringify))
      //    .catch(err=> {
      //      console.warn('Error is: '+err )
      //    })
      //  };
      // useEffect(() => {
      //   toggleMenu();
      // }, [menuOn]);

       useEffect(() => {
        getUserTransaction();
        latestFarm();
        // setHold([])
        loadFunction();
        // toggleMenu();
      }, []);

      const menuList =[
        {
          'text':'Dashboard',
          'image':require('../assets/images/layerDashboard.png')
        },
        {
          'text':' Notification',
          'image':require('../assets/images/layerNotification.png')
        },
        {
          'text':'Call',
          'image':require('../assets/images/layerCall.png')
        },
        {
          'text':'Email',
          'image':require('../assets/images/layerEmail.png')
        },
        {
          'text':'Whatsapp',
          'image':require('../assets/images/layerWhatsapp.png')
        },
        {
          'text':'Visit Website',
          'image':require('../assets/images/layerWorldwide.png')
        },
        {
          'text':'Settings',
          'image':require('../assets/images/layerSetting.png')
        }
        
      ],
      handleMenuClick=(id)=>{
        let URL = "https://www.farmcenta.com";
        console.log('you clicked'+ id)
        switch(id){
          case 0:
            setMenuOn(true);
            break;
          case 1:
            setMenuOn(true);
            // alert('you clicked coming soon '+ id+' try other menu');
            setNotifyOn(false);
            // navigation.navigate('LinksStack');
            break;
          case 2:
            URL = "tel:+2347018231992";
            openLink(URL);
            break;
            case 3:
              URL = "mailto:info@farmcenta.com?subject=Inquiry on Farm";
              openLink(URL);
              break;
            case 4:
              URL = "whatsapp://send?text=Hello Farmcenta&phone=+2347018231992";
              openLink(URL);
              break;
              case 5:
                openLink(URL)
                break;
                case 6:
                  setMenuOn(true);
            navigation.navigate('Settings');
                  break;
        }
      },
      handleNote=(id)=>{
        console.log('you clicked'+ id)
        if(read===id){
          setRead('')
        }else{setRead(id)}
        // console.log(read +' '+ id)
        // switch(id){}
      },
      openLink= (link)=>{
      Linking.openURL(link);
      setMenuOn(true);
      };


  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.imageContainer} >
            <Image
            source={
              require('../assets/images/logo.png')
            }
            style={styles.logoImage}
          />
         
          </View>
          <View style={styles.id}>
           {/* <Image source={{uri:userAvatar}} style={styles.picImage}/>
           <Text>{userName}</Text> */}
           </View>
           {notifyOn?
            <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.content1Container}>
                <View style={styles.rowHeadContainer} >
                  <View style={styles.colHeadings}>
                    <Text style={styles.colText}>Total</Text>
                    <Text style={styles.colText}>Investment:</Text>
                  </View>
                  <View style={styles.colHeadings2}>
                    <Text style={styles.colText2}>Total</Text>
                    <Text style={styles.colText2}>Returns:</Text>
                  </View>
                  <View style={styles.colHeadings}>
                   <Text style={styles.colText3}>Total</Text>
                   <Text style={styles.colText3}>Farm Units:</Text>
                  </View>
                </View>
                <View style={styles.rowContent} >
                {/* {loading?null: <Fragment> */}
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text1,...styles.boldText2}}>N{loading?0:transaction.transactions[0].amount}</Text>
                  {/* <Text style={styles.text}>{transaction.transactions[0].product}</Text> */}
                  </View>
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text,...styles.boldText2}}>N{loading?0:transaction.transactions[0].payback}</Text>
                  {/* <Text style={styles.text}>{transaction.transactions[0].return}</Text> */}
                  </View>
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text3,...styles.boldText2}}>{loading?0:transaction.transactions[0].quantity}</Text>
                  </View>
                {/* </Fragment>
                } */}
                </View>
                {/* <View style={styles.rowContainer} >
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                <Text style={styles.text}>See More</Text>
                </View> */}
                <View style={styles.rowHeadContainer} >
                <View style={styles.rowHead}>
                <Text style={styles.rowText}>Next Payout Date:</Text>
                {loading?null:<Text style={styles.boldText}>{transaction.transactions[0].payback_date}</Text>}
                </View>
                <View style={styles.rowHead}>
                  <Text style={styles.rowText}>Amount:</Text>
                  {loading?null:<Text style={styles.boldText}>N{transaction.transactions[0].amount}</Text>}
                  </View>
                </View>
            </View>
            <View style={styles.content2Container}>
            <View style={styles.latestTrans} >
                <Text style={{...styles.text2,...styles.boldText2}}>Lastest Transactions</Text>
                </View>
                {/* <View style={styles.rowContainer} >
                <Text style={{...styles.text2,...styles.boldText2}}>Farm Units</Text>
                <Text style={{...styles.text2,...styles.boldText2}}>Payout Dates</Text>
                <Text style={{...styles.text2,...styles.boldText2}}>Amount</Text>
                <Text style={{...styles.text2,...styles.boldText2}}>Status</Text>
                </View>
                <View style={styles.rowContainerContent} >
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].quantity}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].payback_date}</Text>
                <Text style={styles.text2}>{loading?0:'#'+transaction.transactions[0].amount}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[0].status}</Text>
                </View> */}


{/* <View style={styles.rowContainer} >
  <View style={styles.content}>
  <Text style={{...styles.text2,...styles.boldText2}}>Farm Units</Text>
              <Text style={{...styles.text2,...styles.textMagin}}>{loading?0:transaction.transactions[0].quantity}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[1].quantity}</Text>
  </View>
  <View style={styles.content}>
  <Text style={{...styles.text2,...styles.boldText2}}>Payout Dates</Text>
                <Text style={{...styles.text2,...styles.textMagin}}>{loading?0:transaction.transactions[0].payback_date}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[1].payback_date}</Text>
  </View>
  <View style={styles.content}>
  <Text style={{...styles.text2,...styles.boldText2}}>Amount</Text>
                <Text style={{...styles.text2,...styles.textMagin}}>{loading?0:'#'+transaction.transactions[0].amount}</Text>
                <Text style={styles.text2}>{loading?0:'#'+transaction.transactions[1].amount}</Text>
  </View>
  <View style={styles.content}>
  <Text style={{...styles.text2,...styles.boldText2}}>Status</Text>
                <Text style={{...styles.text2,...styles.textMagin}}>{loading?0:transaction.transactions[0].status}</Text>
                <Text style={styles.text2}>{loading?0:transaction.transactions[1].status}</Text>
  </View>
                </View> */}



                {/* <View> */}
                <View style={styles.contentHead}>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text2,...styles.boldText2}}>Farm Units</Text>
  </View>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text2,...styles.boldText2}}>Payout Dates</Text>
  </View>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text2,...styles.boldText2}}>Amount</Text>
  </View>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text2,...styles.boldText2}}>Status</Text>
  </View>
  </View>
  {/* {  loading? <Text>No transaction yet</Text>:hold.map((item)=>{
    console.log(item)
    })} */}
    {  loading? <Text>No transaction yet</Text>:hold.map((item)=><View key={item.id} style={styles.contentHead}>
  <View style={styles.content}>
              <Text style={{...styles.text2,...styles.textMagin}}>{item.quantity}</Text>
  </View>
  
  <View style={styles.content}>
                <Text style={{...styles.text2,...styles.textMagin}}>{item.payback_date}</Text>
  </View>
  <View style={styles.content}>
                <Text style={{...styles.text2,...styles.textMagin}}>{'N'+item.amount}</Text>
  </View>
  <View style={styles.content}>
                <Text style={{...styles.text2,...styles.textMagin}}>{item.status}</Text>
  </View>
  </View>)}
  
                {/* </View> */}
                {/* <View style={styles.rowContainer} >
                <Text style={styles.text2}>20 Carbon</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                <Text style={styles.text2}>#3,000,000</Text>
                <Text style={styles.text2}>Returning</Text>
                </View> */}
               
            </View>
            <View style={styles.moreContainer} >
                <TouchableOpacity onPress={()=>navigation.navigate('Transaction')}>
                  <Text style={styles.text2}> See More ></Text>
                </TouchableOpacity>
                </View>
            <View style={styles.content3Container}>
            <View style={styles.lastFarmHead} >
                <Text style={{...styles.text2,...styles.boldText2}}>Lastest Farms</Text>
                </View>
                <View style={styles.row3Container} >
                {/* {farms.map(farm =>console.log(farm.location))} */}
                {/* {Object.values(farms).map(value =>console.log(value))} */}
                {farms.map(farm =><TouchableOpacity  onPress={()=>props.navigation.navigate('Store')} key={farm.id}>
                  <Image
               
            source={
              {uri:"https://farmcenta.com"+farm.photo}
              // require('../assets/images/cattle-farm3x.png')
            }
            style={styles.itemImage}
          />
          </TouchableOpacity>)}
          {/* <Image
            source={
              require('../assets/images/ginger3x.png')
            }
            style={styles.logoImage}
          />
          <Image
            source={
              require('../assets/images/ginger3x.png')
            }
            style={styles.logoImage}
          /> */}
                </View>
            </View>
            </ScrollView>:
            <View style={styles.contentContainer} >
              {true? <TouchableOpacity style={styles.goBackButton}  onPress={()=>setNotifyOn(true)}><Text>Go back</Text></TouchableOpacity>:null}
              <View style={styles.noticeContainer}>
              <View style={styles.noteHead} >
                <Text style={{...styles.noteHeadText,...styles.text}}>Notification</Text>
                </View>
              {true?<View style={styles.noteBody}>
              {/* <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.text}>Cattle Visitation Notice</Text><Text style={styles.text}>></Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.itemContainer}>
                <Text style={styles.text}>Farmcenta in Dubai Expos</Text><Text style={styles.text}>></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Date of Birth:</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Gender:</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>State of Origin:</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Bank</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Account Number:</Text><Text style={styles.text1}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Other Bank Details:</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              <TouchableOpacity style={styles.itemContainer}><Text style={styles.text}>Next of Kin Name:</Text><Text style={{...styles.text1,...styles.sign}}>></Text></TouchableOpacity>
              */}
              { receivedNote.messages!=''?receivedNote.messages.map((list,i)=>
        <TouchableOpacity key={i} onPress={handleNote.bind(list,i)}  style={styles.noteContainer}>
           <View style={styles.noteTitle}>
           <Text style={styles.text}>{list.subject}</Text>
           <Text style={{...styles.text1,...styles.sign}}>
             {/* {console.log(list.content)}   */}
             {read===i? <Image source={require('../assets/images/a-down.png')}/>:<Image source={require('../assets/images/a-close.png')}/>}
           </Text>
             </View>
             <View style={styles.noteContent}>
             {read===i?<Text style={styles.text}>{list.content}</Text>:null}
             </View>
           </TouchableOpacity>
        ):null}
            </View>:null}
           
            </View>
                </View>
          }
    
        </View>
    

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View> */}
     
{menuOn?null:
  <TouchableOpacity style={styles.menuBackground} onPress={menuFly}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHead}>
        <View style={styles.menuId}>
        <Image source={{uri:userAvatar}} style={styles.picImage}/>
           <Text>{userName}</Text>
           </View>
           {/* <TouchableOpacity  onPress={()=>navigation.navigate('Auth')} style={styles.signOut}>
           <Image source={require('../assets/images/dashboard.svg')} style={styles.picImage}/>
           <Text>Log Off</Text>
           </TouchableOpacity> */}
        </View>
        <View style={styles.menuDiv}></View>
        <View style={styles.menu}>
           { menuList?menuList.map((list,i)=>
        // {console.log(list)}
        <TouchableOpacity key={i} onPress={handleMenuClick.bind(list,i)} style={styles.menuItem}>
           <Image source={list.image} style={styles.picImage}/>
           <Text style={styles.menuText}>{list.text}</Text>
           </TouchableOpacity>
        ):null}
        <TouchableOpacity  onPress={()=>navigation.navigate('Auth')} style={styles.signOut}>
           <Image source={require('../assets/images/dashboard.svg')} style={styles.picImage}/>
           <Text style={styles.menuText}>Log Off</Text>
           </TouchableOpacity>

        </View>
      </View>
      </TouchableOpacity>
}
      
    </View>
  );
}

Dashboard.navigationOptions = {
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

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
      flex:1,
        // alignItems:'center',
      },
      contentContainer:{
        flex:1,
      alignItems:'center',
        // backgroundColor: '#fe2',
        // width:'90%'
        // paddingBottom:30
    },
    menuContainer:{
      zIndex:2,
      backgroundColor: '#eee',
      height:"90%",
      width:"65%",
      bottom:-72
    },
    menuBackground:{
      // flex:1,
      // paddingTop:'30%',
      height:"100%",
      width:"100%",
      zIndex:1,
      position:"absolute",
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
      // backgroundColor: 'transparent'
      // bottom:250,
      // backgroundColor: '#eee',
    },
    menuHead:{
      flex:0.4,
      backgroundColor: '#eed',
      flexDirection:"row"
    },
    signOut:{
      // marginHorizontal:0
      // backgroundColor: '#f30',
      alignItems:'center',
        justifyContent:'center',
        width:'50%'
    },
    menuDiv:{
      width:"80%",
      borderBottomWidth:2,
      borderBottomColor:"#0E861C33",
    },
    menu:{
      flex:2,
      // backgroundColor: '#2e3',
      backgroundColor: '#eed'
    },
    menuId:{
      flexDirection:"row",
        // padding:10,
        marginVertical:25,
        marginLeft:35,
        // alignSelf:"center",
        alignItems:'center',
        justifyContent:'space-between',
        width:'42%'
    },
    menuItem:{
      flexDirection:"row",
        // backgroundColor:'blue',
        padding:10,
        // marginBottom:2,
        alignItems:'center',
        justifyContent:'space-between',
        width:'50%'
    },
  imageContainer:{
    // flex:1,
    paddingTop:6,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  content1Container:{
      flex:1,
      justifyContent:'space-around',
    // alignItems:'center',
    backgroundColor:"#0E861C",
      width:'95%',
      borderRadius:10,
      paddingVertical:4,
  },
  rowHeadContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    backgroundColor:"#0E861C",
    marginHorizontal:2
    // flex:1
  },
  rowHead:{
    flexDirection:"row",
    height:35,
    alignItems:"center"
  },
  rowContent:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:10,
    // backgroundColor: '#1BBC2E',
    backgroundColor: '#eee',
    flex:1,
    paddingTop:2
  },
  moreContainer:{
    flexDirection:"row",
    width:"100%",
    justifyContent:'space-between',
    paddingHorizontal:15,
    justifyContent:'flex-end',
    // backgroundColor: '#1BBC2E',
  },
  contentHead:{
    flex:1,
    flexDirection:"row",
    // justifyContent:'space-between',
    // paddingHorizontal:2,
  },
  contentTitle:{
    // flexDirection:"row",
    justifyContent:'center',
    flex:0.5,
     alignItems:"center",
    //  backgroundColor: '#777',
    // marginVertical:5
  },
  content:{
    // flexDirection:"row",
    justifyContent:'center',
    flex:0.3,
     alignItems:"center",
    //  backgroundColor: 'yellow',
     top:-20
    // paddingHorizontal:5,
    // paddingLeft:30,
    // marginLeft:30
    // marginVertical:5
  },
  lastFarmHead:{
    flexDirection:"row",
    justifyContent:"center",
    paddingHorizontal:15
  },
  colHeadings:{
    flex:1,
    // justifyContent: "center",
    // alignItems: 'center',
    // alignContent:'center',
    // alignSelf: 'center'
  },
  colHeadings2:{
    flex:1.4,
    borderLeftWidth: 1,
    borderRightWidth:1,
    borderColor: "#aaa",
  },
  text: {
        color: "#0E861C",
        // backgroundColor:"#0E861C",
        textAlign:"center",
      },
      text1: {
        color: "#0E861C",
        textAlign:"left",
      },
      text3: {
        color: "#0E861C",
        textAlign:"right",
      },
      rowText: {
        color: "#aaa",
        // textAlign:"center"
      },
      boldText2:{
        fontWeight:'bold'
      },
      textMagin:{
        marginVertical:1
      },
  colText: {
    color: 'white',
  },
  colText2: {
    color: 'white',
    textAlign:"center"
  },
  colText3: {
    color: 'white',
    textAlign:"right"
  },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    content2Container:{
        flex:1,
        paddingVertical:10,
        marginTop:15,
        // marginVertical:15,
        justifyContent:'space-between',
    //   alignItems:'center',
        backgroundColor: '#eee',
        width:'95%',
        borderRadius:10,
        // height:"20%"
    },
    latestTrans:{
      // marginBottom:1,
      marginLeft:10,
      // backgroundColor: 'blue',
    },
    // row2Container:{
    //     flexDirection:"row",
    //     justifyContent:'space-between',
    //     paddingHorizontal:15,
    //   },
    text2: {
        color: '#0E861C'
      },
  content3Container:{
    flex:1,
    // flexDirection:'row',
    // paddingTop:20,
    marginTop:5,
    marginBottom:20,
    // marginVertical:10,
    justifyContent:'space-between',
//   alignItems:'center',
    // backgroundColor: '#bec',
    width:'95%',
    borderRadius:10,
    // height:"20%"
},
row3Container:{
    flexDirection:"row",
    justifyContent:'space-between',
  },
  // logoImage: {
  //       width: 120,
  //       height: 80,
  //       resizeMode: 'contain',
  //     },
      logoImage: {
        width: 180,
        height: 50,
        resizeMode: 'contain',
        marginTop:40
    },
      itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        // margin:10,
        borderRadius:50
    },
      id:{
        // flexDirection:"row",
        // backgroundColor:'blue',
        paddingHorizontal:10,
        marginBottom:2,
        // alignItems:'center',
        // justifyContent:'flex-end'
        width:'30%'
      },
      picImage:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft:10,
        borderRadius:20
      },
      menuText:{
        // flex:1,
        width:90,
        textAlign:"left",
        marginLeft:10
      },
      noticeContainer:{
        width:'90%',
        marginTop:40,
        backgroundColor:"#0E861C33",
        height:"80%",
        justifyContent:"center",
        alignContent:'center',
        borderRadius:4
      },
      noteBody:{
        flex:5,
      },
      noteHead:{
        flex:1,
        // justifyContent:"center"
      },
      itemContainer:{
        flex:1,
        flexDirection: "row",
        // backgroundColor: '#03e',
        // width:"90%",
        justifyContent:"space-between",
        // alignItems:"center",
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
        paddingHorizontal:20
      
      },
      noteContainer:{
        flex:0.3,
        // flexDirection: "row",
        // backgroundColor: '#03e',
        // width:"90%",
        // justifyContent:"center",
        // alignItems:"center",
        paddingVertical:3,
        borderTopColor:"#0E861C33",
        borderTopWidth:1,
        paddingHorizontal:20
      },
      noteTitle:{
        flex:1,
        flexDirection: "row",
        // backgroundColor: '#03e',
        // width:"90%",
        justifyContent:"space-between",
        alignItems:"center",
        // borderBottomColor:"#0E861C33",
        // borderBottomWidth:1,
        // paddingHorizontal:20
      
      },
      noteContent:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginVertical:5
      },
      noteHeadText:{
        textAlign:'center',
        fontWeight:"bold",
        fontSize:20
      },
      goBackButton:{
        // backgroundColor:'blue',
        justifyContent:"flex-end",
        height:30,
        marginLeft:270
      },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
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
