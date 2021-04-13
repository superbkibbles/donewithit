import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={ styles.container }>
            <TouchableOpacity onPress={onPress}>
                    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
                    <AppText style={ styles.lable }>{ item.lable }</AppText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    lable: {
        marginTop: 10,
        textAlign: 'center'
    }
})
