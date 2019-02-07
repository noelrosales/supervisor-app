import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableNativeFeedback } from 'react-native';

class AttendeesScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                },
                {
                    ic: 1,
                    name: 'John Doe',
                    in: '8:00 AM',
                    out: '5:00 PM'
                }
            ]
        }
    }

    renderRow = ({item}) => {
        return(
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Ratings')}>
                <View style={styles.card}>
                    <View style={styles.attendee}>
                        <Text style={styles.bold}>NRIC / IC: {item.ic}</Text>
                        <Text style={{fontWeight: '700', marginBottom: 10}}>{item.name}</Text>
                        <View style={styles.timeContainer}>
                            <View style={styles.time}>
                                <Text style={styles.bold}>Clock in</Text>
                                <Text style={styles.bold}>{item.in}</Text>
                            </View>
                            <View style={styles.time}>
                                <Text style={styles.bold}>Clock out</Text>
                                <Text style={styles.bold}>{item.out}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <Text>></Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
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
        flex: 1
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1
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
