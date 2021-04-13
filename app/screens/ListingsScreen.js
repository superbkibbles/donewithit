import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

export default function ListingsScreen({ navigation }) {
    const {request: loadListings, data: listings, error, loading} = useApi(listingsApi.getListings)

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={ styles.screen } >
                {error && <>
                    <AppText>Couldn't retrive the listings.</AppText>
                    <AppButton title='Retry' onPress={ loadListings } />
                </>}
                <FlatList 
                    data={ listings }
                    keyExtractor={ listings => listings.id.toString() }
                    showsVerticalScrollIndicator={false}
                    renderItem={ ({ item }) => 
                        <Card 
                            title={ item.title }
                            subTitle={ `$${ item.price }` }
                            imageUrl={ item.images[0].url }
                            thumbnailUrl={ item.images[0].thumbnailUrl }
                            onPress={ () => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    }
                /> 
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingBottom: 0,
        backgroundColor: colors.light
    }
})
