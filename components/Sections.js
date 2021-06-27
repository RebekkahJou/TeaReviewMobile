import React, {useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Image,
  Stack,
  useColorScheme,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';
import styles from '../public/MyStylesheet';
import {fetchAllSections} from '../store/sections';

const Sections = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const allSections = useSelector(state => state.sections.allSections);
  console.log(allSections, 'allSECTIONS');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSections());
  }, [dispatch]);

  if (allSections && allSections.length > 0) {
    return (
      <ScrollView
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {allSections.map(section => {
          return (
            <View key={section.id}>
              {section.time ? (
                //ternary--if time exists, map as tea section with brewing time etc...
                <Section
                  title={section.title}
                  time={section.time}
                  instructions={section.instructions}>
                  <Text>{section.description}</Text>
                  {'\n\n'}
                </Section>
              ) : (
                //ternary-- ...else map without brewing time, instructions, or button
                <Section title={section.title}>{section.description}</Section>
              )}
              <Button
                color="#003300"
                title="Closer Look"
                onPress={() => {
                  navigation.navigate(`${section.id}`, {
                    title: section.title,
                    instructions: section.instructions,
                    description: section.description,
                    time: section.time,
                  });
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text style={styles.nothingHere}>
          Something has gone wrong. Have some tea while you wait for a fix.
        </Text>
        <Image
          source={require('../public/teacup.png')}
          style={styles.smallPic}
        />
      </View>
    );
  }
};

const singleTeaScreen = ({navigation, route}) => {
  return <Text>Go to this tea and get rid of distractions</Text>;
};

export default Sections;
