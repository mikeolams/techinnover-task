import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AccessScreen from '../screens/AccessScreen';
import IndexScreen from '../screens/IndexScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';
import OnboardingThreeScreen from '../screens/OnboardingThreeScreen';

export default createAppContainer(
  createSwitchNavigator({
    LandingOne: IndexScreen,
    LandingTwo: OnboardingTwoScreen,
    LandingThree: OnboardingThreeScreen,
    Auth: AccessScreen,
    Main: MainTabNavigator,
  })
);
