import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableNativeFeedback } from 'react-native';

class JobsScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 2,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 3,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 4,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 5,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 6,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                },
                {
                    id: 7,
                    desc: 'Lorem Ipsum',
                    time: '8:00 AM - 5:00 PM',
                    workers: 30
                }
            ]
        }
    }

    static navigationOptions = {
        title: 'ON GOING JOBS',
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTintColor: '#fff'
    };

    renderRow = ({item}) => {
        return(
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Attendees')}>
                <View style={styles.card}>
                    <View style={styles.job}>
                        <Text style={styles.bold}>JOB ID: {item.id}</Text>
                        <Text style={styles.bold}>{item.desc}</Text>
                        <Text style={styles.bold}>{item.time}</Text>
                        <Text>{item.workers} workers</Text>
                    </View>
                    <View style={styles.icon}>
                        <Text>></Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

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

export default JobsScreen;

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
    job: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    icon: {
        justifyContent: 'center'
    },
    bold: {
        fontWeight: '700'
    },

})