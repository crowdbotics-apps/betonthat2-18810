import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2476987Navigator from '../features/BlankScreen2476987/navigator';
import BlankScreen2576986Navigator from '../features/BlankScreen2576986/navigator';
import Settings76976Navigator from '../features/Settings76976/navigator';
import UserProfile76969Navigator from '../features/UserProfile76969/navigator';
import Settings76968Navigator from '../features/Settings76968/navigator';
import Settings76966Navigator from '../features/Settings76966/navigator';
import SignIn276964Navigator from '../features/SignIn276964/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen2476987: { screen: BlankScreen2476987Navigator },
BlankScreen2576986: { screen: BlankScreen2576986Navigator },
Settings76976: { screen: Settings76976Navigator },
UserProfile76969: { screen: UserProfile76969Navigator },
Settings76968: { screen: Settings76968Navigator },
Settings76966: { screen: Settings76966Navigator },
SignIn276964: { screen: SignIn276964Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
