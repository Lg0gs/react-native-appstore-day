import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const BottomActions = ({ item, bgColor = "#fff" }) => {
    return (
        <View style={[styles.bottomActions, { backgroundColor:  bgColor }]}>
            <View style={styles.publisherContainer}>
                <Image
                    source={{ uri: item.publisherAvatar }}
                    resizeMode="cover"
                    style={styles.publisherAvatar} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={2} style={styles.subTitle}>{item.subTitle}</Text>
                </View>
            </View>
            <View style={styles.getBtnContainer}>
                <View style={styles.getBtn}>
                    <Text style={styles.getTxt}>GET</Text>
                </View>
                <Text style={styles.purchasesTxt}>In-App Purchases</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomActions: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    publisherContainer: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
    },
    publisherAvatar: {
        height: 50,
        width: 50,
        borderRadius: 8
    },
    title: {
        fontSize: 17,
        fontWeight: '600'
    },
    subTitle: {
        fontSize: 13,
        color: '#777'
    },
    getBtn: {
        width: 70,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(232, 232, 232)'
    },
    getBtnContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },  
    getTxt: {
        fontWeight: 'bold',
        color: 'rgb(34, 88, 219)'
    },
    purchasesTxt: {
        position: 'absolute',
        bottom: -15,
        fontSize: 8,
        color: 'rgb(130, 130, 130)'
    }
})