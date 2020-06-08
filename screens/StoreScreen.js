import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    AsyncStorage
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function StoreScreen() {

    const [productsArray, setProductsArray] = useState([]),
     [farm, setFarm] = useState([[],[]]),
     [selling, setSelling] = useState(false),
     [productsReceived, setProductsReceived] = useState(false),
     [userInfo, setUserInfo] = useState(''),
     [farmClicked, setFarmClicked] = useState(true),
     [clicked, setClicked] = useState(''),
     [proceed, setProceed] = useState(false),
     [value, setValue] = useState(1);
    let sum=0;
  
    
    const retrieveUserInfo = async () => {
      try {
        const name = await AsyncStorage.getItem("user"),
    avatar= await AsyncStorage.getItem("avatar");
    if (avatar !== null) {
      // You can access your data
      setUserInfo([name, avatar])
      console.log(userInfo)
  
    }
      } catch (error) {
        console.log(error);
      }
    };

     //  Sign up logic
    const sellHandler =async () => {
        setSelling(true)
        console.log('selling ' +selling)
        // console.log(farm[1])
        setProceed(true)
       },
       payIniHandler =async () => {
        console.log('initialise' +selling)
        setProceed(true)
       },
       payHandler =async () => {
        console.log('initialising ' +selling)
       },
       toggleHandler =async () => {
        // setFarmClicked(true)
        setValue(1)
        if(!farmClicked){
            setFarmClicked(true);
            setProceed(false);
        }else{
            setProceed(true)
        }
       },
       closeHandler =async () => {
        setSelling(false)    
        console.log('closed '+selling)
        // console.log(farm[0])
          };

    const fetchProducts =async () => {    
        await fetch('https://farmcenta.com/api/v1/products')
       .then(resp=>resp.json())
       .then(json =>{
    //      json.map((item)=> {
    //     //  if(item.categories[0]===124){
    //     //    // console.log(item.categories[0])
    //     // //    setNewArray(newArray.push(item))
    //     //  }
    //    })
    // console.log(json.products[1])
    if (farm[0].length===0||farm[1].length===0){
        // if (productsReceived && (farm[0].length===0||farm[1].length===0)){
    json.products.map((item)=>{
        item.status=== 'Sold Out'? farm[0].push(item):farm[1].push(item)
    })
};

    setProductsArray(json)
    setProductsReceived(true)
    // console.log(productsArray.products[12].status)
    // console.log(productsArray.products[0].category)
  
    // console.log(productsArray)
    // console.log(productsReceived)
    // console.log(productsArray) photo,category,amount,status, name,location,id,desc,
    // if (productsReceived && (farm[0].length===0||farm[1].length===0)){

    //     if (productsReceived ){
        //  save(JSON.stringify(newArray));
 
       } )
       .catch(err=> {
         console.log(err);
         setProductsArray(err)
         console.log(productsArray)
        //  setNewsItems(newsItems.push(err.message));
       });
     };

     useEffect(() => {
        fetchProducts();
           // retrieveData();
           retrieveUserInfo();
        }, []);
    
        const pickItemHandler = (itemId) =>{
            // console.log(itemId);
               let clickedItem= productsArray.products.find((item) =>{
                if (item.id===itemId){
                    // console.log(item.id, itemId)
                    setFarmClicked(false)
                //   return item
                  return setClicked(item);
                  

                }
            
                });
        //   console.log(clickedItem.name,+' '+ clickedItem.location);
        // console.log(clickedItem)
        // console.log(clickedItem.status)
        // setClicked(clickedItem);
        // console.log(clicked.return)photo, return,quantity, location,name, amount, category
        // console.log(clicked)
                // return props.navigation.navigate('Hack', itemData);
          },
          addHandler= ()=>{
              if(value<clicked.quantity){
                  let num=value;
                  num+=1;
                  setValue(num)
              }
          },
          lessHandler= ()=>{
            if(value>1){
                let num=value;
                num-=1;
                setValue(num)
            }
          };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <View>
                <View style={styles.imageContainer} >
                    <Image
                        source={
                            require('../assets/images/logo.png')
                        }
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.id}>
           <Image source={{uri:userInfo[1]}} style={styles.picImage}/>
           <Text>{userInfo[0]}</Text>
           </View>
           {farmClicked? null:<TouchableOpacity onPress={toggleHandler} style={styles.backButton}><Text>Go Back</Text></TouchableOpacity>}
           </View>
           {farmClicked?<View>
                <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={sellHandler} style={{...styles.leftButton,...styles.buttonSet, backgroundColor:selling?'#0C9121':'#fff'}}>
            <Text style={{...styles.buttonText, color:selling?'#fff':'#2e78b7'}}>
              Still selling
            </Text>
          </TouchableOpacity>
<TouchableOpacity onPress={closeHandler} style={{...styles.rightButton,...styles.buttonSet, backgroundColor:selling?'#fff':'#0C9121'}}>
            <Text style={{...styles.buttonText, color:selling?'#2e78b7':'#fff'}}>
              Closed Farm
            </Text>
          </TouchableOpacity>
      
      </View>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}>

                    <View style={styles.content2Container}>
        
                        <View style={styles.productsContainer} >
                            
                        {productsReceived? selling?
                        farm[1].map((item)=>
                        <TouchableOpacity onPress={pickItemHandler.bind(item,item.id)} key={item.id}style={styles.itemContainer}>
                            <Image
                            source={
                                {uri:'https://farmcenta.com'+item.photo}
                            }
                            style={styles.itemImage}
                        />
                         <Text style={styles.itemTitle}>{item.name}</Text>
                        <View style={styles.itemTextBelow}>
                            <View><Text>{item.location}</Text></View>
                        </View>
                        </TouchableOpacity>) :farm[0].map((item)=>
                            <TouchableOpacity onPress={pickItemHandler.bind(item,item.id)} key={item.id+'1'}style={styles.itemContainer}>
                                <Image
                                source={
                                    {uri:'https://farmcenta.com'+item.photo}
                                }
                                style={styles.itemImage}
                            />
                             <Text style={styles.itemTitle}>{item.name}</Text>
                            <View style={styles.itemTextBelow}>
                                <View><Text>{item.location}</Text></View>
                            </View>
                            </TouchableOpacity>):null}
                            </View>
                        


                        {/* ........................................ */}
                        {/* <View style={styles.rowContainer} > */}
                            
                            {/* <Text>{productsArray.products[0].category}</Text> */}
                            {/* <Image
                                source={
                                    {uri:'https://farmcenta.com'+productsArray.products[0].photo}
                                }
                                style={styles.logoImage}
                            />
                            <Image
                                source={
                                    require('../assets/images/ginger3x.png')
                                }
                                style={styles.logoImage}
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
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
                            />
                        </View> */}

                        {/* <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
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
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
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
                            />
                        </View>

                        <View style={styles.rowContainer} >
                            <Image
                                source={
                                    require('../assets/images/cattle-farm3x.png')
                                }
                                style={styles.logoImage}
                            />
                            <Image
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
                            />
                        </View> */}
                        {/* ........................................ */}


                    </View>
                </ScrollView>
                </View>:
                 proceed? <View style={styles.productsPop}>
                 <View style={styles.productTop}>
                     <View style={styles.productHead}>
                         <Text style={styles.text2}>Make Payment</Text>
                         <Image
                              source={
                                {uri:'https://farmcenta.com'+clicked.photo}
                            }
                            style={styles.listImage}
                         />
                         </View>
                         <View style={styles.productDetails}>
                 <View >
                    <Text style={styles.listName}>{clicked.name}</Text>
                     <Text style={styles.listAmount}>N{clicked.amount}</Text>
                     </View>
                     <View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Amount:</Text><Text>N{clicked.amount}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Available Quantity:</Text><Text>{clicked.quantity}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Return:</Text><Text>{clicked.return}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Period:</Text><Text>{clicked.period}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Location:</Text><Text>{clicked.location}</Text>
                     </View>
                     </View>
                     </View>
                 </View>
                 <View style={styles.productBelow}>
                 <View style={styles.productTitle}><Text style={styles.text2}>Selected Investment</Text></View>
                     <View style={styles.productData}><Text>Amount to Pay:</Text><Text>{clicked.amount}</Text></View>
                        <View style={styles.productData}><Text>Quantity Selected:</Text><Text>{value}</Text></View>
                     <View style={styles.productData}><Text>Expected Pay Back:</Text><Text>5</Text></View>
                     <TouchableOpacity onPress={toggleHandler} style={styles.productClear}><Text style={{...styles.text,textAlign:"center"}}>Clear Cart</Text></TouchableOpacity>
                 </View>
                 <View style={styles.payButtons}>
                 <TouchableOpacity onPress={payHandler} style={{...styles.productButton,width:150}}>
         <Text style={styles.text}>
           Pay with Bank
         </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={payHandler} style={{...styles.productButton,width:150}}>
         <Text style={styles.text}>
           Pay with Card
         </Text>
       </TouchableOpacity>
       </View>
             </View>:<View style={styles.productsPop}>
             <View style={styles.productTop}>
                 <View style={styles.productHead}>
                     <Text style={styles.text2}>Investment Information</Text>
                     <Image
                         source={
                            {uri:'https://farmcenta.com'+clicked.photo}
                        }
                         style={styles.listImage}
                          // console.log(clicked.return)photo, return,quantity, location,name, amount, category
                     />
                     </View>
                 <View style={styles.productDetails}>
                 <View >
                    <Text style={styles.listName}>{clicked.name}</Text>
                     <Text style={styles.listAmount}>N{clicked.amount}</Text>
                     </View>
                     <View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Amount:</Text><Text>N{clicked.amount}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Available Quantity:</Text><Text>{clicked.quantity}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Return:</Text><Text>{clicked.return}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Period:</Text><Text>{clicked.period}</Text>
                     </View>
                     <View style={styles.list}>
                     <Text style={styles.listText}>Location:</Text><Text>{clicked.location}</Text>
                     </View>
                     </View>
                     </View>
             </View>
             <View style={styles.productBelow}>
             <View style={styles.productTitle}><Text style={styles.text2}>Calculator</Text></View>
                 <View style={styles.productData}>
                     <Text>Quantity:</Text>
                     <View style={styles.select}>
                    <Text>{value}</Text>
                         <View>
                             <TouchableOpacity onPress={addHandler}>
                             <Image
                        source={
                            require('../assets/images/up.png')
                        }
                        style={styles.valImage}
                    />
                             </TouchableOpacity>
                             <TouchableOpacity onPress={lessHandler}>
                             <Image
                    source={
                        require('../assets/images/down.jpg')
                    }
                    style={styles.valImage}
                />
                             </TouchableOpacity>
                        </View>
                    </View>
                </View>
                 <View style={styles.productData}><Text>Amount to Pay:</Text><Text>N{clicked.amount}</Text></View>
                 <View style={styles.productData}><Text>Expected Pay Back:</Text><Text>5</Text></View>
                 <View style={styles.productData}>
                     <View>
                         <Text>Accept MOU</Text>
                     <TouchableHighlight><Text style={styles.mouText}>Click to view sample MOU</Text></TouchableHighlight>
                     </View>
                     <TouchableOpacity style={styles.mouTick}>
                     <Image
                        source={
                            require('../assets/images/mark.png')
                        }
                        style={styles.valImage}
                    />
                     </TouchableOpacity>
                     </View>
             </View>
             <TouchableOpacity onPress={payIniHandler} style={styles.productButton}>
     <Text style={styles.text}>
       Proceed to Payament
     </Text>
   </TouchableOpacity>
         </View>
                }

                {/* ........................................................ */}

