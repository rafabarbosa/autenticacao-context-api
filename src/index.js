import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from './hooks';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
