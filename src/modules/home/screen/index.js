import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content } from 'native-base';
import { NavigationActions } from 'react-navigation';

import Banner from '../components/banner';
import Feed from '../components/feed';
import HorizontalListMerchant from '../../../components/horizontalListMerchant';

class Home extends Component {

    static navigationOptions = ({}) => {
      return {
        header: null,
        tabBarOnPress: () => alert('ss')
      }

    }

    state = {  }

    componentDidMount(){
      const refScrollViewHome = this.refs._scrollViewHome._root
      const setParamsAction = NavigationActions.setParams({
        params: { refScrollViewHome },
        key: 'Home',
      });
      this.props.navigation.dispatch(setParamsAction);
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#fff'}}>
              <Content ref='_scrollViewHome'>
                <Banner />
                <HorizontalListMerchant
                  title='Near By Me'/>
                <Feed />
              </Content>
            </View>
        );
    }
}

export default Home;
