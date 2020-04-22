import React from 'react';
import { View, StyleSheet, Linking, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Screen from './Screen';
import Header from './Header';
import HandBurger from './HandBuger';
import Greeting from './Greeting';
import MenuImage from './MenuImage';
import ReportImage from './ReportImage';
import SocialLogo from './AppData';
// import Logo from '../../../AIB_APP/components/Logo';

const social = [require('../assets/facebook.png'), require('../assets/instagram.png'), require('../assets/twitter.png'), require('../assets/youtube.png')]
// social.map((t,i)=>{
//     console.log(t +' -> '+ i)
// })

const WebMenu = (props) => {
    return (
        <Header style={styles.headerStyle}>
            <LinearGradient colors={['#1854a3', '#c6140d']} style={styles.linear}>
                {/* <View style={{ ...styles.menu, ...props.style }}> */}
                {/* ['#1854a3', '#c6140d', 'transparent'] */}
                {/* <View style={styles.linkItemsHead} /> */}
                <View style={styles.linkItems}>
                    <View style={styles.topLinks}>
                        <TouchableOpacity onPress={props.aboutAib} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/about_aib.png')} />
                            <Text style={styles.text}>About AIB</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.toggleAction} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/website.png')} />
                            <Text style={styles.text}>Reporting Guidlines</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.email} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/email.png')} />
                            <Text style={styles.text}>Send Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.whatsapp} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/whatsapp.png')} />
                            <Text style={styles.text}>Whatsapp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.website} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/website.png')} />
                            <Text style={styles.text}>Visit Website</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.aibOffice} style={{ ...styles.items, ...props.style }} >
                            <Image style={styles.menuImage} source={require('../assets/aib_office.png')} />
                            <Text style={styles.text}>AIB Offices</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.followUs}>
                        <Text style={styles.text}>Follow us on:</Text>
                        <View style={styles.followUsImg}>
                            {/* {social.map((item, id) => {
                                // { console.log(item, id) }
                                <TouchableOpacity onPress={props.social.bind(item,id)} key={id}>
                                    <Image style={styles.menuImageImg} source={item} />
                                </TouchableOpacity>
                            })} */}

                             <TouchableOpacity onPress={props.socialFa}>
                                <Image style={styles.menuImageImg} source={require('../assets/facebook.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.socialIn}>
                                <Image style={styles.menuImageImg} source={require('../assets/instagram.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.socialTw}>
                                <Image style={styles.menuImageImg} source={require('../assets/twitter.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.socialYo}>
                                <Image style={styles.menuImageImg} source={require('../assets/youtube.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Header>
    );
}



// code 
             {/* {SocialLogo.map((item, id) => {
                                { console.log(item, id) }
                                <TouchableOpacity onPress={props.toggleActioni} key={id}>
                                    <Image style={styles.menuImageImg} source={item} />
                                </TouchableOpacity>
                            })} */}



const styles = StyleSheet.create({
    headerStyle: {
        // paddingTop: 1,
        // backgroundColor: '#1854a3',
        height: '100%',
        width: '50%',
        position: 'absolute',
        // bottom: '0%'
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        // flex: 1,
    },
    linear: {
        // paddingTop: 1,
        height: '100%',
        width: '100%',
        // padding:5,
        // margin:30
        // position: 'absolute',
        // zIndex:1,
    },
    menu: {
        // flex:1,
        // flexDirection: "row",
        marginBottom: 20,
        marginLeft: 5,
        width: '80%',
        // alignContent:'space-around',
        justifyContent: "space-evenly",
    },
    // linkItemsHead: {
    //     paddingTop:15,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     borderBottomWidth:0.5,
    //     borderBottomColor: 'red',
    //     // borderWidth:
    //     // marginLeft:15, 
    //     width:'80%',
    // },
    linkItems: {
        paddingTop: 20,
        // borderTopWidth:0.5,
        // borderTopColor: 'red',
        alignSelf: 'center',
        // alignItems: 'flex-start',

        // borderWidth:2,
        // borderColor: 'red'
        width: '100%',
        // left: -60,
    },
    topLinks: {
        width: wp('90%'),
        alignSelf: 'center',
        left: -10,
    },
    items: {
        flexDirection: "row",
        // width: '75%',
        width: wp('40%'),
        height: hp('3%'),
        // height:40,
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        // textAlign:'left',
        // borderBottomColor: 'yellow',
        // borderWidth:2,
        paddingHorizontal: wp('1%'),
        marginTop: 40,
    },
    menuImage: {
        width: 30,
        height: 30,
        // borderWidth:2,
        // borderColor: 'blue',
        // padding: 3,
        marginHorizontal: wp('2%')
    },
    text: {
        color: 'white',
        textAlign: 'left'
    },
    followUs: {
        marginTop: hp('10%'),
        marginLeft: wp('2%'),
        paddingHorizontal: 15
    },
    followUsImg: {
        marginTop: 8,
        flexDirection: "row",
    },
    menuImageImg: {
        width: 18,
        height: 18,
        marginHorizontal: wp('2%')
    }
})

export default WebMenu;