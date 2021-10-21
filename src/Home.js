// Home.js
import React from 'react';
import {View, Text, Button, StyleSheet, AsyncStorage} from 'react-native';
import {goToAuth} from './navigation';

import {USER_KEY, ADMIN_USER_NAME} from './config';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAdminUser: false};
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem(USER_KEY);
    if (user === ADMIN_USER_NAME) {
      this.setState({isAdminUser: true});
    }
  }
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    };
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      goToAuth();
    } catch (err) {
      console.log('error signing out...: ', err);
    }
  };
  render() {
    const {isAdminUser} = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={this.logout} title="Sign Out" />
        <Button title="View next screen" />
        {isAdminUser && <Button title="Create another user" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
