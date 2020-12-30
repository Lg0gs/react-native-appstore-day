import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { block, call, ceil, Clock, clockRunning, cond, Easing, eq, event, Extrapolate, interpolate, set, spring, startClock, stopClock, timing, useCode, useValue } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');


export const RenderItem = ({ item }) => {
    const [zIndex, setIndex] = useState(-1);

    const clock = useRef(new Clock()).current;

    const animState = {
        finished: useValue(0),
        position: useValue(0),
        time: useValue(0),
        frameTime: useValue(0)
    }

    const animsConfig = {
        toValue: useValue(0),
        duration: 500,
        easing: Easing.linear
    }

    const onHandlerStateChange = event([
        {
            nativeEvent: ({ state }) => block([
                cond(
                    eq(state, State.END), [
                        call([], ([]) => setIndex(100)),
                        set(animsConfig.toValue, 1),
                        startClock(clock)
                    ]
                )
            ])
        }
    ]);

    useCode(() => [
        cond(
            clockRunning(clock), [
                timing(clock, animState, animsConfig)
            ]
        ),
        cond(
            animState.finished, [
                stopClock(clock)
            ]
        )
    ], []);

    const rotateY = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: ['180deg', '360deg'],
        extrapolate: Extrapolate.CLAMP
    })

    const wdth = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [width - 40, width],
        extrapolate: Extrapolate.CLAMP
    })

    const hght = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [50, height],
        extrapolate: Extrapolate.CLAMP
    })

    const marginTop = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [0, -75],
        extrapolate: Extrapolate.CLAMP
    })

    return (
        <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
            <Animated.View style={styles.container}>
                <View style={{ zIndex: zIndex * -1, width: '100%', height: '100%', borderRadius: 15, backgroundColor: 'pink' }}>
                    <Image
                        source={{ uri: 'https://pbs.twimg.com/media/D1-yyZIXcAAyp1s.jpg:large' }}
                        resizeMode="cover"
                        style={{ width: '100%', height: '100%', borderRadius: 15 }} />
                </View>
                <Animated.View style={{ position: 'absolute', marginTop, width: wdth, borderRadius: 10, height: hght, alignSelf: 'center', transform: [{ rotateY }] }}>
                    <View style={{ zIndex: zIndex, width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden' }}>
                        <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ height: 800 }}>
                            <Image source={{ uri: item.img }} resizeMode="cover" style={{ width: '100%', height: 500 }} />
                            <Animated.View style={{ width: '100%', height: 100, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={item.publisherAvatar}
                                        resizeMode="cover"
                                        style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 20, marginRight: 5 }} />
                                    <View style={{ width: '50%', marginLeft: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                        <Text numberOfLines={2} style={{ color: '#999', fontSize: 16, fontWeight: '400' }}>{item.subTitle}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ width: 70, height: 28, borderRadius: 14, marginRight: 20, backgroundColor: 'rgb(232, 232, 235)', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'rgb(18, 91, 248)' }}>GET</Text>
                                    </View>
                                    <Text style={{ fontSize: 9, color: '#999', position: 'absolute', bottom: -15 }}>In-App Purchases</Text>
                                </View>
                            </Animated.View>
                            <Animated.View style={{ width: '100%', height: 100, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={item.publisherAvatar}
                                        resizeMode="cover"
                                        style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 20, marginRight: 5 }} />
                                    <View style={{ width: '50%', marginLeft: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                        <Text numberOfLines={2} style={{ color: '#999', fontSize: 16, fontWeight: '400' }}>{item.subTitle}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ width: 70, height: 28, borderRadius: 14, marginRight: 20, backgroundColor: 'rgb(232, 232, 235)', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'rgb(18, 91, 248)' }}>GET</Text>
                                    </View>
                                    <Text style={{ fontSize: 9, color: '#999', position: 'absolute', bottom: -15 }}>In-App Purchases</Text>
                                </View>
                            </Animated.View>
                            <Animated.View style={{ width: '100%', height: 100, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={item.publisherAvatar}
                                        resizeMode="cover"
                                        style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 20, marginRight: 5 }} />
                                    <View style={{ width: '50%', marginLeft: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                                        <Text numberOfLines={2} style={{ color: '#999', fontSize: 16, fontWeight: '400' }}>{item.subTitle}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ width: 70, height: 28, borderRadius: 14, marginRight: 20, backgroundColor: 'rgb(232, 232, 235)', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'rgb(18, 91, 248)' }}>GET</Text>
                                    </View>
                                    <Text style={{ fontSize: 9, color: '#999', position: 'absolute', bottom: -15 }}>In-App Purchases</Text>
                                </View>
                            </Animated.View>
                        </ScrollView>
                    </View>
                </Animated.View>
            </Animated.View>
        </TapGestureHandler>
    )
}


const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 150,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        marginVertical: 5
    }
})