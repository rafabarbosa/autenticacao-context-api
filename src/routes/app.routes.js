import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: true,
    }}>
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default AppRoutes;
