import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../public/MyStylesheet';

const Stripe = props => {
  const instructions = props.instructions;
  const [instDisplay, setInstDisplay] = useState(
    time ? 'Hold button to show brewing instructions' : ' ',
  );
  const time = props.time / 60000;

  const [isShortPressed, setIsShortPressed] = useState(false);

  useEffect(() => {
    if (!isShortPressed) {
      setInstDisplay('Hold button to show brewing instructions');
    } else {
      setInstDisplay(instructions);
    }
  }, [isShortPressed, instructions]);

  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>Suggested brewing time: {time}</Text>
      </View>
      <View style={styles.instructions}>
        <Text style={styles.stripetext}>{instDisplay}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsShortPressed(!isShortPressed)}>
          <Text style={styles.buttonText}>The Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stripe;
