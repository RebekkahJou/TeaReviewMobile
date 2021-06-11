import React from 'react';
import {
  ImageBackground,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
} from 'react-native';
import SingleStripe from './SingleStripe';
import styles from './MyStylesheet';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SingleTea = ({route, navigation}) => {
  const {children, title, time, instructions} = route.params;
  const isDarkMode = useColorScheme() === 'dark';

  let stripeArea;
  console.log(time);
  if (time) {
    stripeArea = <SingleStripe time={time} instructions={instructions} />;
  } else {
    stripeArea = <Image source={require('../public/teacup.png')} />;
  }

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../public/purple01.jpg')}
        style={styles.backgroundimage}>
        <Text style={[styles.sectionTitle]}>{title}</Text>
      </ImageBackground>

      <Button
        title="Back"
        color="#003300"
        onPress={() => navigation.goBack()}
      />

      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
        {'\n\n'}
      </Text>
      {stripeArea}
    </View>
  );
};

export default SingleTea;
