import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarImage from '../components/TabBarImage';
import SettingsScreen from '../screens/SettingsScreen';
import Dashboard from '../screens/Dashboard';
import StoreScreen from '../screens/StoreScreen';
import TransactionScreen from '../screens/TransactionScreen';
import WalletScreen from '../screens/WalletScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Dashboard,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarImage focused={focused} icon={require('../assets/images/menux.png')} />
  ),
  tabBarOnPress:({ navigation })=>{
    navigation.navigate('HomeStack');
    navigation.state.routes[0].params.Menu();
  }
};

HomeStack.path = '';

const StoreStack = createStackNavigator(
  {
    Store: StoreScreen,
  },
  config
);

StoreStack.navigationOptions = {
  tabBarLabel: 'Farm',
  tabBarIcon: ({ focused }) => (
    <TabBarImage focused={focused} icon={require('../assets/images/store-investment.png')} />
  ),
  
};

StoreStack.path = '';


const TransactionStack = createStackNavigator(
  {
    Transaction: TransactionScreen,
  },
  config
);

TransactionStack.navigationOptions = {
  tabBarLabel: 'Transaction',
  tabBarIcon: ({ focused }) => (
    <TabBarImage focused={focused} icon={require('../assets/images/digital-wallet.png')} />
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
    <TabBarImage focused={focused} icon={require('../assets/images/wallet-credit-card.png')} />
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
    <TabBarImage focused={focused} icon={require('../assets/images/private-wage.png')} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StoreStack,
  TransactionStack,
  WalletStack,
  SettingsStack,
});
 

tabNavigator.path = '';

export default tabNavigator;
