import React from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');


export const Content = ({ item, nextWidth, nextHeight, opacity }) => {
    return (
        <Animated.View style={{ width: nextWidth, height: nextHeight, overflow: 'hidden' }}>
            <Text
                numberOfLines={2}
                style={styles.gameOfTheDay}>
                    Game of the day
            </Text>
            <Animated.View style={[styles.closeBtn, { opacity }]}>
                <Icon name="close-outline" size={22} color="#fff" />
            </Animated.View>
            <Image
                source={{ uri: item.img }}
                resizeMode="cover"
                style={styles.img} />
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    gameOfTheDay: {
        width: 150,
        position: 'absolute',
        left: 10,
        top: 20,
        zIndex: 1,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .4)',
        width: 25,
        height: 25,
        borderRadius: 15,
        position: 'absolute',
        top: 40,
        right: 10,
        zIndex: 1,
    }, 
    img: {
        width,
        height: height - (height / 3),
        alignSelf: 'center'
    },
})