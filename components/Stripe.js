import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './MyStylesheet';
import TouchButton from './TouchButton';

const Stripe = props => {
  const instructions = props.instructions;
  const [instDisplay, setInstDisplay] = useState(
    time ? 'Hold button to show brewing instructions' : ' ',
  );
  const time = props.time;
  const [countdown, setCountdown] = useState(time);
  const [timeDisplay, setTimeDisplay] = useState(time);

  const [isShortPressed, setIsShortPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState(false);

  useEffect(() => {
    if (!isShortPressed) {
      setCountdown();
      setTimeDisplay(countdown ? countdown : '');
    } else {
      setTimeDisplay(countdown ? countdown : '');
    }

    if (!isLongPressed) {
      setInstDisplay(
        timeDisplay ? 'Hold button to show brewing instructions' : '',
      );
    } else {
      setInstDisplay(instructions);
    }
  }, [isLongPressed, isShortPressed, countdown, timeDisplay, instructions]);

  console.log(instDisplay);

  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>{time ? timeDisplay : ''}</Text>
      </View>
      <View style={styles.instructions}>
        <Text style={styles.stripetext}>{instDisplay}</Text>
      </View>
      <TouchButton
        onPress={() => setIsShortPressed(!isShortPressed)}
        onLongPress={() => setIsLongPressed(!isLongPressed)}
      />
    </View>
  );
};

export default Stripe;
