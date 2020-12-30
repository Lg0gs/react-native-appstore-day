import React from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';


const { width } = Dimensions.get('window'); 


export const FullText = ({ item }) => {
    return (
        <Text style={styles.container}>
            <Text style={styles.subTitle}>
                <Text style={styles.boldText}>Few could have </Text> 
                anticipated just how influential 
                <Text style={styles.italicTitle}> Clash Of Clans </Text>
                would be when it arrived on the App Store in 2012.{"\n"}{"\n"}{"\n"}
                It has defined and then launched the "build-and-battle" genre into the stratosphere - and it remains wildly successful to this day.{"\n"}{"\n"}{"\n"}
                Why are so many millions of players still clashing every single day? We think it's because of the ease with which this game slots into your daily routine.{"\n"}{"\n"}{"\n"}
            </Text>
            <Image
                source={{ uri: item.innerImg }}
                resizeMode="contain"
                style={styles.img} />
            <Text style={styles.subTitle}>
                Few could have
                anticipated just how influential 
                Clash Of Clans
                would be when it arrived on the App Store in 2012.{"\n"}{"\n"}{"\n"}
                It has defined and then launched the "build-and-battle" genre into the stratosphere - and it remains wildly successful to this day.{"\n"}{"\n"}{"\n"}
                Why are so many millions of players still clashing every single day? We think it's because of the ease with which this game slots into your daily routine.{"\n"}{"\n"}{"\n"}
            </Text>
        </Text>
    )
}


const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        width: '85%',
        alignSelf: 'center',
        marginTop: 20
    },
    subTitle: {
        fontSize: 17,
        color: 'rgb(118, 118, 118)'
    },
    italicTitle: {
        fontSize: 19,
        fontWeight: '400',
        fontStyle: 'italic'
    },
    img: {
        width: width - 60,
        height: 200,
        alignSelf: 'center'
    },
    boldText: {
        fontSize: 19,
        fontWeight: '400',
        color: '#000'
    }
})