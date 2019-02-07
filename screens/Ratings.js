import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class RatingsScreen extends React.Component {
    static navigationOptions = {
        title: 'RATINGS',
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
  render() {
    return (
      <View style={styles.container}>
        <Text>Ratings Screen</Text>
        <Button 
            title="GO TO JOBS"
            onPress={() => this.props.navigation.navigate('Jobs')}
        />
        <Button 
            title="GO TO ATTENDEES"
            onPress={() => this.props.navigation.navigate('Attendees')}
        />
      </View>
    );
  }
}

export default RatingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});