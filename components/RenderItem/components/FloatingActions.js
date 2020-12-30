import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { BottomActions } from './BottomActions';


const { height } = Dimensions.get('window');
const THRESHOLD = height - (height / 3) + 70;


export const FloatingActions = ({ item, scrollY }) => {
    const translateY = interpolate(scrollY, {
        inputRange: [0, THRESHOLD - 50, THRESHOLD, 950, 1000],
        outputRange: [0, 0, -80, -80, 0],
        extrapolate: Extrapolate.CLAMP
    })
    
    return (
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
            <BottomActions item={item} bgColor="rgb(215, 215, 215)" />
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -70,
        width: '95%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf: 'center',
        overflow: 'hidden',
        opacity: .96
    }
})