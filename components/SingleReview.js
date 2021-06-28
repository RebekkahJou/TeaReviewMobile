import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSingleReview} from '../store/sections';
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

const SingleReview = props => {
  const review = useSelector(state => state.reviews.singleReview);
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchSingleReview(props.route.name));
    } catch (error) {
      console.error('This tea is still steeping, try back later.');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (review) {
    return (
      <ScrollView style={styles.sectionContainer}>
        <ImageBackground
          source={require('../public/purple01.jpg')}
          style={styles.backgroundimage}>
          <Text style={styles.sectionTitle}>{review.teaName}</Text>
        </ImageBackground>

        <Button
          title="Back"
          color="#003300"
          onPress={() => props.navigation.goBack()}
        />

        <View style={styles.reviewTable}>
          <View>
            <Text style={styles.sectionTitle}>{review.teaName}</Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Type of Tea</Text>
            <Text style={styles.reviewText}>
              {review.teaName}, {review.format}
            </Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Flavor Aspects</Text>
            <Text style={styles.reviewText}>{review.flavors}</Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Where I Got It</Text>
            <Text style={styles.reviewText}>{review.obtainedFrom}</Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Cost</Text>
            <Text style={styles.reviewText}>
              {review.cost} per {review.perQty}
            </Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>How I Brewed It</Text>
            <Text style={styles.reviewText}>{review.brewingStyle}</Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Rebrewing Notes</Text>
            <Text style={styles.reviewText}>{review.rebrewing}</Text>
          </View>

          <View>
            <Text style={styles.reviewLabel}>Review</Text>
            <Text style={styles.reviewText}>{review.review}</Text>
          </View>
        </View>
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

export default SingleReview;
