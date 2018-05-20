import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';
 import { Content, Form, Item, Input, Label } from 'native-base'

const { width, height } = Dimensions.get('window')

class Otp extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
      placeholder : {
        text: 'Enter your phone number',
        color: '#f38e88'
      },
      phoneNumberValue : ''
    }

    onTextInputFocus = () => {
      this.setState({
        placeholder: {
          color: '#fff',
          text: 'Phone number'
        }
      })
    }

    onChangePhoneNumber = (value) => {
      this.setState({
        phoneNumberValue: value,
      })
    }

    onTextInputBlur = () => {
      if (this.state.phoneNumberValue !== '') {
        return
      }
      this.setState({
        placeholder: {
          color: '#f38e88',
          text: 'Enter your phone number'
        }
      })
    }

    onPressButton = () => {
      this.props.navigation.navigate('RefFriend')
    }

    render() {
        const { placeholder, phoneNumberValue } = this.state;
        return (
            <View style={{flex:1}}>
              <Content contentContainerStyle={styles.container}>
                <Image
                  resizeMode='contain'
                  style={styles.logo}
                  source={require('../../../assets/logo.png')}/>
                <View style={styles.containerForm}>
                  <Item floatingLabel style={styles.textInput}>
                    <Label style={{color:placeholder.color}}>{placeholder.text}</Label>
                    <Input
                      style={{color:'#fff'}}
                      onFocus={this.onTextInputFocus}
                      onBlur={this.onTextInputBlur}
                      value={phoneNumberValue}
                      onChangeText={this.onChangePhoneNumber}/>
                  </Item>
                  <TouchableOpacity
                    style={styles.button}
                    activeOpacity={.7}
                    onPress={this.onPressButton}>
                    <Image
                      style={styles.imageButton}
                      source={require('../../../assets/paper_plane_red.png')}/>
                  </TouchableOpacity>
                </View>
              </Content>
            </View>
        );
    }
}

export default Otp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 33,
        paddingTop: 193,
        backgroundColor: '#eb342e'
    },
    logo: {
        height: 63,
        width: 186
    },
    containerForm: {
      flexDirection: 'row',
      marginTop: 24
    },
    textInput: {
      height: 48,
      width: width - 66,
      // borderBottomWidth: Platform.OS == 'ios' ? .5 : 0,
      // borderBottomColor: '#f38e88'
    },
    button: {
      position: 'absolute',
      top: 17,
      right: 16,
      height: 56,
      width: 56,
      borderRadius: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageButton: {
      width: 22,
      height: 17.8
    }
})
