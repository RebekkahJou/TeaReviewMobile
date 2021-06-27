import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../public/MyStylesheet';
import TouchButton from './TouchButton';

const SingleStripe = props => {
  const instructions = props.instructions;
  const time = props.time;
  console.log(props);

  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>
          Average suggested brewing time: {time / 60000} minutes
        </Text>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.stripetext}>{instructions}</Text>
      </View>
      <TouchButton />
      <View>
        <Text style={styles.stripetext}>Reviews</Text>
      </View>
    </View>
  );
};

export default SingleStripe;
