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
import FormButton from '../components/FormButton';


export default function Dashboard(props) {

  const [transaction, setTransaction] = useState('');
  const [farms, setFarms] = useState([]);
  const [random, setRandom] = useState([1,2]);
  const [loading, setLoading] = useState(true);
  const [hold, setHold] = useState([]);
  const [menuOn, setMenuOn] = useState(true);
  const [notifyOn, setNotifyOn] = useState(true);
  const [receivedNote, setReceivedNote] = useState('');
  const [read, setRead] = useState(false);

  const { navigation } = props;  
        const userName = navigation.getParam('name', 'NO-Username');  
        const userEmail = navigation.getParam('email', 'NO-email');  
        // const userSetting = navigation.getParam('setting', 'NO-set');  
        const userAvatar = navigation.getParam('avatar', 'NO-User');  
        const token = navigation.getParam('token', 'some default value');
        const farmProducts = navigation.getParam('farmProducts', 'default');
        const transactions = navigation.getParam('transactions', 'some default value');

        AsyncStorage.setItem('avatar',userAvatar);
        AsyncStorage.setItem('user', userName);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('setting', 'false');

        const load = ()=> AsyncStorage.setItem('setting', 'true')

        const loadFunction =()=>navigation.setParams({'Menu': toggleMenu});
       
        const menuFly =(e)=>{
          e.preventDefault();
          setMenuOn(true);
        },
         toggleMenu = ()=>{
          setMenuOn(false)
          setNotifyOn(true)
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
          fetch('https://centavestng.com/api/v1/notification?token='+token,{
          // fetch('https://farmcenta.com/api/v1/notification?token='+token,{
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
          'image':require('../assets/images/dashboard.png')
        },
        {
          'text':'Settings',
          'image':require('../assets/images/group-setting.png')
        },
        {
          'text':' Notification',
          'image':require('../assets/images/notification.png')
        },
        {
          'text':'Call',
          'image':require('../assets/images/call-icon.png')
        },
        {
          'text':'Email',
          'image':require('../assets/images/email.png')
        },
        {
          'text':'Whatsapp',
          'image':require('../assets/images/whatsapp.png')
        },
        {
          'text':'Visit Website',
          'image':require('../assets/images/web-icon.png')
        }
        
      ],
      handleMenuClick=(id)=>{
        let URL = "https://www.centavestng.com";
        // let URL = "https://www.farmcenta.comhttps://centavestng.com";
        console.log('you clicked'+ id)
        switch(id){
          case 0:
            setMenuOn(true);
            break;
          case 1:
              setMenuOn(true);
              // navigation.state.routes[0].params.Page();
              // console.log(navigation.state.params)
              load();
        navigation.navigate('Settings', { 'screenToggle':'true'
          // AsyncStorage.setItem('setting', userSetting);
          // "setting": true
          // navigation.state.routes[0].params.Page()
        });
              break;
          case 2:
            setMenuOn(true);
            setNotifyOn(false);
            break;
          case 3:
            URL = "tel:+2347018231992";
            openLink(URL);
            break;
            case 4:
              URL = "mailto:info@centavestng.com?subject=Inquiry on Farm";
              // URL = "mailto:info@farmcenta.com?subject=Inquiry on Farm";
              openLink(URL);
              break;
            case 5:
              URL = "whatsapp://send?text=Hello centavestng&phone=+2347018231992";
              // URL = "whatsapp://send?text=Hello Farmcenta&phone=+2347018231992";
              openLink(URL);
              break;
              case 6:
                openLink(URL)
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
              // require('../assets/images/centavestLogoMd.png')centavest-logo-sm.png
              require('../assets/images/centavest-logo-sm.png')
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
                   <Text style={styles.colText2}>Total</Text>
                   <Text style={styles.colText2}>Units:</Text>
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
            <View style={styles.content2MainContainer}>
            <View style={styles.latestTrans} >
                <Text style={{...styles.latestTransText2,...styles.boldText2}}>Lastest Transactions</Text>
                </View>

                {/* <View style={styles.content2Container}>
                <View style={styles.contentHead}>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text21,...styles.boldText2}}>Amount</Text>
  </View>

  <View style={styles.contentTitle}>
  <Text style={{...styles.text21,...styles.boldText2}}>Units</Text>
  </View>
  <View style={styles.contentTitle}>
  <Text style={{...styles.text2,...styles.boldText2}}>Status</Text>
  </View>
  </View>

    {  loading? <Text>No transaction yet</Text>:hold.map((item)=><View key={item.id} style={styles.contentHead}>
  <View style={styles.content}>
              <Text style={{...styles.text2,...styles.textUnitContentA,...styles.textMagin,...styles.boldText2,...styles.textSizeM}}>{'N'+item.amount}</Text>
  </View>
  
  <View style={styles.content}>
                <Text style={{...styles.text2,...styles.textUnitContent,...styles.textMagin,...styles.textSizeM}}>{item.quantity}</Text>
                <View style={styles.subContent}>
                <Text style={{...styles.text2,...styles.textSizeS,...styles.boldText2}}>Payout Dates: </Text>
                <Text style={{...styles.text2, ...styles.textSizeS}}>{item.payback_date}</Text>
  </View>
  </View>
  <View style={styles.content}>
                <Text style={{...styles.text2,...styles.textMagin1}}>{item.status}</Text>
  </View>
  </View>)}  
  </View>  */}

{/* {  loading? <Text>No transaction yet</Text>:hold.map((item)=>console.log(item) )} */}
{  loading? <Text>No transaction yet</Text>:hold.map((item)=>
<View key={item.id} style={{...styles.latestTransContainer, backgroundColor: item.status==='running'?'#F7FAE9':'#FCECED',}}>
{/* {item.status==='running'? :} */}
                <View style={styles.contentCol}>
  <View style={styles.content}>
  <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B',...styles.boldText2}}>Amount</Text>
  </View>

  <View style={styles.content}>
  {/* <Text style={{...styles.text21,...styles.boldText2}}>figure</Text> */}
  <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B',...styles.textUnitContentA,...styles.textMagin,...styles.boldText2,...styles.textSizeM}}>{'N'+item.amount}</Text>
  </View>
  <View style={styles.content}>
  <View style={styles.subContent}>
                <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B',...styles.textSizeS,...styles.boldText2}}>Created Date: </Text>
                <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B', ...styles.textSizeS}}>{item.created_at}</Text>
  </View>
  </View>
  </View>

  <View style={styles.contentCol}>
  <View style={styles.content}>
  <Text style={{...styles.text2,  color: item.status==='running'? "#7B9115":'#E8505B',...styles.boldText2}}>Units</Text>
  </View>

  <View style={styles.content}>
  {/* <Text style={{...styles.text21,...styles.boldText2}}>catlle</Text> */}
  <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B', ...styles.textUnitContent,...styles.textMagin,...styles.textSizeM}}>{item.quantity}</Text>
  </View>
  <View style={styles.content}>
  {/* <Text style={{...styles.text2,...styles.boldText2}}>payday</Text> */}
  <View style={styles.subContent}>
                <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B',...styles.textSizeS,...styles.boldText2}}>Payout Dates: </Text>
                <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B', ...styles.textSizeS}}>{item.payback_date}</Text>
  </View>
  </View>
  </View>

  <View style={styles.contentCol}>
  <View style={styles.content}>
  <Text style={{...styles.text2, color: item.status==='running'? "#7B9115":'#E8505B',...styles.boldText2,...styles.textMagin1}}>Status</Text>
  </View>

  <View style={styles.content}>
  {/* <Text style={{...styles.text2,...styles.textMagin1}}>image</Text> */}
  {item.status==='running'? <Image style={{...styles.imgStatus}} source={require('../assets/images/runningCircle.png')}/>:<Image style={{...styles.imgStatus}} source={require('../assets/images/closedCircle.png')}/>}
  </View>
  <View style={styles.content}>
  {/* <Text style={{...styles.text2,...styles.boldText2}}>Status</Text> */}
  <Text style={{...styles.text2, padding:5,color: item.status==='running'? "#7B9115":'#E8505B',...styles.textMagin1}}>{item.status}</Text>
  </View>
  </View>
  </View>  
  )}





            </View>

            <View style={styles.moreContainer} >
                <TouchableOpacity onPress={()=>navigation.navigate('Transaction')}>
                  <Text style={styles.text21}> See More ></Text>
                </TouchableOpacity>
                </View>
            <View style={styles.content3Container}>
            {/* <View style={styles.lastFarmHead} >
                <Text style={{...styles.text2,...styles.boldText2}}>Lastest Farms</Text>
                </View> */}

                <View style={styles.row3Container} >
                {random.map(i =>
                <View key={i} style={styles.buttonContainer}>
                  <View style={styles.buttonTitle}>
                    <Text style={i===1?{...styles.textButton}:{...styles.textButton,...styles.boldText2}}>{i===1?"Open Investments":"Premium Investments"}</Text>
                  </View>
                <FormButton
                buttonType="outline"
                onPress= {i===1?()=>navigation.navigate('Store'):()=>navigation.navigate('Settings')}
                title="Start Here  >"
                backgroundColor= {i===1?"#fff":"#7B9115"}
                buttonColor = {i===1?"#7B9115":"#fff"}
                borderRadius={20}
              />
              </View>
              // console.log(i)
          //       <TouchableOpacity  onPress={()=>props.navigation.navigate('Store')} key={farm.id}>
          //         <Image"#ADCF29"
               
          //   source={
          //     {uri:"https://farmcenta.com"+farm.photo}
          //   }
          //   style={styles.itemImage}
          // />
          // </TouchableOpacity>
          )}
                </View>
            </View>
            </ScrollView>:
            <View style={styles.contentContainer} >
              
              <View style={styles.noticeContainer}>
              <View style={styles.noteHead} >
              <Image source={require('../assets/images/bell-icon.png')}/>
                <Text style={{...styles.noteHeadText,...styles.textNote}}>Notification</Text>
                </View>
                {true? <TouchableOpacity style={styles.goBackButton}  onPress={()=>setNotifyOn(true)}>
                  <Image style={styles.goBackImg} source={require('../assets/images/backwardArrow.png')}/>
                  {/* <Text>Go back</Text> */}
                  </TouchableOpacity>:null}
              {true?<View style={styles.noteBody}>
              
              { receivedNote.messages!=''?receivedNote.messages.map((list,i)=>
        <TouchableOpacity key={i} onPress={handleNote.bind(list,i)}  style={styles.noteContainer}>
           <View style={styles.noteTitle}>
           <Text style={styles.textNote}>{list.subject}</Text>
           <Text style={{...styles.text1,...styles.sign}}>
             {read===i? <Image source={require('../assets/images/a-down.png')}/>:<Image source={require('../assets/images/a-close.png')}/>}
           </Text>
             </View>
             <View style={styles.noteContent}>
               {/* {console.log(list)} */}
             {read===i?<Text style={styles.textNoteP}>{list.content}</Text>:null}
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
           <Image source={require('../assets/images/off.png')} style={styles.picImage}/>
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
    // backgroundColor: '#fff',
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
      // backgroundColor: '#eed',
      flexDirection:"row"
    },
    signOut:{
      flexDirection:"row",
      alignItems:'center',
        justifyContent:'center',
        width:'50%',
        paddingTop:10,
        margin:25
    },
    menuDiv:{
      width:"60%",
      borderBottomWidth:0.8,
      borderBottomColor:"#adcf29",
      marginBottom:30
      // borderBottomColor:"#0E861C33","#7B9115"#ADCF29
    },
    menu:{
      flex:2,
      // backgroundColor: '#eed'
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
      flex:1.3,
      justifyContent:'space-around',
    // backgroundColor:"#0E861C","#ADCF29"
    // backgroundColor:"#ADCF29",
    backgroundColor:"#7B9115",
      width:'100%',
      // borderRadius:10,
      borderTopRightRadius:25,
      borderBottomRightRadius:6,
      paddingVertical:4,
      paddingLeft:25,
      marginRight:25,
      marginTop:25,
      marginBottom:25,
  },
  rowHeadContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:15,
    // backgroundColor:"#ADCF29",
    marginHorizontal:2
  },
  rowHead:{
    // flexDirection:"row",
    height:35,
    alignItems:"center"
  },
  rowContent:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:10,
    // backgroundColor: '#eee',
    backgroundColor:"#7b9115",
    // backgroundColor:"#ADCF29",
    flex:1,
    paddingTop:2
  },
  moreContainer:{
    flex:.3,
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
    flex:1,
    //  alignItems:"center",
  },
  content:{
    // justifyContent:'flex-start',
    // flex:0.3,
    flex:1,
     alignItems:"flex-start",
    //  top:-15,
    // backgroundColor:"#eee"
  },
  subContent:{
    // flexDirection:"row",
    justifyContent:'center',
    flex:1.2,
     alignItems:"center",
    //  right:-50,
    marginTop:16,
    marginVertical:4,
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
        color: "#fff",
        // color: "#0E861C","#7B9115"#ADCF29
        // textAlign:"center",
        textAlign:"left",
        fontSize:20
      },
      text1: {
        color: "#fff",
        textAlign:"left",
        fontSize:20
      },
      text3: {
        color: "#fff",
        // textAlign:"center",
        paddingLeft:22,
        fontSize:20
      },
      rowText: {
        // color: "#aaa","#7B9115"
        // color: "#7B9115",
        color:"#adcf29",
      },
      boldText2:{
        fontWeight:'bold'
      },
      textMagin1:{
        marginVertical:2,
        paddingLeft:35
      },
      textMagin:{
        marginVertical:2,
        // paddingLeft:55
      },
      textNote: {
        color: "#7b9115",
        // color: "#0E861C","#7B9115"#ADCF29
        // textAlign:"center",
        textAlign:"left",
        fontSize:20
      },
      imgStatus:{
        // marginVertical:2,
        // paddingLeft:35,
        // flex: 1,
        left:-5,
        alignSelf:"center",
        height:20,
        // marginBottom:20,
        width:20
      },
  colText: {
    // color:"#7B9115",
    color:"#adcf29",
    // color: '#aaa',"#7B9115"#ADCF29
    // color: 'white',
  },
  colText2: {
    // color: '#aaa',
    // color:"#7B9115","#ADCF29"
    color:"#adcf29",
    // textAlign:"center"
    paddingLeft:10
  },
  // colText3: {
  //   // color: '#aaa',
  //   color:"#7B9115",
  //   textAlign:"center"
  // },
    boldText: {
    color: 'white',
    fontWeight:'bold'
    },
    content2MainContainer:{
        flex:2,
        // paddingVertical:10,
        // marginTop:15,
        // marginVertical:15,
        // justifyContent:'space-between',
    //   alignItems:'center',
        // backgroundColor: '#eee',
        width:'100%',
        // width:'95%',
        // borderRadius:10,
        // height:"20%"
    },
    content2Container:{
      flex:1,
      // paddingVertical:10,
      marginTop:15,
      // marginVertical:15,
      justifyContent:'space-between',
  //   alignItems:'center',
      // backgroundColor: '#eee',#F7FAE9
      backgroundColor: '#f7fae9',
      width:'100%',
      borderRadius:10,
      // height:"20%"
  },
  latestTransContainer:{
    // flex:1,
    flexDirection:"row",
    marginTop:15,
    paddingHorizontal:10,
    // paddingVertical:10,
    justifyContent:'space-between',
  alignItems:'flex-start',
    // backgroundColor: '#eee',#F7FAE9
    // backgroundColor: '#F7FAE9',
    width:'100%',
    height:80,
    // borderRadius:10,
  },
  contentCol:{
    marginVertical:10,
    // backgroundColor: '#e1e',
    width:'33%'
  },
    // latestTrans:{
    //   // marginLeft:10,
    //   // width:'100%',
    //   // textAlign:"center",
    //   // justifyContent:'center'
    // },
    text2: {
        // color: "#ADCF29",
        // color: "#7B9115",
        // color: '#0E861C',"#ADCF29"
        // textAlign:"center",
        paddingLeft:15,
        fontSize:11
        // marginVertical:1
      },
      text21: {
        color: "#bba",
        fontSize:13,
        fontWeight:"bold",
        paddingRight:25
      },
      textButton: {
        // color: "#ADCF29",
        color: "#7b9115",
        // color: '#0E861C',"#ADCF29"
        textAlign:"center",
        // paddingLeft:15,
        // fontSize:17
  
      },
      textSizeS: {
        fontSize:9,
      },
      textSizeM: {
        fontSize:17
      },
      textNoteP: {
        fontSize:10,
      },
      // textNotePContainer:{
      //   marginBottom:10
      // },
      textUnitContent: {
        paddingLeft:15,
      },
      textUnitContentA: {
        paddingLeft:15,
      },
      latestTransText2: {
        // color: '#0E861C',
        textAlign:"center",
        fontSize:17
      },
  content3Container:{
    flex:1,
    // marginTop:5,
    // marginBottom:25,
    bottom:40,
    justifyContent:'space-between',
    width:'95%',
    borderRadius:10,
},
row3Container:{
  width:'95%',
    flexDirection:"row",
    justifyContent:'space-around',
  },
  buttonTitle:{
    marginVertical:10
  },
  buttonContainer:{
    marginVertical:35
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
        marginTop:20,
        // backgroundColor:"#0E861C33",
        // backgroundColor:"#0E861C33",
        height:"70%",
        justifyContent:"center",
        alignContent:'center',
        borderRadius:4
      },
      noteBody:{
        flex:5,
      },
      noteHead:{
        flex:1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#0E861C33",
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
        // flex:1,
        height:150,
        paddingVertical:3,
        borderTopColor:"#0E861C33",
        borderTopWidth:1,
        paddingHorizontal:20,
        // marginBottom:35,
        paddingBottom:35
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
        // alignItems:"flex-start",
        marginVertical:5,
        // marginBottom:25
      },
      noteHeadText:{
        textAlign:'center',
        fontWeight:"600",
        fontSize:20,
        marginLeft:20,
        // paddingTop:10,
        // marginTop:2,
      },
      goBackImg:{
        width:25,
        height:20
      },
      goBackButton:{
        justifyContent:"flex-end",
        height:30,
        marginLeft:290,
        top:-20
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
