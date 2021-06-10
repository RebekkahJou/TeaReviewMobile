import React from 'react';
import {View, Text, Stack, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';
import styles from './MyStylesheet';
import SectionData from './info';

const Sections = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      {SectionData.map(section => {
        return (
          <Section
            key={section.id}
            title={section.title}
            time={section.time}
            instructions={section.instructions}>
            {section.description}
          </Section>
        );
      })}
    </View>
  );
};

export default Sections;
