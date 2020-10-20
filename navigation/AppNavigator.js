import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AccessScreen from '../screens/AccessScreen';
import IndexScreen from '../screens/IndexScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';

export default createAppContainer(
  createSwitchNavigator({
    LandingOne: IndexScreen,
    LandingTwo: OnboardingTwoScreen,
    Auth: AccessScreen,
    Main: MainTabNavigator,
  })
);
