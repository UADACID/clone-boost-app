import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

class Splash extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {  }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Otp')
        }, 500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                  resizeMode='contain'
                  style={styles.logo}
                  source={require('../../../assets/logo.png')}/>
            </View>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eb342e'
    },
    logo: {
        height: 63,
        width: 140
    }
})
