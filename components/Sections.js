import React from 'react';
import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {View, Text, StyleSheet} from 'react-native';
import Section from './Section';

const Sections = ({navigation}) => {
  return (
    <View>
      <Section title="Step One">
        Behold, it is--you invited in--
        <Text style={styles.highlight}>App.js</Text> Noooo, what have you DONE!?
      </Section>
      <Section title="See Your Changes">
        <ReloadInstructions />
      </Section>
      <Section title="Debug">
        <DebugInstructions />
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
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
  backgroundimage: {
    height: null,
    width: null,
  },
  button: {
    color: '#222211',
    borderRadius: 30,
  },
});

export default Sections;
