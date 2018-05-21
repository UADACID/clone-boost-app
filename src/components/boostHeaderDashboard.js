/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Coupon from './coupon';

const { height, width } = Dimensions.get('window');

class BoostHeaderDashboard extends Component {
  render() {
    const routeName = this.props.navigation.getParam('routeName', '');
    return (
      <View>
        <CustomStatusBar />
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={[styles.containerItem,{paddingLeft: 10}]}>
              <Image
                resizeMode='contain'
                style={{width: 24, height: 24}}
                source={require('../assets/joystick_white.png')}/>
              <Coupon />
            </View>
          </TouchableOpacity>
          <View style={[styles.containerItem,{justifyContent: 'center'}]}>
            <Image
              resizeMode='contain'
              style={{width: 80, height: 27}}
              source={require('../assets/logo.png')}/>
          </View>
          <View style={[styles.containerItem,{flexDirection: 'row', justifyContent: 'flex-end'}]}>
            {routeName == 'BoostSpot' ?
              <TouchableOpacity style={{paddingRight: 10, paddingLeft:10}}>
                <Image
                  resizeMode='contain'
                  style={{width: 24, height: 24}}
                  source={require('../assets/map_icon_white.png')}/>
              </TouchableOpacity>
            : null}
            <TouchableOpacity style={{paddingRight: 10}}>
              <Image
                resizeMode='contain'
                style={{width: 24, height: 24}}
                source={require('../assets/notifications.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const CustomStatusBar = () => {
  if (Platform.OS !== 'ios') {
    return null
  }
  return (
    <View style={{width, height: 25, backgroundColor: '#cf2d28'}}>
    </View>
  )
}

export default withNavigation(BoostHeaderDashboard);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height : 44,
    width,
    backgroundColor : '#eb342e'
  },
  containerItem : {
    flexDirection: 'row',
    width : width / 3,
  }
});
