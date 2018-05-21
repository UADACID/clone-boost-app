//LIB
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React from 'react';
//STACK SCREEN
import Splash from '../modules/splash/screen'
import Otp from '../modules/otp/screen'
import RefFriend from '../modules/refFriend/screen'
import OtpValidation from '../modules/otpValidation/screen'

//CHILD SCREEN
import BoostSpotSearch from '../modules/boostSpot/boostSpotSearch'

//TAB DASHBOARD'S SCREEN
import Home from '../modules/home/screen'
import BoostSpot from '../modules/boostSpot/screen'
import BoostQRScan from '../modules/boostQRScan/screen'
import MyDeals from '../modules/myDeals/screen'
import Account from '../modules/account/screen'

//CUSTOM COMPONENT
import BoostHeaderDashboard from '../components/boostHeaderDashboard';
import CustomTabBar from '../components/customTabBar';

const TabDasboard = createBottomTabNavigator({
    Home : {
        screen : Home,
    },
    BoostSpot : {
        screen : BoostSpot
    },
    BoostQRScan : {
        screen : BoostQRScan
    },
    MyDeals : {
        screen : MyDeals
    },
    Account : {
        screen : Account
    },
},{
  tabBarComponent: CustomTabBar,
  tabBarOptions: {
    // backgroundColor: 'transparent'
  }
})

export default createStackNavigator({
    Splash: {
      screen: Splash
    },
    Otp: {
        screen: Otp
    },
    RefFriend: {
      screen: RefFriend
    },
    OtpValidation: {
        screen: OtpValidation
    },
    Dashboard : {
        screen : TabDasboard,
        navigationOptions : {
          header : () => <BoostHeaderDashboard />
        }
    },
    BoostSpotSearch: {
      screen : BoostSpotSearch,
    }
  },{
      headerMode : 'float',
      // initialRouteName: 'Dashboard'
  });
