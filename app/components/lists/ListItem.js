import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../AppText';
import colors from '../../config/colors';

export default function ListItem ({ title, subTitle, image, IconComponent, onPress, renderRightAction }) {
    return (
        <Swipeable
            renderRightActions={renderRightAction}
        >
            <TouchableHighlight
                underlayColor={ colors.light }
                onPress={ onPress }
            >
                <View style={ styles.container }>
                    { IconComponent }
                    {
                        image &&
                            <Image style={ styles.image } source={ image } />
                    }
                    <View style={ styles.detailsContainer }>
                        <AppText style={ styles.title } numberOfLines={1}>{ title }</AppText>
                        { subTitle && <AppText style={ styles.subTitle } numberOfLines={2}>{ subTitle }</AppText>}
                    </View>
                    <MaterialCommunityIcons color={ colors.medium } name='chevron-right' size={ 25 } />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    subTitle: {
        color: colors.medium
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    }
})
