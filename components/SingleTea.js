import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSingleSection} from '../store/sections';
import {
  ImageBackground,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
} from 'react-native';
import SingleStripe from './SingleStripe';
import styles from '../public/MyStylesheet';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SingleTea = props => {
  console.log('PROPS IN SINGLETEA,', props);
  const section = useSelector(state => state.sections.singleSection);
  console.log('SECTION in SINGLETEA', section);
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchSingleSection(props.route.name));
    } catch (error) {
      console.error('This tea is still steeping, try back later.');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let stripeArea;
  if (section && section.time) {
    stripeArea = (
      <SingleStripe time={section.time} instructions={section.instructions} />
    );
  } else {
    stripeArea = <Image source={require('../public/teacup.png')} />;
  }
  if (section) {
    console.log(section, 'SECTION IN SINGLETEA line 45');
    return (
      <View style={styles.sectionContainer}>
        <ImageBackground
          source={require('../public/purple01.jpg')}
          style={styles.backgroundimage}>
          <Text style={[styles.sectionTitle]}>{section.title}</Text>
        </ImageBackground>

        <Button
          title="Back"
          color="#003300"
          onPress={() => props.navigation.goBack()}
        />

        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {section.description}
          {'\n\n'}
        </Text>
        {stripeArea}
      </View>
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

export default SingleTea;
