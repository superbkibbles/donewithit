import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'loremsdbvjdsbvjbdsv dskv dskbvdshb vkdsbkvdsb vdsb kvbds kvdsbkv bdsvbsdkbv sdk vkdsj vkjdsb vkds bvsdb v dskvbd s',
        description: 'sdbjvhbdsjds vh svs dkvb skv sjkvsiuv fs vds vkbdskv dsvksb kvdsbkvb dsksjvkb vkds bvkd s',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'C1',
        description: 'F1',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen () {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const HandleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                data={ messages }
                ketExtractor={ message => message.id.toString() }
                renderItem={ ({ item }) => <ListItem 
                    title={ item.title }
                    subTitle={ item.description }
                    image={ item.image }
                    onPress={() => console.log('message selectred', item)}
                    renderRightAction={ () => <ListItemDeleteAction 
                        onPress={() => HandleDelete(item)}
                    /> }
                /> }
                ItemSeparatorComponent={ ListItemSeperator }
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'C1',
                            description: 'F1',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})