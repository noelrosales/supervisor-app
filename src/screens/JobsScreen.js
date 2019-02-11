import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Attendees')}>
                <Card wrapperStyle={styles.card}>
                    <View style={styles.job}>
                        <Text>JOB ID: {item.id}</Text>
                        <Text style={styles.bold}>{item.desc}</Text>
                        <Text style={styles.bold}>{item.time}</Text>
                        <Text style={{marginTop: 10}}>{item.workers} workers</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name='keyboard-arrow-right' />
                    </View>
                </Card>
            </TouchableOpacity>
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
        flex: 1,
        backgroundColor: '#eee'
    },
    card: {
        flexDirection: 'row'
    },
    job: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    icon: {
        justifyContent: 'center'
    },
    bold: {
        fontWeight: '500',
        fontSize: 18,
        color: '#444'
    },

})