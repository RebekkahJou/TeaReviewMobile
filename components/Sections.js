import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Stack,
  useColorScheme,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';

const Sections = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      {SectionData.map(section => {
        return (
          <View key={section.id}>
            {section.time ? (
              <Section
                title={section.title}
                time={section.time}
                instructions={section.instructions}>
                {section.description}
                {'\n\n'}
              </Section>
            ) : (
              <Section title={section.title}>{section.description}</Section>
            )}
            <Button
              color="#003300"
              title="Closer Look"
              onPress={() => {
                navigation.navigate(`${section.title}`, {
                  title: section.title,
                  instructions: section.instructions,
                  children: section.description,
                  time: section.time,
                });
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const singleTeaScreen = ({navigation, route}) => {
  return <Text>Go to this tea and get rid of distractions</Text>;
};

export default Sections;
