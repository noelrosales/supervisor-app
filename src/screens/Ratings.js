import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, ScrollView} from 'react-native';
import {Button, Avatar, Card, AirbnbRating} from 'react-native-elements'

class RatingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atendee: {},
      rating: 0,
      feedback: '',

    }
  }

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
    const attendee = this.props.navigation.getParam('attendee')
    return (
      <KeyboardAvoidingView 
        keyboardVerticalOffset={100}
        style={{flex:1}}
        behavior="padding"
      >
        <ScrollView keyboarShouldPersistTaps='handled'>
          <Avatar
            rounded
            size='xlarge'
            source={{uri:attendee.avatar_url}}
            containerStyle={{alignSelf:'center', marginTop: 20}}
          />

          <Card>
            <Text>NRIC / IC: {attendee.ic}</Text>
            <Text style={{fontWeight: '700', marginBottom: 10, fontSize:19}}>{attendee.name}</Text>
            <View style={styles.timeContainer}>
                <View style={styles.time}>
                    <Text style={styles.bold}>Clock in</Text>
                    <Text>{attendee.in}</Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.bold}>Clock out</Text>
                    <Text>{attendee.out}</Text>
                </View>
            </View>
            <View style={{marginTop: 10, flex: 1}}>
              <Text style={styles.bold}>Job Schedule</Text>
              <Text>{attendee.schedule}</Text>
            </View>
          </Card>

          <AirbnbRating 
            reviews={[]} 
            onFinishRating={(rating)=> alert(rating)}
          />

          <View style={{paddingHorizontal: 20}}>
            <TextInput
              multiline = {true}
              editable = {true}
              numberOfLines = {5}
              style={{borderWidth: 1, borderColor: 'gray',  marginVertical: 15, paddingHorizontal: 10}}
            />
            <Button
              title="SUBMIT"
              buttonStyle={{backgroundColor: 'orange'}}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default RatingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  bold: {
      fontWeight: '700'
  },
  timeContainer: {
      flexDirection: 'row'
  },
  time: {
      marginRight: 10
  }
});