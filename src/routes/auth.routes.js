import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Register from '../screens/Register';
import Login from '../screens/Login';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="Login" component={Login} />
  </Auth.Navigator>
);

export default AuthRoutes;
