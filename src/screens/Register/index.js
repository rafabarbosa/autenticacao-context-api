import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles.js';

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {};

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Register</Text>
      <View>
        <TextInput
          style={Styles.input}
          value={username}
          onChangeText={(data) => setUsername(data)}
          placeholder="Username"
        />

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
          onPress={() => handleRegister()}>
          <Text style={Styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={Styles.loginContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Login')}>
        <Text style={Styles.loginText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
