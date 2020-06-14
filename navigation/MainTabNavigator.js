import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/tabs';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import TabBarImage from '../components/TabBarImage';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Dashboard from '../screens/Dashboard';
import NotificationScreen from '../screens/NotificationScreen';
import StoreScreen from '../screens/StoreScreen';
import TransactionScreen from '../screens/TransactionScreen';
import WalletScreen from '../screens/WalletScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// const Stack = createStackNavigator();

const HomeStack = createStackNavigator(
  {
    // Home: HomeScreen,
    Home: Dashboard,
    // App: AccessScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Menu',
  // tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //       ? `ios-information-circle${focused ? '' : '-outline'}`
    //       : 'md-information-circle'
    //   }
    // />
    <TabBarImage focused={focused} icon={require('../assets/images/menu.png')} />
  ),
  // transitionSpec: {
  //   open: config,
  //   close: config,
  // },
  tabBarOnPress:({ navigation })=>{
    navigation.navigate('HomeStack');
    navigation.state.routes[0].params.Menu();
    // console.log( navigation.state.routes[0].params.toggleMenu)
    // console.log( navigation.state.routes[0].params.Menu)
  }
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';



const StoreStack = createStackNavigator(
  {
    Store: StoreScreen,
  },
  config
);

StoreStack.navigationOptions = {
  tabBarLabel: 'Farm',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    <TabBarImage focused={focused} icon={require('../assets/images/field.png')} />
  ),
  
};

StoreStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

NotificationStack.path = '';

const TransactionStack = createStackNavigator(
  {
    Transaction: TransactionScreen,
  },
  config
);

TransactionStack.navigationOptions = {
  tabBarLabel: 'Transaction',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    <TabBarImage focused={focused} icon={require('../assets/images/payment.png')} />
  ),
};

TransactionStack.path = '';


const WalletStack = createStackNavigator(
  {
    Wallet: WalletScreen,
  },
  config
);

WalletStack.navigationOptions = {
  tabBarLabel: 'Wallet',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    <TabBarImage focused={focused} icon={require('../assets/images/wallet.png')} />
  ),
};

WalletStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    <TabBarImage focused={focused} icon={require('../assets/images/settings.jpeg')} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StoreStack,
  TransactionStack,
  WalletStack,
  // LinksStack,
  SettingsStack,
  // App: StoreScreen,
});

// const tabNavigator = createBottomTabNavigator(
//   ()=>{
//     return (<NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Dashboard} />
//         <Stack.Screen name="Store" component={StoreScreen} />
//         <Stack.Screen name="Transaction" component={TransactionScreen} />
//         <Stack.Screen name="Wallet" component={WalletScreen} />
//       </Stack.Navigator>
//       </NavigationContainer> )
//   }
// );


 

tabNavigator.path = '';

export default tabNavigator;
