import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({ 
    width="100%",
    placeholder,icon,
    items,
    selectedItem,
    numberOfColumns=1,
    onSelectItem,
    PickerItemComponent = PickerItem
    , ...otherProps
}) {
    const [modalVisible, setModalVisible ] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={ [styles.container, { width }] }>
                    { icon && <MaterialCommunityIcons name={ icon } color={ defaultStyles.colors.medium } size={20} style={ styles.icon } /> }

                    <AppText style={ selectedItem? styles.text: styles.placeholder } >{ selectedItem? selectedItem.lable: placeholder }</AppText>
                    
                    <MaterialCommunityIcons name={ 'chevron-down' } color={ defaultStyles.colors.medium } size={20} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString() }
                        numColumns={ numberOfColumns }
                        renderItem={({ item }) => <PickerItemComponent
                            item={ item }
                            lable={ item.lable }
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal>       
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        // width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
});