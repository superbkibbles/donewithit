import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import expoPushTokenApi from '../api/expoPushTokens';
import { navigate } from '../navigation/rootNavigation';

export default useNotofication = (notificationListener) => {
    useEffect(() => {
        registerForPushNotification();

        if (notificationListener) Notifications.addListener(notificationListener)
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
}