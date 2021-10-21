import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';

import {goHome} from './navigation';
import {USER_KEY} from './config';

export default class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  };
  onChangeText = (key, value) => {
    this.setState({[key]: value});
  };

  findMax = (inputArray) => {
    //{max: 3233322, min: 1}
    let max = 0;
    let min;

    for (let i = 0; i <= inputArray.length; i++) {
      if (inputArray[i] > max) {
        max = inputArray[i];
      }
    }

    return {max: max, min: min};
  };
  componentDidMount() {
    // let result = this.Sum(2)(3); // 5
    // console.log('Result: ' + result);

    this.findMax([3, 323, 3, 1, 323322]);
  }
  Sum = (i) => {
    return (b) => {
      return i + b;
    };
  };
  signIn = async () => {
    const {username, password} = this.state;
    try {
      // login with provider
      const user = await AsyncStorage.setItem(USER_KEY, username);
      console.log('user successfully signed in!', user);
      goHome();
    } catch (err) {
      console.log('error:', err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>

        <View
          style={{
            flex: 1,
            position: 'absolute',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text
            style={{
              color: 'blue',
              flex: 1,
              marginLeft: 25,
              justifyContent: 'center',
            }}>
            1
          </Text>
          <Text
            style={{
              color: 'blue',
              flex: 1,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            2
          </Text>
          <Text
            style={{
              color: 'blue',
              flex: 1,
              textAlign: 'right',
              marginRight: 25,
              justifyContent: 'center',
            }}>
            3
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
});
