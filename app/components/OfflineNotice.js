import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo'

import colors from '../config/colors';
import AppText from './AppText';

export default function OfflineNotice() {
    const connection = useNetInfo();
    if (connection.type !== 'unknown' && connection.isInternetReachable === 'fslse')
        return (
        <View style={ styles.container }>
            <AppText style={ styles.text }>No Internet connection</AppText>
        </View>
        )
    return null
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        top: Constants.statusBarHeight,
        zIndex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.white,
    },
    text: {
        color: colors.white
    }
})