import React from 'react';
import {View} from 'react-native';

export const Test = (props) => {
    console.warn(props.children[0]);
    return (
        <View />
    )
};
