/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const TAB_BOST_POSITION = (width / 2) - 32;
const WIDTH_ITEM = ((width / 2) - 32) / 2 ;

export default class CustomTabBar extends Component {
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
                  onPress={() => {navigation.navigate(route.routeName)}}>
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
                style={styles.item}
                onPress={() => {navigation.navigate(route.routeName)}}>
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
    height: 64,
    alignItems: 'flex-end'
  },
  item: {
    width: WIDTH_ITEM,
    height: 55,
    borderTopWidth: 1,
    borderTopColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
