import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MyStylesheet';

const Stripe = props => {
  const instructions = props.instructions;
  const [instDisplay, setInstDisplay] = useState(
    time ? 'Hold button to show brewing instructions' : ' ',
  );
  const time = props.time;
  console.log(instDisplay);

  const [countdown, setCountdown] = useState(time / 1000);
  const [initialTime, setInitialTime] = useState(time / 1000);
  const [timeDisplay, setTimeDisplay] = useState(`${countdown} seconds`);

  const [isShortPressed, setIsShortPressed] = useState(false);
  const [isLongPressed, setIsLongPressed] = useState(false);

  useEffect(() => {
    if (!isShortPressed) {
      setCountdown(initialTime);
      setTimeDisplay(`${countdown} seconds`);
    } else {
      // function timer() {
      //   let interval = setInterval(downcount, 1000);
      // }
      // function downcount() {
      //   setCountdown(countdown - 1);
      // }
      // return clearInterval(timer);
      setTimeDisplay(`${countdown} sec`);
    }

    if (!isLongPressed) {
      setInstDisplay('Hold button to show brewing instructions');
    } else {
      setInstDisplay(instructions);
    }
  }, [
    isLongPressed,
    isShortPressed,
    countdown,
    timeDisplay,
    instructions,
    initialTime,
  ]);

  return (
    <View style={styles.stripe}>
      <View style={styles.timer}>
        <Text style={styles.stripetext}>{timeDisplay}</Text>
      </View>
      <View style={styles.instructions}>
        <Text style={styles.stripetext}>{instDisplay}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsShortPressed(!isShortPressed)}
          onLongPress={() => setIsLongPressed(!isLongPressed)}>
          <Text style={styles.buttonText}>The Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stripe;
