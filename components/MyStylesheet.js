import {transform} from '@babel/core';
import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';

//colors above stylesheet
export const colors = {
  darkgreen: '#003300',
  purple: '#5900b3',
  gold: '#ffcc00',
  transgrey: 'rgba(255, 255, 255, 0.4)',
  translightgrey: 'rgba(300, 300, 300, 0.2)',
};

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
    backgroundColor: colors.translightgrey,
    color: 'black',
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
    backgroundColor: colors.transgrey,
  },
  ital: {
    fontStyle: 'italic',
  },
  backgroundimage: {
    height: null,
    width: null,
  },
  headerContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
  },
  button: {
    color: 'black',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: colors.gold,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  container: {
    backgroundColor: colors.gold,
    color: 'black',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },

  stripe: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
  },
  stripetext: {
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  timer: {
    backgroundColor: colors.purple,
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  instructions: {
    backgroundColor: colors.darkgreen,
    flexWrap: 'wrap',
    flexBasis: 1,
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
