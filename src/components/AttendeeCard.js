import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const AttendeeCard = ({attendee, navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Ratings', {attendee: attendee})}>
            <Card wrapperStyle={styles.card}>
                <View style={styles.attendee}>
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
                </View>
                <View style={styles.icon}>
                    <Icon name='keyboard-arrow-right' />
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default withNavigation(AttendeeCard);

const styles = StyleSheet.create({
    container: {
        flex: 1
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