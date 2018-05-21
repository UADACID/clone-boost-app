import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';
import HorizontalListMerchant from '../../../components/horizontalListMerchant'
import RedirectSearchBar from '../../../components/redirectSearchBar'

class BoostSpot extends Component {
    state = {  }

    handleOnPressSearch = () => {
      this.props.navigation.navigate('BoostSpotSearch')
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#fff'}}>
              <Content>
                <RedirectSearchBar onPress={this.handleOnPressSearch}/>
                <HorizontalListMerchant
                  title="Editor's Pick"/>
                <HorizontalListMerchant
                  title="Most Popular"/>
                <HorizontalListMerchant
                  title="Nearby Me"/>
                <HorizontalListMerchant
                  title="Newest"/>
              </Content>
            </View>
        );
    }
}

export default BoostSpot;

const styles = StyleSheet.create({

})
