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
import { Content, Form, Item, Input, Label, Icon } from 'native-base'

//CUSTOM COMPONENT
import BackButton from '../../../components/backButton';

const { width, height } = Dimensions.get('window')

class RefFriend extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
      placeholder : {
        text: "Enter your friend's ID (optional)",
        color: '#f38e88'
      },
      friendId : ''
    }

    onTextInputFocus = () => {
      this.setState({
        placeholder: {
          color: '#fff',
          text: "your friend's ID"
        }
      })
    }

    onChangePhoneNumber = (value) => {
      this.setState({
        friendId: value,
      })
    }

    onTextInputBlur = () => {
      if (this.state.friendId !== '') {
        return
      }
      this.setState({
        placeholder: {
          color: '#f38e88',
          text: "Enter your friend's ID (optional)"
        }
      })
    }

    onPressButton = () => {
      this.props.navigation.navigate('OtpValidation')
    }

    render() {
        const { placeholder, friendId } = this.state;
        return (
            <View style={{flex:1}}>
              <Content contentContainerStyle={styles.container}>
                <BackButton onPress={()=>this.props.navigation.goBack()}/>
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
                      value={friendId}
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

export default RefFriend;

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
