/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const { height, width } = Dimensions.get('window');

class DefaultHeader extends Component {

  componentDidMount(){
    if (this.props.hasSearch) {
      this.refs.searchBar.focus()
    }
  }

  render() {

    const {
      hasSearch, hasMap, hasBell, hasClear, hasAdd,
      onChangeSearch, onClickMap, onClickBell, onClear, onAdd
    } = this.props;

    const title = this.props.navigation.getParam('title', '');

    const searchComponent = (
      <TextInput
        ref='searchBar'
        underlineColorAndroid='#eb342e'
        style={{color:'#fff', fontSize:20, marginLeft:10, width: width - 120}}
        value='Seminyak, Kuta'/>
    )

    const mapIcon = (
      <TouchableOpacity style={{paddingLeft:10, paddingRight:10}}>
        <Image
          style={{width:24, height:24}}
          source={require('../assets/map_icon_white.png')}/>
      </TouchableOpacity>
    )

    const bellIcon = (
      <TouchableOpacity style={{paddingRight:10}}>
        <Image
          style={{width:24, height:24}}
          source={require('../assets/notifications.png')}/>
      </TouchableOpacity>
    )

    const clearIcon = (
      <TouchableOpacity style={{paddingRight:10}}>
        <Image
          style={{width:24, height:24}}
          source={require('../assets/close_white.png')}/>
      </TouchableOpacity>
    )

    return (
      <View>
        <CustomStatusBar />
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{paddingLeft: 10}]}
              onPress={()=>this.props.navigation.goBack()}>
                <Image
                  resizeMode='contain'
                  style={{width: 20, height: 20}}
                  source={require('../assets/back_arrow_white.png')}/>
            </TouchableOpacity>
            {hasSearch ? searchComponent : false}
          </View>
          <View style={styles.rowContainer}>
            {hasMap ? mapIcon : false}
            {hasBell ? bellIcon : false}
            {hasClear ? clearIcon : false}
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

export default withNavigation(DefaultHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height : 44,
    width,
    backgroundColor : '#eb342e'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
