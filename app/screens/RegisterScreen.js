import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import ActivityIndicator from '../components/ActivityIndicator';
import authApi from '../api/auth';
import users from '../api/users';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import {
    AppFormField,
     SubmitButton,
      AppForm, 
      ErrorMessage
    } from '../components/forms'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function RegisterScreen()  {
    const registerApi = useApi(users.register);
    const loginApi = useApi(authApi.login);
    const { login } = useAuth();

    const [error, setError] = useState('');

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else setError('An unexpected error occured');
            return;
        }
        const res = await loginApi.request(userInfo.email, userInfo.password);

        if (!res.ok) return;
        
        login(res.data);
    }
    return (
        <>
            <ActivityIndicator visible={ registerApi.loading || loginApi.loading } />
            <Screen style={ styles.container }>
                <AppForm
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={ handleSubmit }
                    validationSchema={ validationSchema }
                >
                    <ErrorMessage error={error} visible={ true }/>
                    <AppFormField
                        name='name'
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='account'
                        placeholder='Name'
                    />
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
                    <SubmitButton title='Register'  />
                </AppForm>
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
