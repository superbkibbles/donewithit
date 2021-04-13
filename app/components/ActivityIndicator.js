import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function ActivityIndicator({ visible = false }) {
    if (!visible) return null
    return <View style={ styles.overlay }>
        <LottieView
            source={ require('../assets/animations/loader.json') }
            autoPlay
            loop
        />
    </View> 
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        backgroundColor: colors.white,
        opacity: .8
    }
})