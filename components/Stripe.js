import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './MyStylesheet';

const Stripe = () => {
  return (
    <View style={styles.stripe}>
      <View style={styles.blue}>
        <Text style={styles.stripetext}>There is text in here.</Text>
      </View>
      <View style={styles.red}>
        <Text style={styles.stripetext}>Here too!</Text>
      </View>
    </View>
  );
};

export default Stripe;