{/* ................................................... */}
                
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
        </View>
    );
}

StoreScreen.navigationOptions = {
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
        // paddingTop:80
    },
    innerContainer: {
        flex: 1,
        // paddingBottom:50
        // alignItems:'center',
    },
    contentContainer: {
        // flex: 1,
        alignItems: 'center',
        // paddingBottom:200
    },
    productsContainer:{
        flex: 1,
        flexWrap:"wrap",
        flexDirection: 'row',
        // backgroundColor:'yellow',
        justifyContent:'center'
    },
    itemContainer:{
        // flex:1,
        alignItems: 'center',
        // textAlign: 'center',
        // backgroundColor:'yellow'
        width:'30%',
        margin:4,
        // borderWidth:.7,
        // borderColor:'black',
        borderRadius:20
    },
    buttonContainer:{
        // flex:1,
        justifyContent:'center',
        // alignItems: 'center',
        paddingVertical: 20,
        flexDirection: "row",
        // backgroundColor: '#234',
        // width:'100%'
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
        // width:'100%',
        // flex:2,
        // backgroundColor:'white',
        marginTop:15,
        // flexDirection: 'row',
        // justifyContent:'space-between',
        // marginHorizontal:6
        // alignContent:'space-between'
    },
    imageContainer: {
        // flex:1,
        paddingTop: 1,
        alignItems: 'center',
        // backgroundColor: '#222',
    },
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        // paddingHorizontal: 15,
    },
      leftButton:{
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
      },
      rightButton:{
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
      },
      buttonSet: {
        justifyContent:'center',
        // backgroundColor: '#0C9121',
        width:"40%",
        height:20,
        borderColor:'#2e78b7',
        borderWidth:1,
      },
      buttonText: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
      },
    //   offText: {
    //     fontSize: 14,
    //     color: '#2e78b7',
    //     lineHeight: 24,
    //     textAlign: 'center',
    // },
    text: {
        color: 'white',
    },
    boldText: {
        color: 'white',
        fontWeight: 'bold'
    },
    mouText: {
        color: 'red',
        fontSize:10
    },
    mouTick:{
        backgroundColor:'#0E861C',
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4
    },
    content2Container: {
        flex: 1,
        paddingTop:10,
        marginVertical: 15,
        justifyContent: 'space-between',
        //   alignItems:'center',
        // backgroundColor: '#eee',
        width: '100%',
        // borderRadius: 10,
        // height:"20%"
        // paddingBottom:50
    },

    text2: {
        color: '#0E861C',
        fontWeight:'bold'
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
        // flexDirection:"row",
        // backgroundColor:'blue',
        paddingHorizontal:10,
        // marginTop:25,
        // backgroundColor: '#eee',
        // alignItems:'center',
        justifyContent:"center",
        marginLeft:18,
        width:'30%',
        zIndex:2,
        top:-3
      },
      backButton:{
          alignItems:"flex-end",
          marginLeft:'80%',
          marginRight:10
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
    productPop:{
        // flex:1,
        // justifyContent:"center",
        // backgroundColor:'yellow'
    },
    productTop:{
        flexDirection:"row",
        // flex:1,
        justifyContent:"center",
        borderTopColor:"#0E861C33",
        borderTopWidth:2,
        height:180,
        // justifyContent:"",
        // marginTop:10,
        paddingTop:20,
        paddingHorizontal:20,
    },
    productHead:{
        flex:1,
        // borderColor:"pink",
        // borderWidth:1,
        justifyContent:"center",
        // backgroundColor:'blue'
        // paddingHorizontal:2
    },
    productDetails:{
        flex:1,
        justifyContent:"center",
        // paddingHorizontal:2,
        // alignContent:"center",
        alignItems:'center',
        // paddingTop:20,
        paddingVertical:30
        // backgroundColor:'red',
        // borderColor:"purple",
        // borderWidth:3,
        // textAlign:"center"
    },
    productBelow:{
        // flex:1,
        paddingTop:20,
        justifyContent:"center"
    },
    productTitle:{
        paddingHorizontal:30,
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
    },
    productData:{
        justifyContent:'space-between',
        flexDirection:"row",
        paddingHorizontal:30,
        // borderTopColor:'green',
        // borderTopWidth:1,
        borderBottomColor:"#0E861C33",
        borderBottomWidth:1,
        // flex:1,
        // alignContent:"center",
        alignItems:"center",
        minHeight:45
    },
    select:{
        justifyContent:'space-between',
        flexDirection:"row",
        paddingHorizontal:5,
        // borderColor:'green',
        borderWidth:1,
        borderRadius:5,
        alignItems:"center",
        minHeight:30,
        width:70
    },
    productButton:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#0E861C',
        minHeight:35,
        margin:30,
        // flex:1
    },
    payButtons:{
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"center",
    },
    productClear:{
        backgroundColor:'red',
        alignSelf:"flex-end",
        marginRight:30,
        marginVertical:10,
        minHeight:25,
        width:80,
        justifyContent:"center"
    },
    list:{
        flexDirection:"row",
        flex:1
    },
    listImage:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        // marginTop:40
        marginVertical:10
    },
    listText: {
        color: '#0E861C',
    },
    listAmount:{
        fontSize:38,
        fontWeight:"bold"
    },
    listName:{
        fontSize:25,
        color: '#0E861C',
    }
});
