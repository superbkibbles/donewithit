import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen ({ route }) {
    const listing = route.params;
    return (
        <KeyboardAvoidingView
            behavior='position'
            keyboardVerticalOffset={ Platform.OS == 'ios'? 0: 100 }
        >
            <ScrollView>
                <Image 
                    style={ styles.image }
                    uri={listing.images[0].url }
                    preview={{ uri: listing.images[0].thubnailUrl }}
                    tint='light' 
                />
                <View style={ styles.detailsContainer }>
                    <AppText style={ styles.title }>{ listing.title }</AppText>
                    <AppText style={ styles.price }>{ listing.price }</AppText>
                    <View style={ styles.userContainer }>
                        <ListItem 
                            image={ require('../assets/mosh.jpg') }
                            title='Mosh Hamedi'
                            subTitle='5 Listing'
                        />
                    </View>
                    <ContactSellerForm listing={ listing } />
                </View>
            </ScrollView>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24 ,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})
