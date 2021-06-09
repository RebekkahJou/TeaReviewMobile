import React from 'react';
import {View, Text} from 'react-native';
import styles from './MyStylesheet';

const Stripe = props => {
  const time = props.time;
  const instructions = props.instructions;
  const timeDisplay = `${Math.floor(time / 1000 / 60)}:${Math.floor(
    (time - time / 1000 / 60) / 1000,
  )}`;
  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>
          {time ? timeDisplay : 'This is nice.'}
        </Text>
      </View>
      <View style={styles.instructions}>
        <Text style={styles.stripetext}>Here too!</Text>
      </View>
    </View>
  );
};

export default Stripe;
