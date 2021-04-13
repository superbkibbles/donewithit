import React from 'react';
import { StyleSheet, Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ children, style, ...otherProps }) {
    return (
    <Text style={[defaultStyles.text, style]} { ...otherProps }>{ children }</Text>
    )
}

const styles = StyleSheet.create({
    // text: {
    //     ...Platform.select({
    //         ios: {
    //             fontSize: 20,
    //             fontFamily: 'Avenir'
    //         },
    //         android: {
    //             fontSize: 18,
    //             fontFamily: 'Roboto'
    //         }
    //     })
        
    // }
})
