import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  textInputContainer,
  Platform,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';
import { Content, Form, Item, Input, Label, Icon } from 'native-base'
import { StackActions, NavigationActions } from 'react-navigation';

//CUSTOM COMPONENT
import BackButton from '../../../components/backButton';

const { width, height } = Dimensions.get('window')
const WIDTH_NUMBER_INPUT = (width - 66) / 4.5
const CENTER_NUMBER_POSITION = (WIDTH_NUMBER_INPUT) / 3

class OtpValidation extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
      value1 : '',
      value2 : '',
      value3 : '',
      value4 : '',
    }

    onChangeValue(key, value, ref=null){
      if (value === '') {
        const obj = {}
        obj[key] = value
        this.setState(obj)
        return
      }

      if (ref != null) {
        this.refs[ref]._root.focus()
      }
      const obj = {}
      obj[key] = value
      this.setState(obj)

      const { value1, value2, value3, value4 } = this.state ;
      let tempObj = { value1, value2, value3, value4 }
      tempObj[key] = value

      if (tempObj.value1 !== '' && tempObj.value2 !== '' && tempObj.value3 !== '' && tempObj.value4 !== '') {
        console.log('dispatch-to-api-OTP-validation');
        this.doValidate()
      }

    }

    doValidate = () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
      });
      this.props.navigation.dispatch(resetAction);
    }

    render() {;
        const { value1, value2, value3, value4 } = this.state;
        return (
            <View style={{flex:1}}>
              <Content contentContainerStyle={styles.container}>
                <BackButton onPress={()=>this.props.navigation.goBack()}/>
                <View style={{marginRight: 28, marginBottom: 65}}>
                  <Text style={{fontSize:16, color:'#fff'}}>
                    We’ve just sent you an one time password to your phone number
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 31}}>
                  <Image
                    resizeMode='contain'
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}/>
                  <Text style={{color: '#fff', fontSize: 20}}>
                    00:58
                  </Text>
                </View>
                <View style={styles.containerForm}>
                  <Item style={styles.textInputContainer}>
                    <Input
                      style={styles.input}
                      maxLength={1}
                      ref='input1'
                      value={value1}
                      keyboardType='numeric'
                      onChangeText={(value)=>this.onChangeValue('value1', value, 'input2')}/>
                  </Item>
                  <Item style={styles.textInputContainer}>
                    <Input
                      style={styles.input}
                      maxLength={1}
                      ref='input2'
                      keyboardType='numeric'
                      value={value2}
                      onChangeText={(value)=>this.onChangeValue('value2', value, 'input3')}/>
                  </Item>
                  <Item style={styles.textInputContainer}>
                    <Input
                      style={styles.input}
                      maxLength={1}
                      ref='input3'
                      keyboardType='numeric'
                      value={value3}
                      onChangeText={(value)=>this.onChangeValue('value3', value, 'input4')}/>
                  </Item>
                  <Item style={styles.textInputContainer}>
                    <Input
                      style={styles.input}
                      maxLength={1}
                      ref='input4'
                      keyboardType='numeric'
                      value={value4}
                      onChangeText={(value)=>this.onChangeValue('value4', value)}/>
                  </Item>
                </View>
                <View style={{width: width - 62, alignItems: 'flex-end'}}>
                  <TouchableOpacity style={{marginTop:30, paddingTop: 15}}>
                    <Text style={{color: '#fff'}}>
                      RESEND THE CODE
                    </Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </View>
        );
    }
}

export default OtpValidation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 33,
        paddingTop: 88,
        backgroundColor: '#eb342e'
    },
    logo: {
        height: 63,
        width: 186
    },
    containerForm: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      width: (width - 66),
    },
    textInputContainer: {
      height: 48,
      width: WIDTH_NUMBER_INPUT,
    },
    input: {
      color:'#fff',
      fontSize:30,
      paddingLeft: CENTER_NUMBER_POSITION
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
