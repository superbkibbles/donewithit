import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import welcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={ routes.WELCOME } component={ welcomeScreen } options={{ headerShown: false }} />
        <Stack.Screen name={ routes.LOGIN } component={ LoginScreen } />
        <Stack.Screen name={ routes.REGISTER } component={ RegisterScreen } />
    </Stack.Navigator>
)

export default AuthNavigator