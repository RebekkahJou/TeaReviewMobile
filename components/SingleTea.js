import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSingleSection} from '../store/sections';
import {fetchFilteredReviews} from '../store/reviews';
import {
  ImageBackground,
  Text,
  useColorScheme,
  Button,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../public/MyStylesheet';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

const SingleTea = props => {
  const section = useSelector(state => state.sections.singleSection);
  const filteredReviews = useSelector(state => state.reviews.filteredReviews);
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('PROPSROUTENAME', props.route.name);

    try {
      dispatch(fetchSingleSection(props.route.name));
      dispatch(fetchFilteredReviews(props.route.name));
    } catch (error) {
      console.error('This tea is still steeping, try back later.');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (section) {
    return (
      <ScrollView style={styles.sectionContainer}>
        <ImageBackground
          source={require('../public/purple01.jpg')}
          style={styles.backgroundimage}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
        </ImageBackground>

        <Button
          title="Back"
          color="#003300"
          onPress={() => props.navigation.goBack()}
        />
        <View style={styles.description}>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.light : Colors.dark,
              },
            ]}>
            {section.description}
          </Text>
        </View>

        {section.time && (
          <View>
            <View>
              <Text style={styles.teaButton}>
                Average brewing time: {section.time / 60000} minutes
              </Text>
            </View>
            <View style={styles.instructions}>
              <Text style={[styles.stripetext, {fontWeight: 'bold'}]}>
                Brewing Instructions:
              </Text>
              <Text style={styles.stripetext}>{section.instructions}</Text>
            </View>
          </View>
        )}
        {!section.time && (
          <Image
            source={require('../public/teacup.png')}
            style={styles.smallPic}
          />
        )}
        {/* ternary operator; if reviews exist, include links to each review if this tea happens to have reviews*/}
        {filteredReviews &&
        filteredReviews.data &&
        filteredReviews.data.length > 0 ? (
          <View style={[styles.reviewTable, {flexDirection: 'column'}]}>
            <Text style={styles.reviewLabel}>Reviews of {section.title}s</Text>
            {filteredReviews.data.map(review => {
              return (
                <Button
                  color="#003300"
                  key={review.id}
                  title={review.teaName}
                  onPress={() => {
                    navigation.navigate(`${review.id}`);
                  }}
                />
              );
            })}
          </View>
        ) : (
          <View>
            <Text>Isn't tea wonderful?</Text>
          </View>
        )}
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

export default SingleTea;
