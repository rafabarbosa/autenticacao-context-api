import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@PayOne:token');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token: token[1]});
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('login', {email, password});
    const {user_token} = response.data.results;

    await AsyncStorage.setItem('@PayOne:token', user_token);

    api.defaults.headers.authorization = `Bearer ${user_token}`;
    setData({token: user_token});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@PayOne:token');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{token: data.token, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
