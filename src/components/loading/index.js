import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Styles from './styles';

const Loading = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default Loading;
