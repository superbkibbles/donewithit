import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from  '../components/Screen';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

const menuItems = [
    { 
        title: 'my listing',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
    },
    { 
        title: 'my messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]

export default function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={ styles.screen }>
            <View style={ styles.container }>
                <ListItem
                    title={ user.name }
                    subTitle={ user.email }
                    image={ require('../assets/mosh.jpg') }
                />
            </View>
            <View style={ styles.container }>
                <FlatList 
                    data={ menuItems }
                    keyExtractor={ item => item.title } 
                    ItemSeparatorComponent={ ListItemSeperator }
                    renderItem={ ({ item }) => <ListItem 
                            title={ item.title}
                            IconComponent={ <Icon name={ item.icon.name } backgroundColor={ item.icon.backgroundColor } /> }
                            onPress={ () => navigation.navigate(item.targetScreen) }
                        />
                    }
                />
            </View>
            <ListItem
                onPress={ logOut }
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})
