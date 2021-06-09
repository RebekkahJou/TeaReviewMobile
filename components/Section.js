import React from 'react';
import {
  ImageBackground,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Stripe from './Stripe';
import styles from './MyStylesheet';
import Touchbutton from './TouchButton';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../public/purple01.jpg')}
        style={styles.backgroundimage}>
        <Text style={[styles.sectionTitle]}>{title}</Text>
      </ImageBackground>

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <View style={styles.button}>
        <Stripe />
        {/* <Button
          onPress={() => {
            alert('Tappity tap');
          }}
          title="Itsapress"
          color="#ffcc00"
        /> */}
        <Touchbutton />
      </View>
    </View>
  );
};

export default Section;
