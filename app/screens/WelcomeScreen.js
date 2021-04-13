import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

export default function welcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={ styles.background }
            source={require('../assets/background.jpg')}
        >
            <View style={ styles.logoContainer }>
                <Image source={require('../assets/logo-red.png')} style={ styles.logo } />
                <Text style={ styles.tagLine }>Sell what you don't need</Text>
            </View>

            <View style={ styles.buttonsContainer }>
                <AppButton title='login' onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title='register' color='secondary' onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})