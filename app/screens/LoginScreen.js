import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import { 
    AppFormField,
    SubmitButton,
    AppForm,
    ErrorMessage
    } from '../components/forms'
import Screen from '../components/Screen';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false)
    const { login } = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const res = await authApi.login(email, password);

        if (!res.ok) return setLoginFailed(true);
        setLoginFailed(false);
        
        login(res.data);
    }
    return (
        <Screen style={ styles.container }>
            <Image style={ styles.logo } source={ require('../assets/logo-red.png') } />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={ validationSchema }
            >
                <ErrorMessage error='Invalid email and/or password' visible={ loginFailed }/>
                <AppFormField
                    name='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    placeholder='Email'
                    textContentType='emailAddress'
                />
                <AppFormField
                    name='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    keyboardType='email-address'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                />
                <SubmitButton title='Login' />
            </AppForm>
            
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
