import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faRocket, faLayerGroup, faSearch, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';


const tabs = [
    {
        name: 'Today',
        icon: faClipboardList,
        color: 'rgb(0, 135, 255)'
    },
    {
        name: 'Games',
        icon: faRocket,
        color: 'rgb(124, 124, 124)'
    },
    {
        name: 'Apps',
        icon: faLayerGroup,
        color: 'rgb(124, 124, 124)'
    },
    {
        name: 'Arcade',
        icon: faFileAlt,
        color: 'rgb(124, 124, 124)'
    },
    {
        name: 'Search',
        icon: faSearch,
        color: 'rgb(124, 124, 124)'
    }
]


export const Footer = ({ position }) => {
    const translateY = interpolate(position, {
        inputRange: [0, .5, 1],
        outputRange: [0, 55, 55],
        extrapolate: Extrapolate.CLAMP
    })

    return (
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
            {tabs.map(tab => (
                <View key={tab.name} style={{ alignItems: 'center' }}>
                    <FontAwesomeIcon
                        icon={tab.icon}
                        size={20}
                        color={tab.color} />
                    <Text style={{ color: tab.color, marginTop: 5, fontSize: 12 }}>{tab.name}</Text>
                </View>
            ))}
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(231, 231, 231)'
    }
})
