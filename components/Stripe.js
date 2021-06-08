import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import {MyStyles} from './MyStylesheet';

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

const styles = StyleSheet.create({
  stripe: {
    flex: 1,
    color: 'yellow',
    flexDirection: 'row',
  },
  stripetext: {
    color: 'white',
    padding: 5,
  },
  blue: {
    backgroundColor: 'darkblue',
    flex: 1,
  },
  red: {
    backgroundColor: '#883300 hsl(300, 100%, 30%)',
    flex: 2,
  },
});

export default Stripe;
