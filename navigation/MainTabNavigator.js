import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarImage from '../components/TabBarImage';
// import SettingsScreen from '../screens/SettingsScreen';
// import Dashboard from '../screens/Dashboard';
// import StoreScreen from '../screens/StoreScreen';
// import TransactionScreen from '../screens/TransactionScreen';
// import WalletScreen from '../screens/WalletScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(

);

HomeStack.navigationOptions = {
};

HomeStack.path = '';

const StoreStack = createStackNavigator(
  
);

StoreStack.navigationOptions = {  
};

StoreStack.path = '';


const TransactionStack = createStackNavigator(
 
);

TransactionStack.navigationOptions = {
 
};

TransactionStack.path = '';


const WalletStack = createStackNavigator(

);

WalletStack.navigationOptions = {

};

WalletStack.path = '';

const SettingsStack = createStackNavigator(
 
);

SettingsStack.navigationOptions = {
 
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  // HomeStack,
  // StoreStack,
  // SettingsStack,
  // TransactionStack,
  // WalletStack
});
 

tabNavigator.path = '';

export default tabNavigator;
