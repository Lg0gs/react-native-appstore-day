import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { RenderItem } from './components/RenderItem/RenderItem';
import { Footer } from './components/Footer';
import DATA from './data';


export const App = () => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [position, setPosition] = useState(new Animated.Value(0));

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                scrollEnabled={scrollEnabled}
                data={DATA}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <RenderItem item={item} setScrollEnabled={setScrollEnabled} setPosition={setPosition} />}
            />
            <Footer position={position} />
        </View>
    )
}