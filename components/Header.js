import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.stripe}>
      <Image
        source={require('../public/defaultCampus.jpg')}
        style={styles.pic}
      />
      <View style={styles.absolute}>
        <Text style={styles.title}>I am ABSOLUTE.</Text>
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
  blue: {
    backgroundColor: 'blue',
    color: 'white',
    flex: 1,
  },
  red: {
    backgroundColor: 'purple',
    flex: 2,
  },
  pic: {
    flex: 1,
    height: 200,
    width: undefined,
  },
  absolute: {
    position: 'absolute',
    left: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Header;
