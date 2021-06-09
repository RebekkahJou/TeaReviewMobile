import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    height: 100,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  author: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  ital: {
    fontStyle: 'italic',
  },
  backgroundimage: {
    height: null,
    width: null,
  },
  button: {
    color: '#222211',
    borderRadius: 30,
  },
  stripe: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  stripetext: {
    color: 'white',
    padding: 5,
  },
  blue: {
    backgroundColor: '#000066',
    flex: 1,
  },
  red: {
    backgroundColor: '#bb0000',
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
    top: 10,
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1,
    flexShrink: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default styles;
