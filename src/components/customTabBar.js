/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const TAB_BOST_POSITION = (width / 2) - 32;
const WIDTH_ITEM = ((width / 2) - 32) / 2 ;

export default class CustomTabBar extends Component {

  customActionHome = ({routeName, fromRouteName, params}) => {
      if (fromRouteName === 'Home' || fromRouteName === '' && params && params.refScrollView) {
        params.refScrollViewHome.scrollToPosition(0,0)
      }
    this.props.navigation.navigate(routeName)
  }

  customAction = ({routeName, params}) => {
    this.props.navigation.navigate(routeName)
  }

  onPressTab = ({routeName, params}) => {
      this.props.navigation.setParams({ routeName})
      const fromRouteName = this.props.navigation.getParam('routeName', '');
      switch (routeName) {
        case 'Home':
          this.customActionHome({routeName, fromRouteName, params})
          break;
        case 'BoostSpot':
          this.customAction({routeName, params})
          break;
        case 'BoostQRScan':
          this.customAction({routeName, params})
          break;
        case 'MyDeals':
          this.customAction({routeName, params})
          break;
        case 'Account':
          this.customAction({routeName, params})
          break;
        default:
      }
  }

  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    return (
      <View style={styles.container}>
        {
          routes.map((route, indexItem) => {
            const isActive = index === indexItem;
            const { routeName } = route;
            let label;
            let icon;
            if (routeName == 'Home') {
              label = 'Home';
              icon = isActive ? require('../assets/home_active.png') : require('../assets/home_inactive.png')
            } else if (routeName == 'BoostSpot') {
              label = 'Boost Spot'
              icon = isActive ? require('../assets/boost_spot_active.png') : require('../assets/boost_spot_inactive.png')
            } else if (routeName == 'MyDeals') {
              label = 'My Deals'
              icon = isActive ? require('../assets/mydeal_active.png') : require('../assets/mydeal_inactive.png')
            } else if (routeName == 'Account') {
              label = 'Account'
              icon = isActive ? require('../assets/account_active.png') : require('../assets/account_inactive.png')
            }

            if (route.routeName == 'BoostQRScan') {
              return (
                <TouchableOpacity
                  key={indexItem}
                  activeOpacity={1}
                  onPress={()=>this.onPressTab({routeName:route.routeName, params:null})}>
                  <View style={{width: 64, height: 64, justifyContent: 'flex-end'}}>
                    <View style={styles.item}>
                    </View>
                  </View>
                  <Image
                    style={{position: 'absolute', left: 0, bottom: 0, width: 64, height: 64}}
                    source={require('../assets/tab_boost.png')}/>
                </TouchableOpacity>
              )
            }
            return (
              <TouchableOpacity
                key={indexItem}
                activeOpacity={1}
                style={styles.item}
                onPress={()=>this.onPressTab({routeName:route.routeName, params:route.params})}>
                <Image
                  style={{width: 24, height: 24}}
                  resizeMode='contain'
                  source={icon}/>
                <Text style={{fontSize: 12, color: isActive ? '#FF6347' : 'gray' }}>{label}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: Platform.OS == 'ios' ? 55 : 64,
    alignItems: 'flex-end',
  },
  item: {
    width: WIDTH_ITEM,
    height: 55,
    borderTopWidth: 1,
    borderTopColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  }
});
