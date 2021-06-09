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

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../public/purple01.jpg')}
        style={styles.backgroundimage}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      </ImageBackground>
      <Stripe />
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
        <Button
          onPress={() => {
            alert('Tappity tap');
          }}
          title="Itsapress"
          color="#660066"
        />
      </View>
    </View>
  );
};

export default Section;
