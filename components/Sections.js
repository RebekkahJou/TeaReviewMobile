import React from 'react';
import {View, Text, Stack, useColorScheme, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';
import styles from './MyStylesheet';
import SectionData from './info';

const Sections = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
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
            {'\n\n'}
            <Button
              color="#003300"
              title="See Just This Tea"
              onPress={() => {
                navigation.navigate(`${section.title}`, {
                  title: section.title,
                  instructions: section.instructions,
                  children: section.description,
                  time: section.time,
                });
              }}
            />
          </Section>
        );
      })}
    </View>
  );
};

const singleTeaScreen = ({navigation, route}) => {
  return <Text>Go to this tea and get rid of distractions</Text>;
};

export default Sections;
