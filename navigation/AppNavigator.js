import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';
import AccessScreen from '../screens/AccessScreen';
import IndexScreen from '../screens/IndexScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';
import OnboardingThreeScreen from '../screens/OnboardingThreeScreen';
import OnboardingFourthScreen from '../screens/OnboardingFourthScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    LandingOne: IndexScreen,
    LandingTwo: OnboardingTwoScreen,
    LandingThree: OnboardingThreeScreen,
    LandingFour: OnboardingFourthScreen,
    Auth: AccessScreen,
    Main: MainTabNavigator,
  })
);
