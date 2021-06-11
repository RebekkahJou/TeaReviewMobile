import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './MyStylesheet';
import TouchButton from './TouchButton';

const SingleStripe = props => {
  const instructions = props.instructions;
  const time = props.time;

  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>{time}</Text>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.stripetext}>{instructions}</Text>
      </View>
      <TouchButton />
    </View>
  );
};

export default SingleStripe;
