import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { block, call, Clock, clockRunning, cond, eq, event, Extrapolate, interpolate, set, spring, startClock, stopClock, useCode, useValue } from 'react-native-reanimated';

import { Date } from './components/Date';
import { FullText } from './components/FullText';
import { BottomDesc } from './components/BottomDesc';
import { BottomActions } from './components/BottomActions';
import { Content } from './components/Content';
import { FloatingActions } from './components/FloatingActions';


const { width, height } = Dimensions.get('window');


export const RenderItem = ({ item, setScrollEnabled, setPosition }) => {
    if (item.id === 'date') {
        return <Date currentDay={item.currentDay} />
    }

    const scrollY = useValue(0);

    const clock = useRef(new Clock()).current;
    const viewRef = useRef(View.prototype);
    const scrollViewRef = useRef();

    const [yPos, setYPos] = useState(0);
    const [innerScrollEnabled, setInnerScrollEnabled] = useState(false);

    useEffect(() => {
        setPosition(animState.position);
    }, []);

    const animState = {
        finished: useValue(0),
        position: useValue(0),
        time: useValue(0),
        velocity: useValue(0)
    }

    const animsConfig = {
        damping: 300,
        mass: 40,
        stiffness: 900,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        toValue: useValue(0)
    }

    const onHandlerStateChange = event([
        {
            nativeEvent: ({ state }) => block([
                cond(
                    eq(state, State.END), [
                        // eslint-disable-next-line no-empty-pattern
                        call([animsConfig.toValue], ([fnsh]) => {
                            viewRef.current.measure((x, y, w, h, absX, absY) => {
                                setYPos(absY);
                                setInnerScrollEnabled(!fnsh ? true : false);
                                setScrollEnabled(!fnsh ? false : true);
                            });
                        }),
                        set(animsConfig.toValue, cond(eq(animsConfig.toValue, 0), 1, 0)),
                        startClock(clock)
                    ]
                )
            ])
        }
    ]);

    useCode(() => [
        cond(
            clockRunning(clock), [
                call([animsConfig.toValue], ([fnsh]) => {
                    if (!fnsh) {
                        if (scrollViewRef.current && scrollViewRef.current.getNode) {
                            const node = scrollViewRef.current.getNode();
                            if (node) {
                                node.scrollTo({ y: 0 });
                            }
                        }
                    }
                }),
                spring(clock, animState, animsConfig)
            ]
        ),
        cond(
            animState.finished, [
                set(animState.finished, 0),
                stopClock(clock),
            ]
        )
    ], []);

    const onScroll = event([
        {
            nativeEvent: {
                contentOffset: {
                    y: scrollY
                }
            }
        }
    ])

    const nextWidth = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [width - 60, width],
        extrapolate: Extrapolate.CLAMP
    })

    const nextHeight = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [height - (height / 2.7), height],
        extrapolate: Extrapolate.CLAMP
    });

    const nextHeightImg = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [height - (height / 2.7) - 70, height - (height / 3)],
        extrapolate: Extrapolate.CLAMP
    });

    const marginTop = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [0, -yPos / 2],
        extrapolate: Extrapolate.CLAMP
    });

    const borderRadius = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [15, 0],
        extrapolate: Extrapolate.CLAMP
    });

    const scale = interpolate(animState.position, {
        inputRange: [0, .3, .6, 1],
        outputRange: [1, .9, 1, 1],
        extrapolate: Extrapolate.CLAMP
    });

    const opacity = interpolate(animState.position, {
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <TapGestureHandler onHandlerStateChange={onHandlerStateChange}>
            <Animated.View style={[styles.container, { width: nextWidth, height: nextHeight, marginTop, transform: [{ scale }] }]}>
                <Animated.View style={[styles.innerContainer, { width: nextWidth, height: nextHeight, borderRadius, marginTop }]}>
                    <Animated.ScrollView
                        ref={scrollViewRef}
                        scrollEventThrottle={16}
                        onScroll={onScroll}
                        scrollEnabled={innerScrollEnabled}
                        showsVerticalScrollIndicator={false}>
                        <View ref={viewRef} style={{ flex: 1 }}>    
                            <Content
                                item={item}
                                nextWidth={nextWidth}
                                nextHeight={nextHeightImg}
                                opacity={opacity} />
                            <BottomActions item={item} />
                            <FullText item={item} />
                            <BottomDesc item={item} />
                        </View>
                    </Animated.ScrollView>
                    <FloatingActions item={item} scrollY={scrollY} />
                </Animated.View>
            </Animated.View>
        </TapGestureHandler>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: -15, height: 10 },
        shadowOpacity: .3,
        shadowRadius: 30
    },
    innerContainer: {
        borderRadius: 15,
        backgroundColor: '#fff',
        alignSelf: 'center',
        overflow: 'hidden'
    }
});