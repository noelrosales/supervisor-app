import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  state = {
    isLoggedIn: true
  }

  handleLogin = (username, password) => {
    if ( username === 'admin' && password === 'admin' ) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      alert('Invalid Login Attemp')
    }
  }


  render() {
    const {isLoggedIn } = this.state;

    {
      if(isLoggedIn) {
        return <AppNavigator />
      } else {
        return <LoginScreen login={this.handleLogin}/>
      }
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
