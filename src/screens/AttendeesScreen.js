import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableNativeFeedback } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import AttendeeCard from '../components/AttendeeCard';

class AttendeesScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4'
                },
                {
                    ic: 2,
                    name: 'Travis Barker',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4'
                },
                {
                    ic: 3,
                    name: 'Venus Aversa',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4'
                },
                {
                    ic: 4,
                    name: 'Dani Filth',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4'
                },
                {
                    ic: 5,
                    name: 'Phil Anselmo',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/5?v=4'
                },
                {
                    ic: 6,
                    name: 'Karl Roy',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4'
                },
                {
                    ic: 7,
                    name: 'Kirk Hammet',
                    in: '8:00 AM',
                    out: '5:00 PM',
                    schedule: '13 Jan, 10am - 4pm',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/7?v=4'
                }
            ]
        }
    }

    renderRow = ({item}) => {
        return(    
            <AttendeeCard attendee={item} navigation={this.props.navigation} />
        )
    }

    static navigationOptions = {
        title: 'ATTENDEES',
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
        <FlatList 
            style={styles.container}
            data={this.state.data}
            renderItem={this.renderRow}
            keyExtractor={(item,index)=>index.toString()}
        />
    );
  }
}

export default AttendeesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    card: {
        flexDirection: 'row'
    },
    attendee: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    icon: {
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

})
