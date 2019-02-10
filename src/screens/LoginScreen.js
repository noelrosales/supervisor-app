import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableNativeFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    
      render() {
        const { username, password } = this.state;
        return (
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
            >
              <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/icon.png')}
                    />
                    <Text style={styles.title}>Supervisor App</Text>
                </View>

                <View>
                    <View style={styles.form}>
                        <TextInput 
                            placeholder='Username'
                            returnKeyType='next'
                            style={styles.input}
                            onChangeText={(text)=>this.setState({username:text})}
                        />

                        <TextInput 
                            placeholder='Password'
                            returnKeyType='go'
                            style={styles.input}
                            secureTextEntry
                            onChangeText={(text)=>this.setState({password:text})}
                        />

                        <TouchableNativeFeedback 
                            onPress={() => this.props.login(username,password)}
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>    
            </KeyboardAvoidingView>
          );
      }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logoContainer: {
      alignItems: 'center',
      height: 400,
      justifyContent: 'center'
  },
  logo: {
      height: 100,
      width: 100
  },
  title: {
      marginTop: 10,
      width: 160,
      textAlign: 'center'
  },
  form: {
    padding: 40  
  },
  input: {
      height: 40,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#666666'
  },
  buttonContainer: {
      backgroundColor: 'orange',
      paddingVertical: 15
  },
  buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: '700'
  }
});