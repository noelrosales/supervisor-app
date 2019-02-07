import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';

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
            <KeyboardAvoidingView behaivior="padding" style={{flex: 1}} enabled>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/icon.png')}
                    />
                    <Text style={styles.title}>Supervisor App</Text>
                </View>

                <View style={styles.formContainer}>
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

                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => this.props.login(username,password)}
                        >
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </KeyboardAvoidingView>
        );
      }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
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
    padding: 20  
  },
  input: {
      height: 40,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderBottomWidth: 1
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