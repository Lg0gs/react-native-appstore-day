import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Date = ({ currentDay }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.currentDay}>{currentDay}</Text>
            <View style={styles.todayContainer}>
                <Text style={styles.today}>Today</Text>
                <Icon
                    name="person-circle-outline"
                    color="rgb(0, 122, 255)"
                    size={41} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 5,
        width: '85%',
        alignSelf: 'center'
    },
    currentDay: {
        color: 'rgb(122, 123, 125)',
        fontWeight: '500',
        fontSize: 15
    },
    todayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    today: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})