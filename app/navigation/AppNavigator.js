import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigaror';
import NewListingButton from './NewListingButton';
import expoPushTokenApi from '../api/expoPushTokens';
import routes from './routes';
import { navigate } from './rootNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useEffect(() => {
        registerForPushNotification();

        Notifications.addListener(notifcation => {
            navigate(routes.ACCOUNT);
        })
    }, [])
    
    const registerForPushNotification = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;
    
            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
            expoPushTokenApi.register(token);
        } catch (error) {
            console.log('error getting push navigation', error)
        }
    };
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ routes.FEEDS } 
                component={ FeedNavigator }
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={ color } size={ size } />
                }}
            />
            <Tab.Screen name={routes.LISTING_EDIT } component={ ListingEditScreen } 
                options={({navigation}) => ({
                    tabBarButton: () => <NewListingButton onPress={ () => navigation.navigate('ListingEdit')} />,
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle' color={ color } size={ size } />
                })}
            />
            <Tab.Screen name={ routes.ACCOUNT } component={ AccountNavigator }
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={ color } size={ size } />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator;