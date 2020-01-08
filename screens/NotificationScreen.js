import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function NotificationScreen() {
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
            <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>

            <View style={styles.content2Container}>
            <View style={styles.rowContainer} >
                <Text style={styles.boldText}>Notification</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.boldText}>S/N</Text>
                <Text style={styles.boldText}>Farm Manager</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>2</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
                <View style={styles.rowContainer} >
                <Text style={styles.text2}>1</Text>
                <Text style={styles.text2}>27, Jan 2019</Text>
                </View>
            </View>
            
            </ScrollView>
            
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

NotificationScreen.navigationOptions = {
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
  imageContainer:{
    // flex:1,
    paddingTop:1,
    alignItems:'center',
    // backgroundColor: '#222',
  },
  rowContainer:{
    flexDirection:"row",
    justifyContent:'space-around',
    paddingHorizontal:15,
    width:"70%"
  },
  rowContent:{
   width:"40%"
  },
    boldText: {
    color: '#0E861C',
    fontWeight:'bold'
    },
    text2: {
        color: '#0E861C'
      },
    content2Container:{
        flex:1,
        paddingTop:20,
        marginVertical:15,
        justifyContent:'space-between',
    //   alignItems:'center',
        backgroundColor: '#eee',
        width:'90%',
        borderRadius:10
    },
  logoImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
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
