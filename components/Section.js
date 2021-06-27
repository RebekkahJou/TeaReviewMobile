import React from 'react';
import {ImageBackground, Image, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Stripe from './Stripe';
import styles from '../public/MyStylesheet';

const Section = ({description, title, time, instructions}) => {
  const isDarkMode = useColorScheme() === 'dark';
  let stripeArea;
  if (time) {
    stripeArea = (
      <Stripe time={time} instructions={instructions} style={styles.button} />
    );
  } else {
    <Image source={require('../public/teacup.png')} styles={styles.smallPic} />;
  }

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../public/purple01.jpg')}
        style={styles.backgroundimage}>
        <Text style={[styles.sectionTitle]}>{title}</Text>
      </ImageBackground>

      <View style={styles.box}>
        <Text style={[styles.sectionDescription]}>{description}</Text>
      </View>

      <View>{stripeArea}</View>
    </View>
  );
};

export default Section;
