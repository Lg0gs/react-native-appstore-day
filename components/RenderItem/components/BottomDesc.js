import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const BottomDesc = ({ item }) => {
    return (
        <>
            <View style={styles.descContainer}>
                <Image
                    source={{ uri: item.innerAvatar }}
                    resizeMode="contain"
                    style={styles.avatar} />
                <Text style={styles.title}>Clash Of Clans</Text>
                <Text style={styles.description}>Lead Your Clan to Victory!</Text>
                <View style={styles.getBtn}>
                    <Text style={styles.getTxt}>GET</Text>
                </View>
            </View>
            <View style={styles.shareBtn}>
                <Icon
                    name="share-outline"
                    size={27}
                    color="rgb(33, 108, 216)" />
                <Text style={styles.shareTxt}>Share Story</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    descContainer: {
        width: '100%',
        height: 270,
        backgroundColor: 'rgb(238, 240, 242)',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: '400'
    },
    description: {
        fontSize: 18,
        fontWeight: '300',
        color: 'rgb(112, 114, 116)'
    },
    getBtn: {
        width: 70,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(14, 94, 252)'
    },
    getTxt: {
        fontWeight: 'bold',
        color: '#fff'
    },
    shareBtn: {
        marginTop: 100,
        marginBottom: 70,
        width: '50%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'rgb(239, 235, 244)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareTxt: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(33, 108, 216)',
        marginLeft: 5
    }
})