import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import { getUser } from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import logger from './app/utility/logger';

logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const user = await getUser();
    if(user) setUser(user);
  }
  
  if (!isReady)
    return <AppLoading startAsync={ restoreToken } onFinish={ () => setIsReady(true) } />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={ navigationRef } theme={ navigationTheme }>
        { user ? <AppNavigator />: <AuthNavigator />}    
      </NavigationContainer>
    </AuthContext.Provider>
  );
}