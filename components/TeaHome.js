import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import Sections from './Sections';
import SingleTea from './SingleTea';
import SingleReview from './SingleReview';

const Tea = createStackNavigator();

const TeaHome = () => {
  const sections = useSelector(state => state.sections.allSections);
  const reviews = useSelector(state => state.reviews.allReviews);

  return (
    <Tea.Navigator>
      {sections.map(({id, title}) => {
        return <Tea.Screen name={`${id}`} key={id} component={SingleTea} />;
      })}
      <Tea.Screen name="Tea List" component={Sections} />
      {reviews.map(review => {
        return (
          <Tea.Screen
            name={`${review.id}`}
            key={review.id}
            component={SingleReview}
          />
        );
      })}
    </Tea.Navigator>
  );
};

export default TeaHome;
