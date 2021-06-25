/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Header from './Header';
import Sections from './Sections';
import styles from '../public/MyStylesheet';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // For multiple styles, include in array
    <SafeAreaView style={[styles.backgroundContainer, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button
          title="Touchables"
          onPress={() => {
            navigation.navigate('TouchUs', {name: 'buttons'});
          }}
        />
        <Sections />
      </ScrollView>
    </SafeAreaView>
  );
};

const TouchUsScreen = ({navigation, route}) => {
  return <Text>This is button's route</Text>;
};

export default Home;
