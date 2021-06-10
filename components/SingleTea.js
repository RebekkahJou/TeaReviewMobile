import React from 'react';
import {
  ImageBackground,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Stripe from './Stripe';
import styles from './MyStylesheet';

const SingleTea = ({route, navigation}) => {
  const {children, title, time, instructions} = route.params;
  const isDarkMode = useColorScheme() === 'dark';

  let stripeArea;
  if (time) {
    stripeArea = <Stripe time={time} instructions={instructions} />;
  } else {
    stripeArea = <Text> </Text>;
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

      <View style={styles.button}>{stripeArea}</View>

      <Button
        title="Back"
        color="#003300"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SingleTea;
