import React from 'react';
import {ImageBackground, Image, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Stripe from './Stripe';
import styles from '../public/MyStylesheet';

const Section = ({children, title, time, instructions}) => {
  const isDarkMode = useColorScheme() === 'dark';

  let stripeArea;
  if (time) {
    stripeArea = (
      <Stripe time={time} instructions={instructions} style={styles.button} />
    );
  } else {
    <Image source={require('../public/teacup.png')} styles={styles.pic} />;
  }

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
      <View>{stripeArea}</View>
    </View>
  );
};

export default Section;
