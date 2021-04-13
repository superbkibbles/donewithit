import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity style={{ height: 80, width: 80 }} onPress={ onPress }>
            <View style={ styles.container }>
                <MaterialCommunityIcons name='plus-circle' color={ colors.white } size={ 40 } />
            </View>
        </TouchableOpacity>
 
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 40,
        height: 80,
        width: 80,
        bottom: 20,
        borderColor: colors.white,
        borderWidth: 10
    }
})