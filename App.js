import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import IndexScreen from './screens/IndexScreen';
import OnboardingTwoScreen from './screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './screens/OnboardingThreeScreen';
import AccessScreen from './screens/AccessScreen';
import Dashboard from './screens/Dashboard';
import StoreScreen from './screens/StoreScreen';
import TransactionScreen from './screens/TransactionScreen';
import NotificationScreen from './screens/NotificationScreen';
import WalletScreen from './screens/WalletScreen';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
        {/* <IndexScreen/> */}
        {/* <OnboardingTwoScreen/> */}
        {/* <OnboardingThreeScreen/> */}
        {/* <AccessScreen/> */}
        {/* <Dashboard/> */}
        {/* <StoreScreen/> */}
        {/* <TransactionScreen/> */}
        {/* <NotificationScreen/> */}
        {/* <WalletScreen/> */}
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      // require('./assets/images/farmcenta-8/farmcenta-8.png'),
      // require('./assets/images/farmcenta-82x.png'),
      // require('./assets/images/farmcenta-83x.png'),
      require('./assets/images/farmcenta-8.png'),
      require('./assets/images/logo.png'),
      require('./assets/images/Leveraging-Technology.jpg'),
      require('./assets/images/Ensuring-Security.jpg'),
      require('./assets/images/Addressing-Needs.jpg'),
      require('./assets/images/Empowering-Farmers.png')

    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
