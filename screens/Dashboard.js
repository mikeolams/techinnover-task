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


export default function Dashboard(props) {

  const [transaction, setTransaction] = useState('');
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hold, setHold] = useState([]);
  const [menuOn, setMenuOn] = useState(true);
  const [notifyOn, setNotifyOn] = useState(true);
  const [receivedNote, setReceivedNote] = useState('');
  const [read, setRead] = useState(false);

  const { navigation } = props;  
        const userName = navigation.getParam('name', 'NO-Username');  
        const userEmail = navigation.getParam('email', 'NO-email');  
        const userAvatar = navigation.getParam('avatar', 'NO-User');  
        const token = navigation.getParam('token', 'some default value');
        const farmProducts = navigation.getParam('farmProducts', 'default');
        const transactions = navigation.getParam('transactions', 'some default value');

        AsyncStorage.setItem('avatar',userAvatar);
        AsyncStorage.setItem('user', userName);
        AsyncStorage.setItem('token', token);
        const loadFunction =()=>navigation.setParams({'Menu': toggleMenu});
       
        const menuFly =(e)=>{
          e.preventDefault();
          setMenuOn(true);
        },
         toggleMenu = ()=>{
          setMenuOn(false)   
       
          // console.log( menuOn);
        };
        
        

      const latestFarm=()=>{
        let date=[]
        farmProducts.products.map(product=>{
            date.push(product.created_at);
            date.sort();
        })
        let farmArray=[];
        farmProducts.products.map(product=>{
          if(product.created_at===date[date.length-1] ||product.created_at===date[date.length-2] || product.created_at===date[date.length-3]){
            farmArray.push(product);
            setFarms(farmArray)
         }
      })
       } 


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
                 if(transactions.transactions.length!=0){
                  setLoading(false);
                   
                  
                  transactions.transactions.map((transaction,i)=>{
                      if(i>=transactions.transactions.length-2 && hold.length<2){
                      hold.push(transaction)
                    }
                    });
                 };
         };

       
       useEffect(() => {
        getUserTransaction();
        latestFarm();
        loadFunction();
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
            setNotifyOn(false);
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
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text1,...styles.boldText2}}>N{loading?0:transaction.transactions[0].amount}</Text>
                  </View>
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text,...styles.boldText2}}>N{loading?0:transaction.transactions[0].payback}</Text>
                 
                  </View>
                  <View style={{...styles.colHeadings, paddingTop:6}}>
                  <Text style={{...styles.text3,...styles.boldText2}}>{loading?0:transaction.transactions[0].quantity}</Text>
                  </View>
                </View>
              
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
                {farms.map(farm =><TouchableOpacity  onPress={()=>props.navigation.navigate('Store')} key={farm.id}>
                  <Image
               
            source={
              {uri:"https://farmcenta.com"+farm.photo}
            }
            style={styles.itemImage}
          />
          </TouchableOpacity>)}
        
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
              
              { receivedNote.messages!=''?receivedNote.messages.map((list,i)=>
        <TouchableOpacity key={i} onPress={handleNote.bind(list,i)}  style={styles.noteContainer}>
           <View style={styles.noteTitle}>
           <Text style={styles.text}>{list.subject}</Text>
           <Text style={{...styles.text1,...styles.sign}}>
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
     
{menuOn?null:
  <TouchableOpacity style={styles.menuBackground} onPress={menuFly}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHead}>
        <View style={styles.menuId}>
        <Image source={{uri:userAvatar}} style={styles.picImage}/>
           <Text>{userName}</Text>
           </View>
           
        </View>
        <View style={styles.menuDiv}></View>
        <View style={styles.menu}>
           { menuList?menuList.map((list,i)=>
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
      alignItems:'center',
    },
    menuContainer:{
      zIndex:2,
      backgroundColor: '#eee',
      height:"90%",
      width:"65%",
      bottom:-72
    },
    menuBackground:{
      height:"100%",
      width:"100%",
      zIndex:1,
      position:"absolute",
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    menuHead:{
      flex:0.4,
      backgroundColor: '#eed',
      flexDirection:"row"
    },
    signOut:{
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
      backgroundColor: '#eed'
    },
    menuId:{
      flexDirection:"row",
        marginVertical:25,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'space-between',
        width:'42%'
    },
    menuItem:{
      flexDirection:"row",
        padding:10,
        alignItems:'center',
        justifyContent:'space-between',
        width:'50%'
    },
  imageContainer:{
    paddingTop:6,
    alignItems:'center',
  },
  content1Container:{
      flex:1,
      justifyContent:'space-around',
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
  },
  contentHead:{
    flex:1,
    flexDirection:"row",
  },
  contentTitle:{
    justifyContent:'center',
    flex:0.5,
     alignItems:"center",
  },
  content:{
    justifyContent:'center',
    flex:0.3,
     alignItems:"center",
     top:-20
  },
  lastFarmHead:{
    flexDirection:"row",
    justifyContent:"center",
    paddingHorizontal:15
  },
  colHeadings:{
    flex:1,
  },
  colHeadings2:{
    flex:1.4,
    borderLeftWidth: 1,
    borderRightWidth:1,
    borderColor: "#aaa",
  },
  text: {
        color: "#0E861C",
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
      marginLeft:10,
    },
    text2: {
        color: '#0E861C'
      },
  content3Container:{
    flex:1,
    marginTop:5,
    marginBottom:20,
    justifyContent:'space-between',
    width:'95%',
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
      itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius:50
    },
      id:{
        paddingHorizontal:10,
        marginBottom:2,
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
      },
      itemContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-between",
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
        paddingHorizontal:20
      
      },
      noteContainer:{
        flex:0.3,
        paddingVertical:3,
        borderTopColor:"#0E861C33",
        borderTopWidth:1,
        paddingHorizontal:20
      },
      noteTitle:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
      
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
        justifyContent:"flex-end",
        height:30,
        marginLeft:270
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
