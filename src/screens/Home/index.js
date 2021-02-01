import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles.js';

import {useAuth} from '../../hooks/auth';

const Home = () => {
  const {signOut} = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Home</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={Styles.button}
        onPress={() => handleSignOut()}>
        <Text style={Styles.buttonText}>Sair</Text>
      </TouchableOpacity>
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, officia similique pariatur voluptates temporibus et
          delectus inventore cumque! Ullam, facere! Dolor eius quis impedit
          soluta vel. Ad dolorem placeat animi officiis et porro sapiente alias
          nemo provident incidunt minima laudantium dolores voluptate fuga quod
          dolor vitae, necessitatibus laborum! Cupiditate dicta itaque
          repellendus tempora, doloremque eaque quaerat? Dicta veritatis
          delectus temporibus earum, enim dignissimos quia, quos ipsum pariatur
          est similique minima. Similique voluptatibus fuga itaque. Commodi
          dolorem culpa maxime dolor deserunt cumque nam quidem inventore
          consequatur cum minima doloremque atque quaerat delectus ea officiis
          excepturi exercitationem eius minus, harum enim aliquam.
        </Text>
      </View>
    </View>
  );
};

export default Home;
