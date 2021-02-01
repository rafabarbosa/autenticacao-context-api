import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../hooks/auth';

import Styles from './styles.js';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('rafael@infodev.com.br');
  const [password, setPassword] = useState('123456');

  const {signIn} = useAuth();

  const handleLogin = useCallback(async () => {
    await signIn({
      email,
      password,
    });
  }, [signIn, email, password]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Login</Text>
      <View>
        <TextInput
          style={Styles.input}
          value={email}
          onChangeText={(data) => setEmail(data)}
          placeholder="E-mail"
        />

        <TextInput
          style={Styles.input}
          value={password}
          onChangeText={(data) => setPassword(data)}
          placeholder="Password"
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={Styles.button}
          onPress={() => handleLogin()}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={Styles.registerContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Register')}>
        <Text style={Styles.registerText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
