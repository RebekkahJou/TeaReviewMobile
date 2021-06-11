import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import styles from './MyStylesheet';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../public/yellow02.jpg')} style={styles.pic} />
      <View style={styles.absolute}>
        <Text style={styles.title}>absoluTEAly in love {'\n'}with TEA</Text>
      </View>
      <View style={styles.author}>
        <Text style={styles.highlight}>
          Text mostly by Nyssa McMahan, many years ago {'\n'}Web design by
          Rebekkah Jou, async week
        </Text>
      </View>
    </View>
  );
};

export default Header;
