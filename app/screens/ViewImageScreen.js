import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons 
                    name='close'
                    color='white' 
                    size={30} 
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons 
                    name='trash-can-outline' 
                    color='white' 
                    size={35} 
                />
            </View>
            <Image style={ styles.image } source={ require('../assets/chair.jpg') } resizeMode='contain' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 30,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 30,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },

})
